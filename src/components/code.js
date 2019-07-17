import React from "react"
import { Pre } from "./wrapper"
import { MDXProvider } from "@mdx-js/react"
// import { baseStyles } from "unified-ui"
import Wrapper from "./wrapper"
import styled from "styled-components"

const Style = function({ children }) {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: children,
      }}
    />
  )
}
const Container = styled.div`
  position: absolute;
  maxwidth: 100px;
`
const components = {
  pre: props => <Pre {...props} />,
  code: props => <Wrapper {...props} />,
}

// const ContainerProps = {
//     maxWidth: `60%`,
// }

const CodeWrapper = props => {
  console.log(props)
  return (
    <MDXProvider components={components}>
      {/* <Style>{baseStyles}</Style> */}
      <Container {...props} />
    </MDXProvider>
  )
}

export default CodeWrapper
