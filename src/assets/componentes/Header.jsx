import Logo from '../imagens/viagens.jpg'
import Lupa from '../imagens/lupa.png'
import Styles from '../css/Header.module.css'

import {Link} from 'react-router-dom'



function Header(){

    return(

        <header className={Styles.header}>
            <img src={Logo} alt="Logo" className={Styles.logo}/>
            <nav className={Styles.menu}>
                <Link to='/'> Home </Link>
                <Link to='/GrandCanyon'> GrandCanyon </Link>
                <Link to='/Escocia'> Escócia </Link>
                <Link to='/Muralhas'> Muralhas da China </Link>
                <Link to='/Aruba'> Aruba </Link>
            </nav>

            <div className={Styles.login}>
                <input type="search"/>
            </div>

            <img src={Lupa} alt="Lupa" className={Styles.lupa}/>
        </header>

    )
}

export default Header