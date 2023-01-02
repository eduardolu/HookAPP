import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { AboutPage } from './09-useContext/AboutPage';
import { HomePage } from './09-useContext/HomePage';
import { LogionPage } from './09-useContext/LogionPage';

// import { CounterAPP } from './01-useState/CounterAPP'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import {  FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './03-ejemplo/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { Layout } from './05-useLayoutEffect/Layout';
// import { Memorize } from './06-memos/memorize'
// import { MemoHook } from './06-memos/MemoHook'
// import { CallbackHook } from './06-memos/CallbackHook'
// import { Padre } from './07-tarea-memo/Padre'
// import { TodoAPP } from './08-useReducer/TodoAPP'
// import { HooksAPP } from './HooksAPP'
import { MainAPP } from './09-useContext/mainAPP'

// import './08-useReducer/IntoReducer'
import './index.css'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainAPP />,
//     children: [
//       {
//         path: "/*",
//         element: <LogionPage />,
//       },

//       {
//         path: "/",
//         element: <HomePage />,
//       },
//       {
//         path: "about",
//         element: <AboutPage />,
//       },
//       {
//         path: "login",
//         element: <LogionPage />,
//       },
//     ],
//   },
// ]);



ReactDOM.createRoot(document.getElementById('root')).render(
   <BrowserRouter>
    {/* <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>, */}
    <MainAPP />
   </BrowserRouter>,
  
)
