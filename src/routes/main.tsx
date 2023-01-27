import { Paper } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function MainPage() {
  return (
    <div>
      <Paper>
        Hello world!
        <Link to={'/media'}>Go to media page</Link>
      </Paper>
    </div>
  )
}
