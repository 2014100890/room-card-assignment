import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app'
import Bucketplace from './service/bucketplace'

const bucketplace = new Bucketplace()

ReactDOM.render(
  <React.StrictMode>
    <App bucketplace={bucketplace} />
  </React.StrictMode>,
  document.getElementById('root')
)
