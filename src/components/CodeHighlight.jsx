import React from "react";
// import Prism from "prism-react-renderer";
import { Prism as SyntaxHighlighter } from "prism-react-renderer";
import theme from "prismjs/themes/prism-tomorrow.css";

const CodeHighlight = ({ code, language }) => {
    return (
        <SyntaxHighlighter language={language} style={theme}>
            {code}
        </SyntaxHighlighter>
    );
};

export default CodeHighlight;