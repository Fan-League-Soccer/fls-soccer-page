import React from 'react'
import { Link } from 'react-router-dom' // we need this to make JSX compile
import Footer from '../components/Footer'

export default function MediaPage() {
  return (
    <div>
      Goodbye world!
      <Link to={'/'}>Go back to main page</Link>
      <Footer />
    </div>
  )
}
