import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ListItem, HeaderContainer, NavList} from '../../styles/HeaderStyle';
import { Wrapper } from '../../styles/StyleGlobal';

const Header = function (props) {
  return (
    <HeaderContainer>
      <div>
        <span>MiMemories</span>
      </div>

      <NavList>
        <li>
          <ListItem to="/">Home</ListItem>
        </li>
        <li>
          <ListItem to="/login">Login</ListItem>
        </li>
        <li>
          <ListItem to="/register">Register</ListItem>
        </li>
      </NavList>
    </HeaderContainer>
  );
};

export default Header;
