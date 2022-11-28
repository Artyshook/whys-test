import { AppContext } from '../pages/AplicationContext'
import { Article } from './Article'
import { Box, Grid } from '@mui/material'
import { CommentsJSX } from '../helpers/CommentsBlock'
import { Toggler } from './Toggler'
import { motion } from 'framer-motion'
import { theme } from '../helpers/theme'
import React, { useContext } from 'react'
import styled from 'styled-components'

export const Application = () => {
  const {
    articleData,
    commentData,
    moreCommentData,
    darkMode,
    loading,
    inViewRef,
    animation,
    loadMore,
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
        <Grid item flexGrow={1} paddingBottom={'10px'}>
          <Article articleData={articleData} loading={loading} darkMode={darkMode} />
        </Grid>
        <div ref={inViewRef}></div>
        <Grid paddingBottom={'10px'}>
          <motion.div animate={animation}>
            <CommentsJSX data={commentData} darkMode={darkMode} />
          </motion.div>
          <motion.div animate={animation}>
            {loadMore && <CommentsJSX data={moreCommentData} darkMode={darkMode} />}
          </motion.div>
        </Grid>
        <motion.div animate={animation}>
          <MyDiv>
            <MyButton onClick={() => handleClick()} darkMode={darkMode}>
              Load More
            </MyButton>
          </MyDiv>
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
  button,
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
export const MyButton = styled.button<{ darkMode: boolean }>`
  font-size: ${theme.fonts.small};
  border-radius: 20px;
  border: none;
  background-color: ${props => (props.darkMode ? theme.colors.darkGrey : theme.colors.superWhite)};
  height: 4.5rem;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  gap: 0.5rem;
  box-shadow: ${theme.colors.boxShadow};
  &:hover {
    background: ${theme.colors.yellow};
  }
`

const MyDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
`
