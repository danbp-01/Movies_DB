import React from 'react';
import {Link} from 'react-router-dom';
import { ROUTES } from '../../routes/constants';
import './header.css';

const Header: React.FC = () => {
    return (
        <nav className="navbar">
          <h2 id="logo">
            Movies DB by CCM
          </h2>
          <ul id="routes">
            <li className="route">
              <Link className="route__link" to={ROUTES.HOME}>Home</Link>
            </li>
            <li className="route">
              <Link className="route__link" to={ROUTES.POPULAR}>Popular</Link>
            </li>
            <li className="route">
              <Link className="route__link" to={ROUTES.TOP_RATED}>Top rated</Link>
            </li>
            <li className="route">
              <Link className="route__link" to={ROUTES.NOW_PLAYING}>Now playing</Link>
            </li>
            <li className="route">
              <Link className="route__link" to={ROUTES.MY_FAVORITES}>My favorites</Link>
            </li>
          </ul>
        </nav>
      );
    }

export default Header;