import { useState } from "react"

export default function LoginForm(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Add functionality to send user details to back-end server
        // confirm user is logged in correctly to redirect to welcome page
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Email: </label>
            <input type="email" 
                name="email" 
                placeholder="email" 
                value={email} 
                onChange={(e) => {setEmail(e.target.value)}}
                required={true}
            />
            <label>Password: </label>
            <input type="password" 
                name="password" 
                placeholder="password" 
                value={password} 
                onChange={(e) => {setPassword(e.target.value)}}
                required={true}
            />
            <button>Login</button>
        </form>
    )
}