import React from 'react'
import ReactDOM from 'react-dom/client'
import {WheatherApp} from '../src/WheatherApp'
import  './styles/WheatherStyles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WheatherApp />
  </React.StrictMode>,
)
