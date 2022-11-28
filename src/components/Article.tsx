import { ArticleData } from '../pages/AplicationContext'
import { theme } from '../helpers/theme'
import React from 'react'
import moment from 'moment'
import styled, { css, keyframes } from 'styled-components'

type PropsType = {
  articleData: ArticleData
  loading: boolean
  darkMode: boolean
}

export const Article = (props: PropsType) => {
  const date = moment(props.articleData.date).format('MMMM Do YYYY, h:mm a')
  let author = props.articleData.author
  let article = props.articleData.text
  const avatar = require('../helpers/icons/Person Tipping Hand.png')

  return (
    <Div_Wrapper darkMode={props.darkMode}>
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
              <AuthorImg src={avatar} alt='avatar' />
              <H1>{author}</H1>
            </Header>
            <Date>{date}</Date>
            <Body>
              <Post>{article}</Post>
            </Body>
          </Content>
        )}
      </Container>
    </Div_Wrapper>
  )
}
const Div_Wrapper = styled.div<{ darkMode: boolean }>`
  max-width: 1000px;
  ${({ darkMode }) =>
    darkMode
      ? css`
          background-color: ${theme.colors.darkGrey};
        `
      : css`
          background-color: ${theme.colors.superWhite};
        `}
  box-shadow: ${theme.colors.boxShadow}
  border-radius: 20px;
  margin: 0 auto;
  padding: 2rem 0;
  gap: 1rem;
  ${theme.breakpoint.phone} {
    width: 90%;
  }
`

const Content = styled.div`
  margin: 0;
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
  word-break: break-word;
`

const AuthorImg = styled.img`
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
const Date = styled.div`
  font-size: ${theme.fonts.xxs};
  color: darkgrey;
`
