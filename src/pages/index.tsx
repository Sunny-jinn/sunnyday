import React, { FunctionComponent } from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { Introduction } from "../components/Introduction"
import { Footer } from "../components/Footer"
import { CategoryList } from "../components/CategoryList"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const CATEGORY_LIST = {
  All: 5,
  Web: 3,
  Mobile: 2,
}

const IndexPage: FunctionComponent = function () {
  return (
    <Container>
      <Introduction />

      <CategoryList selectedCategory="Web" categoryList={CATEGORY_LIST} />
      <span>Hi</span>
      <Footer />
    </Container>
  )
}

export default IndexPage
