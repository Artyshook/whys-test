import { CommentData } from './Application'
import { theme } from '../helpers/theme'
import React from 'react'
import styled from 'styled-components'

type PropsType = {
  commentData: CommentData
}

export const Comment = (props: PropsType) => {
  return (
    <Div_Wrapper>
      <Container>
        <Post>{props.commentData.text}</Post>
      </Container>
    </Div_Wrapper>
  )
}

const Content = styled.div`
  margin: 0;
  padding: 10px;
  width: 80%;
  ${theme.breakpoint.phone} {
    width: 90%;
  }
`
const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Div_Wrapper = styled.div`
  max-width: 1000px;
  background-color: ${theme.colors.superWhite};
  box-shadow: ${theme.colors.boxShadow4}
  border-radius: 20px;
  margin: 10px auto;
  width: 90%;
  padding: 1rem 0;
  gap: 1rem;
  ${theme.breakpoint.phone} {
    width: 90%;
  }
`
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const H1 = styled.h1`
  max-width: 700px;
  word-break: break-all;
  text-align: start;
  color: ${theme.colors.black};
`
const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: normal;
  justify-content: start;
  font-size: 10px;
  gap: 1rem;
`

const Post = styled.div`
  text-align: left;
  margin-top: 1.5rem;
  font-size: ${theme.fonts.small};
  word-break: break-all;
  color: ${theme.colors.black};
`

const Img_AuthorImg = styled.img`
  max-height: 35px;
  max-width: 35px;
  border-radius: 40px;
`
