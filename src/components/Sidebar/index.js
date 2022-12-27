import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SideBar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={logo} alt="logo" />
      <img src={logo} alt="logo" />
      <img src={logo} alt="logo" />
    </Link>
    <nav>
        <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon="faHome" color="4d4d4e" />
        </NavLink>
    </nav>
  </div>
);

export default SideBar