import { Article } from './Article'
import { Box, Grid } from '@mui/material'
import { CommentsJSX } from '../helpers/CommentsBlock'
import { Toggler } from './Toggler'
import { genericHookContextBuilder } from '../helpers/genericHookContextBuilder'
import { motion } from 'framer-motion'
import { theme } from '../helpers/theme'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useStartAnimation } from '../helpers/startAnimation'
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'

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

const useLogicState = () => {
  const [articleData, setArticleData] = useState({} as ArticleData)
  const [commentData, setCommentData] = useState([] as CommentData[])
  const [moreCommentData, setMoreCommentData] = useState([] as CommentData[])
  const [darkMode, setDarkMode] = useState(false)
  const [loading, setLoading] = useState(false)
  const [inViewRef, inView] = useInView({ triggerOnce: true })
  const [inViewRef2, inView2] = useInView()
  const animation = useAnimation()
  const [showMore, setShowMore] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      // @ts-ignore
      if (window.document.__article) {
        // @ts-ignore
        setArticleData(window.document.__article)
        // @ts-ignore
        setCommentData(window.document.__comments)
        // @ts-ignore
        setMoreCommentData(window.document.__moreComments)
        setLoading(false)
      }
    }, 1000)
  }, [])

  useStartAnimation(inView, animation)
  useStartAnimation(showMore, animation)

  const handleClick = () => {
    setShowMore(true)
  }

  return {
    articleData,
    commentData,
    moreCommentData,
    darkMode,
    loading,
    inViewRef,
    inViewRef2,
    animation,
    showMore,
    handleClick,
    setDarkMode,
  }
}

export const { ContextProvider: AppContextProvider, Context: AppContext } =
  genericHookContextBuilder(useLogicState)

export const AppUseContext = () => {
  return (
    <AppContextProvider>
      <Application />
    </AppContextProvider>
  )
}

export const Application = () => {
  const {
    articleData,
    commentData,
    moreCommentData,
    darkMode,
    loading,
    inViewRef,
    animation,
    showMore,
    handleClick,
    setDarkMode,
  } = useContext(AppContext)

  return (
    <Container darkMode={darkMode}>
      <Grid
        container
        display={'flex'}
        flexDirection={'column'}
        minHeight={'150vh'}
        justifyContent={'space-between'}
      >
        <Grid item>
          <Toggler darkMode={darkMode} handleClick={() => setDarkMode(!darkMode)} />
        </Grid>
        <Grid item flexGrow={1}>
          <Article articleData={articleData} loading={loading} darkMode={darkMode} />
        </Grid>
        <div ref={inViewRef}></div>
        <Grid>
          <motion.div animate={animation}>
            <CommentsJSX data={commentData} darkMode={darkMode} />
          </motion.div>
          <motion.div animate={animation}>
            {showMore && <CommentsJSX data={moreCommentData} darkMode={darkMode} />}
          </motion.div>
        </Grid>
        <motion.div animate={animation}>
          <My_Div>
            <Button_MyButton onClick={() => handleClick()}>Load More</Button_MyButton>
          </My_Div>
        </motion.div>
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
export const Button_MyButton = styled.button`
  font-size: 1.5rem;
  border-radius: 20px;
  border: none;
  color: white;
  background-color: ${theme.colors.gray};
  height: 4.5rem;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  gap: 0.5rem;
  &:hover {
    background: ${theme.colors.yellow};
  }
`

const My_Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
`
