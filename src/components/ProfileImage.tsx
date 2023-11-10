import styled from "@emotion/styled"
import React from "react"

import breadImg from "@/src/images/bread.png"

const ProfileImageWrapper = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;
`

export const ProfileImage: React.FC = ({}) => {
  return <ProfileImageWrapper src={breadImg} alt="..." />
}
