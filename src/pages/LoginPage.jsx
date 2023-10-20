import { NavLink } from "react-router-dom";
import LoginForm from "../components/LoginForm";


export default function LoginPage(){
    return(
        <div>
            <h1>Login</h1>
            <LoginForm />
            <p>Or</p>
            <NavLink to="/signup">
                Sign Up
            </NavLink>
        </div>

        
    )
}