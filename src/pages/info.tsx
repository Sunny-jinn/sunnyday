import React, { FunctionComponent } from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"

const TestStyle = styled.div`
  font-size: 30px;
  font-weight: 600;
  color: red;
`

type InfoPageProps = {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: {
          name: string
          summary: string
        }
      }
    }
  }
}

const InfoPage: React.FC<InfoPageProps> = ({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}) => {
  return (
    <div>
      <TestStyle>
        {title} {description} {author.name}
      </TestStyle>
    </div>
  )
}

export default InfoPage

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author {
          name
          summary
        }
      }
    }
  }
`
