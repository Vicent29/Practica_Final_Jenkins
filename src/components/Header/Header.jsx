import "./Header.scss"
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Header() {

    const alocation = useLocation()
    const links = ["HOME", "TRIANGULO", "CIRCULO", "CUADRADO"]

    const changeCN = (item) => {
        return alocation.pathname.replace('/', '') === item ? "menu-link is-active" : "menu-link";
    }

    const print = links.map(item => {
        return <Link to={"/" + item.toLowerCase()} className={changeCN(item)} key={item}>{item}</Link>
    })

    return (
        <>
            <div className="header">
                <div className="logo"><Link to="Home"><img src="/assets/logos/logo_jenkins.png" alt="jenkins" width="200vh" /></Link></div>
                <div className="header-menu">
                    {print}
                </div>
            </div>
        </>
    )
}