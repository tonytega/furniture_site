const LogIn = () => {
    return (
        <main className="logIn">
            <form action="">
                <label htmlFor="email">Email</label>
                <input 
                name="enail"
                type="email"
                required
                />
                <label htmlFor="password">password</label>
                <input 
                name="password"
                type="password"
                autoComplete=""
                required
                />
            </form>
        </main>


        );
}
 
export default LogIn;