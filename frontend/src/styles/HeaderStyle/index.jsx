import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const HeaderContainer = styled.header`
  display: flex;
  font-size: 1.5rem;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f1acae;
  color: #fff;
`;

const ListItem = styled(Link)`
  text-decoration: none;
  color: #fff;

  ${Link}:hover {
    color: orange;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  column-gap: 20px;
`;

export {ListItem, HeaderContainer, NavList};
