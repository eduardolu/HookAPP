import React from 'react'
import ReactDOM from 'react-dom/client'
import { MultipleCustomHooks } from './03-ejemplo/MultipleCustomHooks'
import {  FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { CounterAPP } from './01-useState/CounterAPP'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { HooksAPP } from './HooksAPP'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MultipleCustomHooks />
  </React.StrictMode>,
)
