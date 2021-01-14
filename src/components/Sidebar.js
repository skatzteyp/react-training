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
        <Link to="/news/news-1/entertainment">News 1</Link>
      </li>
      <li>
        <Link to="/news/news-2">News 2</Link>
      </li>
      <li>
        <Link to="/news/news-3">News 3</Link>
      </li>
      <li>
        <Link to="/news/news-4">News 4</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </nav>
);

export default Sidebar;
