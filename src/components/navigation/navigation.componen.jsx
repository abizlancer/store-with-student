import { Outlet, Link } from 'react-router-dom'

import './navigation.styles.scss'

const Navigation = () => {
    return (
        <div>
            <div className="navigation">
                <Link to="/" className="logo-container">
                    <span>Logo</span>
                </Link>

                <ul className="nav-links-container">
                    <li>
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/shop">Shop</Link>
                    </li>
                </ul>
            </div>

            <Outlet />
        </div>
    )
}

export default Navigation