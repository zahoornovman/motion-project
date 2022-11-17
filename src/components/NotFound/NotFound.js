import React from 'react'

import { NotF } from './styles';

import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <NotF>
      <h3>404</h3>
      <h2>Not found</h2>
      <Link to='/'>
        <p>Back to homepage ?</p>
      </Link>
    </NotF>
  )
}

export default NotFound;