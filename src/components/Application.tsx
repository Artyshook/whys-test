import { Article } from './Article'
import { Box, Grid, duration } from '@mui/material'
import { Comment } from './Comment'
import { Toggler } from './Toggler'
import { motion } from 'framer-motion'
import { theme } from '../helpers/theme'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
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
  const [moreCommentData, setMoreCommentData] = useState([] as CommentData[])
  const [darkMode, setDarkMode] = useState(false)
  const [loading, setLoading] = useState(false)
  const [inViewRef, inView] = useInView()
  const [inViewRef2, inView2] = useInView()
  const animation = useAnimation()
  const animation2 = useAnimation()
  const animation3 = useAnimation()
  const [showMore, setShowMore] = useState(false)
  console.log('inViewRef2', inViewRef2)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      // @ts-ignore
      if (document.__article) {
        // @ts-ignore
        setArticleData(document.__article)
        // @ts-ignore
        setCommentData(document.__comments)
        // @ts-ignore
        setMoreCommentData(document.__moreComments)
        setLoading(false)
      }
    }, 1000)
  }, [])

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        transition: {
          delay: 0.1,
          duration: 0.5,
          type: 'spring',
        },
      })
    } else if (!inView) {
      animation.start({ y: '100vw' })
    }
  }, [inView])

  useEffect(() => {
    if (inView2) {
      animation2.start({
        x: 0,
        transition: {
          type: 'easeOut',
          duration: 1,
          bounce: 0.3,
        },
      })
    } else if (!inView2) {
      animation2.start({ x: '1000' })
    }
  }, [inView2])

  if (showMore) {
    animation3.start({
      x: 0,
      transition: {
        type: 'spring',
        duration: 1,
        bounce: 0.3,
      },
    })
  } else if (!showMore) {
    animation3.start({ x: '-100vw' })
  }

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
        <div ref={inViewRef}></div>
        <motion.div animate={animation}>
          <Grid item flexGrow={1} paddingBottom={'10px'}>
            {commentData.map(comment => (
              <Comment key={comment.id} commentData={comment} />
            ))}
          </Grid>
          <div ref={inViewRef2}></div>
        </motion.div>
        <motion.div animate={animation3}>
          <Button_MyButton onClick={() => setShowMore(true)}>More</Button_MyButton>
        </motion.div>
        <motion.div animate={animation}>
          {showMore ? (
            <Grid item flexGrow={1} paddingBottom={'10px'}>
              {moreCommentData.map(comment => (
                <Comment key={comment.id} commentData={comment} />
              ))}
            </Grid>
          ) : (
            <div></div>
          )}
        </motion.div>

        {/*<motion.div animate={animation}>*/}
        {/*  <Grid item flexGrow={1} paddingBottom={'10px'}>*/}
        {/*    {moreCommentData.map(comment => (*/}
        {/*      <Comment key={comment.id} commentData={comment} />*/}
        {/*    ))}*/}
        {/*  </Grid>*/}
        {/*</motion.div>*/}
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
  background-color: ${theme.background.lightBlue};
  height: 4.5rem;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  &:hover {
    background: ${theme.colors.blue2};
  }
`
