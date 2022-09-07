import {Route,Routes} from 'react-router-dom';
import LogIn from './log/Login';
import SignUp from './log/SignUp';
import "./log/auth.css";

const Auth = () => {

    return (
       <section className="auth">
        <Routes>
                <Route path='/logIn' element={<LogIn/>}/>
                <Route path='/signUp' element={<SignUp/>}/>
         </Routes>
          
       </section>
     );
}
 
export default Auth;