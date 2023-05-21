import "./Main.css"
import img1 from "../img/img1.png"

const Main = () => {
  return (
    <div className="container">
        <nav className="header">
            <a className="logo" href="index.html">CryptoCoin</a>
            <ul>
                <li>Domů</li>
                <li>Kurzy</li>
                <li>Info</li>
                <li>Login</li>
            </ul>
        </nav>
        <div className="main">
            <img className="backgroundImg" src={img1} alt="" />
            <strong>
                <p className="firstP">Trade & Hodl</p>
                <h1>CryptoCoin</h1>
                <p className="secondP">Tvoje krypto burza</p>
            </strong>
        </div>
    </div>
  )
}

export default Main