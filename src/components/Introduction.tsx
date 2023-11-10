import styled from "@emotion/styled"
import React from "react"
import { ProfileImage } from "./ProfileImage"

const Background = styled.div`
  width: 100%;
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
  color: #ffffff;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 768px;
  height: 400px;
  margin: 0 auto;
`

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 400;
`

const Title = styled.div`
  margin-top: 5px;
  font-size: 35px;
  font-weight: 700;
`

export const Introduction: React.FC = () => {
  return (
    <Background>
      <Wrapper>
        <ProfileImage />

        <div>
          <SubTitle>Nice to Meet You,</SubTitle>
          <Title>I'm Junior Frontend Developer Sunny.</Title>
        </div>
      </Wrapper>
    </Background>
  )
}
