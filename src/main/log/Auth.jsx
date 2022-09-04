import { Route,Routes} from 'react-router-dom';
import "./auth.css"
import LogIn from './Login';
import SignUp from './SignUp';
const Auth = () => {
    return (
       <main className="auth">
        rthtyhyry
        <Routes>
                <Route path='/signup' element={<SignUp/>}/>
                <Route path='/login' element={<LogIn/>}/>
          </Routes>
       </main>
     );
}
 
export default Auth;