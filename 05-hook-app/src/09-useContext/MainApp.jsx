import { Navigate, Route, Routes} from 'react-router-dom';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { AboutPage } from './AboutPage';
import { Navbar } from './Navbar';
import { UserProvider } from './context/UserProvider';

export const MainApp = () => {
  return (
    <UserProvider >
        <h1>MainApp</h1>
        
        <Navbar />
        
        <hr />

        <Routes>
          <Route path="/"  element={ <HomePage /> }/>
          <Route path="login"  element={ <LoginPage /> }/>
          <Route path="about"  element={ <AboutPage /> }/>
          {/* CUALQUIER RUTA QUE NO EXISTE LO REDIRECCIONA AL COMPONENETE LOGINPAGE */}
          {/* <Route path="/*"  element={ <LoginPage /> }/> */}
          {/* otra formna es con navigate to*/}
          <Route path="/*"  element={ <Navigate to="/about" /> }/>
        </Routes>
    </UserProvider>
  )
}
