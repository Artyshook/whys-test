import { Article } from './Article'
import { Box, Grid } from '@mui/material'
import { Comment } from './Comment'
import { Toggler } from './Toggler'
import { theme } from '../helpers/theme'
import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'

export type ArticleData = {
  author: string
  date: string
  text: string
}
export type CommentData = {
  id: number
  author: string
  text: string
  date: string
}

export const Application = () => {
  const [articleData, setArticleData] = useState({} as ArticleData)
  const [commentData, setCommentData] = useState([] as CommentData[])
  const [darkMode, setDarkMode] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      // @ts-ignore
      if (document.__article) {
        // @ts-ignore
        setArticleData(document.__article)
        // @ts-ignore
        setCommentData(document.__comments)
        setLoading(false)
      }
    }, 1500)
  }, [])

  return (
    <Container darkMode={darkMode}>
      <Grid
        container
        display={'flex'}
        flexDirection={'column'}
        minHeight={'100vh'}
        justifyContent={'space-between'}
      >
        <Grid item>
          <Toggler darkMode={darkMode} handleClick={() => setDarkMode(!darkMode)} />
        </Grid>
        <Grid item flexGrow={1}>
          <Article articleData={articleData} loading={loading} />
        </Grid>
        <Grid item flexGrow={1} paddingBottom={'10px'}>
          {commentData?.map(comment => (
            <Comment key={comment.id} commentData={comment} />
          ))}
        </Grid>
        {/*<Grid item flexGrow={1} gap={'10px'}>*/}
        {/*  {commentData?.map(comment => (*/}
        {/*    <Comment key={comment.id} commentData={comment} />*/}
        {/*  ))}*/}
        {/*</Grid>*/}
      </Grid>
    </Container>
  )
}

const Container = styled(Box)<{ darkMode: boolean }>`
  background-color: ${props => (props.darkMode ? theme.colors.dark : theme.colors.white)};
  color: ${({ darkMode }) => (!darkMode ? theme.colors.dark : theme.colors.white)};
  transition: all 400ms;
  i,
  a {
    color: ${props => (props.darkMode ? theme.colors.white : theme.colors.dark)};
    transition: color 400ms;
  }
  a:visited {
    color: ${props => (props.darkMode ? theme.colors.white : theme.colors.dark)};
  }
  ul {
    list-style-type: none;
  }
`
