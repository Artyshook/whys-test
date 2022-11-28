import { CommentData } from '../pages/AplicationContext'
import { theme } from '../helpers/theme'
import React from 'react'
import moment from 'moment'
import styled, { css } from 'styled-components'

type PropsType = {
  commentData: CommentData
  darkMode: boolean
}

export const Comment = (props: PropsType) => {
  const avatar = require('../helpers/icons/Lion.png')
  const date = moment(props.commentData.date).format('MMMM Do YYYY, h:mm a')
  return (
    <Wrapper darkMode={props.darkMode}>
      <Header>
        <UserInfo>
          <AuthorImg src={avatar} alt='avatar' />
          <UserName>{props.commentData.author}</UserName>
        </UserInfo>
        <Date>{date}</Date>
      </Header>
      <Container>
        <Post>{props.commentData.text}</Post>
      </Container>
    </Wrapper>
  )
}

const UserInfo = styled.div`
  display: flex;
  justify-content: normal;
  align-items: end;
  flex-direction: row;
  padding-left: 10px;
  gap: 0.5rem;
`
const UserName = styled.div`
  font-size: ${theme.fonts.xs};
`
const Date = styled.div`
  font-size: ${theme.fonts.xxs};
  color: darkgrey;
`

const Wrapper = styled.div<{ darkMode: boolean }>`
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
  margin: 10px auto;
  padding: 1rem 0;
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
const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
`

const Post = styled.div`
  text-align: left;
  font-size: ${theme.fonts.xs};
  word-break: break-all;
`

const AuthorImg = styled.img`
  max-height: 35px;
  max-width: 35px;
  border-radius: 40px;
`
