import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { CodeSnippet } from 'carbon-components-react';
import styled from 'styled-components';

const codeSnippetProps = {
  type: 'multi',
  feedback: 'Copied 👍',
  light: false,
};

const Container = styled.div`
  position: absolute;
  maxwidth: 100px;
`;
const components = {
  pre: props => <CodeSnippet {...codeSnippetProps} {...props} />,
  code: props => <CodeSnippet {...codeSnippetProps} {...props} />,
};

const CodeWrapper = props => {
  return (
    <MDXProvider components={components}>
      <Container {...props} />
    </MDXProvider>
  );
};

export default CodeWrapper;
