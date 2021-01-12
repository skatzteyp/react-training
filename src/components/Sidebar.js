import { Link } from 'react-router-dom';

import './Sidebar.css';

const Sidebar = () => (
  <nav className="sidebar">
    <ul className="sidebar-menu">
      <li>
        <Link to="/">Top</Link>
      </li>
      <li>
        <Link to="/news">News</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </nav>
);

export default Sidebar;
