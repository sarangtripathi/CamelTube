import React from 'react'
import { useState,useEffect } from 'react'
import { useParams} from 'react-router-dom'
import { Box } from '@mui/material'
import { Videos, ChannelCard } from './'
import { fetchFromApi } from '../utils/fetchFromApi'


const ChannelDetail = () => {
  const { id } = useParams();

  useEffect(() => {
    fetchFromApi(`channels?part="snippet&id=${id}`)
  },[id])
  return (
    <div>ChannelDetail</div>
  )
}

export default ChannelDetail