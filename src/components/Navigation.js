import React from 'react';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
    return (
      <div className="navigation">
        <ul>
          <NavLink to="/" exact className="hover" activeClassName="nav-active">
            <li>Accueil</li>
          </NavLink>

          <NavLink
            to="/applepie"
            exact
            className="hover"
            activeClassName="nav-active"
          >
            <li>Tarte aux pommes</li>
          </NavLink>

          <NavLink
            to="/strawberrypie"
            exact
            className="hover"
            activeClassName="nav-active"
          >
            <li>Tarte aux fraises</li>
          </NavLink>

          <NavLink
            to="/lemonpie"
            exact
            className="hover"
            activeClassName="nav-active"
          >
            <li>Tarte aux citrons</li>
          </NavLink>

          <NavLink
            to="/isopicture"
            exact
            className="hover"
            activeClassName="nav-active"
          >
            <li>En résumé</li>
          </NavLink>

          <NavLink
            to="/pricingtable"
            exact
            className="hover"
            activeClassName="nav-active"
          >
            <li>Tarifs</li>
          </NavLink>

          <NavLink
            to="/contact"
            exact
            className="hover"
            activeClassName="nav-active"
          >
            <li>Contact</li>
          </NavLink>
        </ul>
      </div>
    );
};

export default Navigation;