/* eslint-disable */
import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { preToCodeBlock } from 'mdx-utils';
import Code from '@components/Code';
import ExtendedDesc from '@components/ExtendedDesc';
import ArticleButton from '@components/ArticleButton';
import Divider from '@components/Divider';

// components is its own object outside of render so that the references to
// components are stable
const components = {
    pre: (preProps) => {
        const props = preToCodeBlock(preProps);
        // if there's a codeString and some props, we passed the test
        if (props) {
            return <Code {...props} />;
        }
        // it's possible to have a pre without a code in it
        return <pre {...preProps} />;
    },
    ExtendedDesc,
    Button: ArticleButton,
    Divider,

    wrapper: ({ children }) => <>{children}</>,
};

const wrapRoot = ({ element }) => <MDXProvider components={components}>{element}</MDXProvider>;

export default wrapRoot;
