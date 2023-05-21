import "./Login.css"
import img6 from "../img/img6.png"

const Login = () => {
  return (
    <div className="loginContainer">
        <div className="loginPart">
            <div className="loginImg">
                <img className="img" src={img6} alt="" />
                <p>Založ si účet u nás účet<br />a začni nakupovat ještě dnes</p>
            </div>
            <div className="loginForm">
                <form className="form">
                    <p className="formHeading">Login</p>
                    <input type="text" placeholder="Jméno"/>
                    <input type="text" placeholder="Heslo"/>
                    <input className="buttons" type="submit" value="Přihlásit" />
                    <p className="formRegistText">Ještě nemáte účet?</p>
                    <input className="buttons" type="button" value="Zaregistrovat" />
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login