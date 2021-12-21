import React from "react";
import {Link} from "react-router-dom";
import styled, {createGlobalStyle} from "styled-components";

export const fontFaces = css`
  @font-face{
    font-family: 'Montserrat', sans-serif;
  }
`

const GlobalStyle = createGlobalStyle`
  * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: 'Open Sans', sans-serif;
  }
`;

const HeaderContainer = styled.div`
  background-color: #F1ACAE;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Header = (props) => {
  return (
    <header>
      <HeaderContainer>
        <div> <span>MiMemories</span></div>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </HeaderContainer>
    </header>
  )
}

export default Header;
