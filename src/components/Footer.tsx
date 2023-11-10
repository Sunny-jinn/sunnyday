import React from "react"
import styled from "@emotion/styled"

const FooterWrapper = styled.div`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;
`

export const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      Thank You for Visiting My Blog, Have a Sunny Day 😆
      <br />© 2023 Developer Sunny, Powered By Gatsby.
    </FooterWrapper>
  )
}
