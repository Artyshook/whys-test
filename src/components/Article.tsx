import { ArticleData } from './Application'
import { theme } from '../helpers/theme'
import React from 'react'
import styled, { keyframes } from 'styled-components'

type PropsType = {
  articleData: ArticleData
  loading: boolean
}

export const Article = (props: PropsType) => {
  let author = props.articleData.author
  let article = props.articleData.text
  let date = props.articleData.date
  const avatar = require('../helpers/Person Tipping Hand.png')

  return (
    <Div_Wrapper>
      <Container>
        {props.loading ? (
          <MessageError>
            <Loading>⌛</Loading>
            <Loading>⌛</Loading>
            <Loading>⌛</Loading>
          </MessageError>
        ) : (
          <Content>
            <Header>
              <Img_AuthorImg src={avatar} alt='avatar' />
              <H1>{author}</H1>
            </Header>
            <p>{date}</p>
            <Body>
              <Post>{article}</Post>
            </Body>
          </Content>
        )}
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
  margin: 0 auto;
  width: 90%;
  padding: 2rem 0;
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
  font-size: ${theme.fonts.medium};
  word-break: break-all;
  color: ${theme.colors.black};
`

const Img_AuthorImg = styled.img`
  max-height: 35px;
  max-width: 35px;
  border-radius: 40px;
`

const MessageError = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const wave = keyframes`
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
`

const Loading = styled.span`
  font-size: ${theme.fonts.small};
  animation-name: ${wave};
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
`
