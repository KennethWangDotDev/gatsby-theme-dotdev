module.exports = themeOptions => {
    const basePath = themeOptions.basePath || `/`;
    const projectsPath = themeOptions.projectsPath || `content/projects`;
    const writingsPath = themeOptions.writingsPath || `content/writings`;
    const assetsPath = themeOptions.assetsPath || `content/assets`;

    return {
        basePath,
        projectsPath,
        writingsPath,
        assetsPath,
    };
};
