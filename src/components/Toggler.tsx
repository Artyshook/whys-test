import { Box, styled } from '@mui/material'
import { theme } from '../helpers/theme'
import React from 'react'

type PropsTyp = {
  darkMode: boolean
  handleClick: () => void
}

export const Toggler = (props: PropsTyp) => {
  return (
    <BoxWrapper
      fontSize={'1.5rem'}
      sx={{
        cursor: 'pointer',
      }}
    >
      {props.darkMode ? (
        <span onClick={props.handleClick} aria-label='Full Moon' role='img'>
          🌑
        </span>
      ) : (
        <span onClick={props.handleClick} aria-label='New Moon' role='img'>
          🌕
        </span>
      )}
    </BoxWrapper>
  )
}

const BoxWrapper = styled(Box)`
  padding-top: 10px;
  padding-bottom: 20px;
  width: 80%;
  display: flex;
  justify-content: right;
  align-items: center;
  text-transform: lowercase;
  font-size: 1.5rem;
  list-style-type: none;
  ${theme.breakpoint.phone} {
    font-size: 1.3rem;
  }
`
