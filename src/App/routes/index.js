import React from 'react'

import userRoutes from './user'

const NotFound = () => (<h1>Page Not Found</h1>)

const routes = [
  userRoutes,
  {
    path: '/',
    exact: true,
    component: NotFound
  }
].filter(Boolean)

export default routes
