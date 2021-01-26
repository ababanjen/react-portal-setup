import React from 'react'
import { Redirect } from 'react-router-dom'

import UserLayout from '@layouts/UserLayout'
import DashboardPage from '@pages/User/Dashboard'

const userPath = '/user'

export default {
  path: userPath,
  component: UserLayout,
  routes: [
    {
      path: `${userPath}/dashboard`,
      exact: true,
      component: DashboardPage
    },
    {
      path: '*',
      component: props => (<Redirect to={`${userPath}/dashboard`} {...props} />)
    }
  ]
}
