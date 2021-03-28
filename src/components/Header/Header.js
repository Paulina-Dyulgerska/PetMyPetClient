// import { Link } from 'react-router-dom';

import CustomLink from '../CustomLink/CustomLink';

const Header = (props) => {
    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    <div className="first-bar">
                        {/* <Link to="/dashboard">Dashboard</Link> */}
                        <CustomLink
                            tag='a' // tag name
                            to={props.path || "/dashboard"} // path
                            className="button" //className
                        // className={style.listItem} //className
                        >
                            {/* {props.children} */}
                            Dashboard
                        </CustomLink>

                        <a className="button" href="/">My Pets</a>

                        <CustomLink
                            tag='a' // tag name
                            to={props.path || "/pets/create"} // path
                            className="button" //className
                        >
                            Add Pet
                        </CustomLink>
                    </div>
                    <div className="second-bar">
                        <ul>
                            <li>Welcome, {props.username}!</li>
                            <li><a href="/"><i className="fas fa-sign-out-alt"></i> Logout</a></li>
                        </ul>
                    </div>
                </section>
                <section className="navbar-anonymous">
                    <ul>
                        <li><a href="/"><i className="fas fa-user-plus"></i> Register</a></li>
                        <li><a href="/"><i className="fas fa-sign-in-alt"></i> Login</a></li>
                    </ul>
                </section>
            </nav>
        </header>
    )
}

export default Header;