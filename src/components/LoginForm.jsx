import { useState } from "react"

export default function LoginForm(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const handleChange = async (event) => {
    //     event.preventDefault();

        
    // }

    return(
        <form>
            <label>Email: </label>
            <input type="email" name="email" placeholder="email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
            <label>Password: </label>
            <input type="password" name="password" placeholder="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
            <button>Login</button>
        </form>
    )
}