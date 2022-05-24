import logo from '../../assets/aprende_logo.webp'
import './index.scss';

function Header() {
    return (
        <header className='navbar bg-black'>
            <div className='container'>
                <nav id="navbar">
                    <div className="nav-wrapper">
                        <a
                            href="/"
                            className="left brand-logo"
                        >
                            <img src={logo} alt="logo" className="photo" />
                            <h1 id="logo">Aprende Institute</h1>
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
