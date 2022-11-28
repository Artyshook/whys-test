import { Application } from '../components/Application'
import { genericHookContextBuilder } from '../helpers/genericHookContextBuilder'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useStartAnimation } from '../helpers/startAnimation'
import React, { useEffect, useState } from 'react'
import data from '../data.json'

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
  const animation = useAnimation()
  const [loadMore, setLoadMore] = useState(false)

  //simulace získání dat asynchronním kódem z data.json
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      if (data) {
        setArticleData(data.article[0])
        setCommentData(data.comments)
        setMoreCommentData(data.moreComments)
        setLoading(false)
      }
    }, 1000)
  }, [])

  useStartAnimation(inView, animation)
  useStartAnimation(loadMore, animation)

  const handleClick = () => {
    setLoadMore(true)
  }

  return {
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
