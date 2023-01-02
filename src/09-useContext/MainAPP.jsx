import { Navigate, Route, Routes ,Link} from 'react-router-dom'
import { UserProvider }from './context/UserProvider'
import { AboutPage } from './AboutPage'
import { HomePage } from './HomePage'
import { LogionPage } from './LogionPage'
import { Navbar } from './Navbar'

export const MainAPP = () => {
  return (
    <UserProvider>
        <Navbar />
        <hr />

        <Routes>
            <Route path="/" element={ <HomePage /> }/>
            <Route path="/login" element={ <LogionPage /> }/>
            <Route path="/about" element={ <AboutPage /> }/>
            <Route path="/*" element = { <Navigate to="/login" /> } />
        </Routes>
    </UserProvider>
  )
}
 