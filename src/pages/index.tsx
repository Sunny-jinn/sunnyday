import React, { FunctionComponent } from "react"
import Text from "../components/Test"
import { Link } from "gatsby"

const IndexPage: FunctionComponent = function () {
  return (
    <>
      안녕
      <Link to="/info/">To Info</Link>
    </>
  )
}

export default IndexPage
