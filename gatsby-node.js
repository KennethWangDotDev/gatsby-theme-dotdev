const fs = require('fs');
const kebabCase = require('lodash.kebabcase');
const mkdirp = require('mkdirp');
const path = require('path');
const withDefaults = require('./utils/withDefaults');

// Ensure that content directories exist at site-level
// If non-existent they'll be created here (as empty folders)
exports.onPreBootstrap = ({ reporter, store }, themeOptions) => {
    const { program } = store.getState();
    const { projectsPath, writingsPath } = withDefaults(themeOptions);

    const dirs = [
        path.join(program.directory, projectsPath),
        path.join(program.directory, writingsPath),
    ];

    dirs.forEach(dir => {
        if (!fs.existsSync(dir)) {
            reporter.info(`Initializing "${dir}" directory`);
            mkdirp.sync(dir);
        }
    });
};

const mdxResolverPassthrough = fieldName => async (source, args, context, info) => {
    const type = info.schema.getType('Mdx');
    const mdxNode = context.nodeModel.getNodeById({
        id: source.parent,
    });
    const resolver = type.getFields()[fieldName].resolve;
    const result = await resolver(mdxNode, args, context, {
        fieldName,
    });
    return result;
};

// Create general interfaces that you could can use to leverage other data sources
// The core theme sets up MDX as a type for the general interface
exports.createSchemaCustomization = ({ actions, schema }, themeOptions) => {
    const { createTypes, createFieldExtension } = actions;

    const slugify = source => {
        const slug = kebabCase(source.title);
        return `${slug}`.replace(/\/\/+/g, `/`);
    };

    createFieldExtension({
        name: 'slugify',
        extend() {
            return {
                resolve: slugify,
            };
        },
    });

    createFieldExtension({
        name: 'mdxpassthrough',
        args: {
            fieldName: 'String!',
        },
        extend({ fieldName }) {
            return {
                resolve: mdxResolverPassthrough(fieldName),
            };
        },
    });

    createTypes(`
    interface Project @nodeInterface {
        id: ID!
        title: String!
        slug: String! @slugify
        description: String!
        themeColor: String!
        date: Date! @dateformat
        cover: File! @fileByRelativePath
        thumbnail: File! @fileByRelativePath
        excerpt(pruneLength: Int = 160): String!
        body: String!
    }

    type MdxProject implements Node & Project {
        title: String!
        slug: String! @slugify
        description: String!
        themeColor: String!
        date: Date! @dateformat
        cover: File! @fileByRelativePath
        thumbnail: File! @fileByRelativePath
        excerpt(pruneLength: Int = 140): String! @mdxpassthrough(fieldName: "excerpt")
        body: String! @mdxpassthrough(fieldName: "body")
    }

    interface Writing @nodeInterface {
        id: ID!
        title: String!
        slug: String! @slugify
        description: String!
        date: Date! @dateformat
        categories: [String!]!
        thumbnail: File! @fileByRelativePath
        excerpt(pruneLength: Int = 160): String!
        body: String!
        words: Int!
        timeToRead: String!
    }

    type MdxWriting implements Node & Writing {
        title: String!
        slug: String! @slugify
        description: String!
        date: Date! @dateformat
        categories: [String!]!
        thumbnail: File! @fileByRelativePath
        excerpt(pruneLength: Int = 140): String! @mdxpassthrough(fieldName: "excerpt")
        body: String! @mdxpassthrough(fieldName: "body")
        words: Int!
        timeToRead: String!
    }
  `);
};

exports.onCreateNode = async (
    { node, actions, getNode, createNodeId, createContentDigest },
    themeOptions,
) => {
    const { createNode, createParentChildLink } = actions;
    const { projectsPath, writingsPath } = withDefaults(themeOptions);

    // Make sure that it's an MDX node
    if (node.internal.type !== 'Mdx') {
        return;
    }

    const fileNode = getNode(node.parent);
    const source = fileNode.sourceInstanceName;
    const fieldData = {
        title: node.frontmatter.title,
        description: node.frontmatter.description,
        thumbnail: node.frontmatter.thumbnail,
        date: node.frontmatter.date,
    };

    let mdxId;
    let type;
    let description;

    // Source specific
    if (source === projectsPath) {
        fieldData.cover = node.frontmatter.cover;
        fieldData.themeColor = node.frontmatter.themeColor;
        mdxId = createNodeId(`${node.id} >>> MdxProject`);
        type = 'MdxProject';
        description = 'Mdx implementation of the Project interface';
    } else if (source === writingsPath) {
        fieldData.categories = node.frontmatter.categories;
        fieldData.timeToRead = node.fields.readingTime.text;
        fieldData.words = node.fields.readingTime.words;
        mdxId = createNodeId(`${node.id} >>> MdxWriting`);
        type = 'MdxWriting';
        description = 'Mdx implementation of the Writing interface';
    }

    createNode({
        ...fieldData,
        // Required fields
        id: mdxId,
        parent: node.id,
        children: [],
        internal: {
            type,
            contentDigest: createContentDigest(fieldData),
            content: JSON.stringify(fieldData),
            description,
        },
    });
    createParentChildLink({ parent: node, child: getNode(mdxId) });
};

const writingPost = require.resolve('./src/views/WritingPost/index.tsx');
const projectTemplate = require.resolve('./src/views/ProjectTemplate/index.tsx');
exports.createPages = async ({ actions, graphql, reporter }, themeOptions) => {
    const { createPage } = actions;
    const { basePath } = withDefaults(themeOptions);

    // Projects
    const resultProjects = await graphql(`
        query {
            allProject(sort: { fields: date, order: DESC }) {
                nodes {
                    slug
                    ... on MdxProject {
                        parent {
                            ... on Mdx {
                                fileAbsolutePath
                            }
                        }
                    }
                    title
                    description
                    themeColor
                    thumbnail {
                        childImageSharp {
                            fluid(maxWidth: 770, quality: 90) {
                                aspectRatio
                                base64
                                src
                                srcSet
                                srcSetWebp
                                srcWebp
                                sizes
                            }
                        }
                    }
                    cover {
                        childImageSharp {
                            fluid(maxWidth: 770, quality: 90) {
                                aspectRatio
                                base64
                                src
                                srcSet
                                srcSetWebp
                                srcWebp
                                sizes
                            }
                        }
                    }
                }
            }
        }
    `);
    if (resultProjects.errors) {
        reporter.panic('There was an error loading your projects or pages', resultProjects.errors);
        return;
    }
    const projects = resultProjects.data.allProject.nodes;
    projects.forEach(project => {
        const { fileAbsolutePath } = project.parent;
        createPage({
            path: `${basePath}projects/${project.slug}`,
            component: projectTemplate,
            context: {
                slug: project.slug,
                absolutePathRegex: `/^${path.dirname(fileAbsolutePath)}/`,
            },
        });
    });

    // Writings
    const resultWritings = await graphql(`
        query {
            allWriting(sort: { fields: date, order: DESC }) {
                nodes {
                    slug
                    ... on MdxWriting {
                        parent {
                            ... on Mdx {
                                fileAbsolutePath
                            }
                        }
                    }
                    title
                    description
                    categories
                    thumbnail {
                        childImageSharp {
                            fluid(maxWidth: 770, quality: 90) {
                                aspectRatio
                                base64
                                src
                                srcSet
                                srcSetWebp
                                srcWebp
                                sizes
                            }
                        }
                    }
                }
            }
        }
    `);
    if (resultWritings.errors) {
        reporter.panic('There was an error loading your projects or pages', resultWritings.errors);
        return;
    }
    const writings = resultWritings.data.allWriting.nodes;
    writings.forEach(writing => {
        const { fileAbsolutePath } = writing.parent;
        createPage({
            path: `${basePath}writings/${writing.slug}`,
            component: writingPost,
            context: {
                slug: writing.slug,
                absolutePathRegex: `/^${path.dirname(fileAbsolutePath)}/`,
            },
        });
    });
};
