import * as React from "react"
import type { HeadFC } from "gatsby"
import styled from 'styled-components';

const Heading = styled.h1`
  color: ${({ theme }) => theme.cuteColor};
  background-color:  ${({ theme }) => theme.bgs.black};
  font-size: 24px;
  padding: 16px 32px;
  text-align: center;
`
import themeVariables from '../styles/theme';

type Theme = typeof themeVariables;
interface DefaultTheme extends Theme {}


const IndexPage = () => {
  return (
    <main>
      <Heading>Gatsby + Styled-components</Heading>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
