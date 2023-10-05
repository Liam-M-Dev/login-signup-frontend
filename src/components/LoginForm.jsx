

export default function LoginForm(){

    return(
        <form>
            <label>Email: </label>
            <input type="email" name="email" placeholder="email"/>
            <label>Password: </label>
            <input type="password" name="password" placeholder="password" />
            <button>Login</button>
        </form>
    )
}