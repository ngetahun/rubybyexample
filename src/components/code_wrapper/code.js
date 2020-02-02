import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { CodeSnippet } from 'carbon-components-react';
import styled from 'styled-components';
import CodeBlock from './code_block';

const codeSnippetProps = {
  type: 'multi',
  feedback: 'Copied 👍',
  light: false,
};

const codeBlockProps = {
  style: {},
};

const Container = styled.div``;

const CodeEditor = props => {
  return (
    <CodeSnippet {...codeSnippetProps} {...props}>
      <CodeBlock {...props} />
    </CodeSnippet>
  );
};
const components = {
  //   pre: props => <CodeSnippet {...codeSnippetProps} {...props} />,
  //   code: props => <CodeSnippet {...codeSnippetProps} {...props} />,
  code: CodeEditor,
};

const CodeWrapper = props => {
  return (
    <MDXProvider components={components}>
      <Container {...props} />
    </MDXProvider>
  );
};

export default CodeWrapper;
