import React from 'react'
import ReactDOM from 'react-dom/client'

// import { CounterAPP } from './01-useState/CounterAPP'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import {  FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './03-ejemplo/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { Layout } from './05-useLayoutEffect/Layout';
// import { Memorize } from './06-memos/memorize'
// import { MemoHook } from './06-memos/MemoHook'
// import { CallbackHook } from './06-memos/CallbackHook'
import { Padre } from './07-tarea-memo/Padre'
// import { HooksAPP } from './HooksAPP'

import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Padre />
  // </React.StrictMode>,
)
