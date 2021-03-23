import { NavLink } from 'react-router-dom';

const DashboardNavigation = ({
    currentCategory
}) => {
    return (
        <nav className="navbar">
            <ul>
                <li><NavLink activeClassName="nav-link-selected" to="/dashboard/all" exact={true}>All</NavLink></li>
                <li><NavLink activeClassName="nav-link-selected" to="/dashboard/cats" exact={true}>Cats</NavLink></li>
                <li><NavLink activeClassName="nav-link-selected" to="/dashboard/dogs" exact={true}>Dogs</NavLink></li>
                <li><NavLink activeClassName="nav-link-selected" to="/dashboard/parrots" exact={true}>Parrots</NavLink></li>
                <li><NavLink activeClassName="nav-link-selected" to="/dashboard/reptiles" exact={true}>Reptiles</NavLink></li>
                <li><NavLink activeClassName="nav-link-selected" to="/dashboard/other" exact={true}>Other</NavLink></li>
            </ul>
        </nav>
    )
}

export default DashboardNavigation;