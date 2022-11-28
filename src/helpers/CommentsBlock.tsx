import { Comment } from '../components/Comment'
import { CommentData } from '../pages/AplicationContext'
import { Grid } from '@mui/material'
import React from 'react'

type CommentsJSX = {
  data: CommentData[]
  darkMode: boolean
}

export const CommentsJSX = (props: CommentsJSX) => (
  <Grid item flexGrow={1}>
    {props.data.map(comment => (
      <Comment key={comment.id} commentData={comment} darkMode={props.darkMode} />
    ))}
  </Grid>
)
