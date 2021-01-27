import React from 'react'
import ReactDOM from 'react-dom'
import App from '@App'
import * as serviceWorker from "@utils/webSocket/serviceWorker";

ReactDOM.render(
  <App />,
  document.querySelector('#app')
)
serviceWorker.unregister();