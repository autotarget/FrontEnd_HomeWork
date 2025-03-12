import './Header.css'
import Logo from './logo/Logo'
import Menu from './menu/Menu'

function Header() {
    return (
        <header className='header'>
            <div className="container">
                <Logo/>
                <Menu/>
            </div>
        </header>
    )
}
export default Header;