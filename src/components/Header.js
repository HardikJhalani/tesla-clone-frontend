import styled from "styled-components";
import { useState } from "react";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <Container>
      <a>
        <img src="/images/tesla-logo.svg" />
      </a>
      <Menu>
        <a href="/models.js">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
        <a href="#">Solar Roof</a>
        <a href="#">Solar Panels</a>
      </Menu>
      <RightMenu>
        <a href="#" className="invisible">
          Shop
        </a>
        <a href="#" className="invisible">
          Account
        </a>
        <a href="#" onClick={() => setBurgerStatus(true)}>
          Menu
        </a>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <img
          src="/images/close-line.svg"
          onClick={() => setBurgerStatus(false)}
        />
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-In</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Test Drive</a>
        </li>
        <li>
          <a href="#">Insurance</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Semi</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
        <li>
          <a href="#">Powerwall</a>
        </li>
        <li>
          <a href="#">Commercial Energy</a>
        </li>
        <li>
          <a href="#">Utilities</a>
        </li>
        <li>
          <a href="#">Find Us</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">Investor Relations</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  z-index: 100;
  min-height: 60px;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  @media (max-width: 500px) {
    padding: 0;
  }

  a {
    cursor: pointer;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    padding: 6px 10px;
    border-radius: 10px;
    font-size: 15px;
    flex-wrap: nowrap;
    transition: 0.5s;
  }

  a:hover {
    background-color: rgb(153, 186, 204);
  }
  @media (max-width: 1100px) {
    display: none;
  }
`;

const RightMenu = styled(Menu)`
  display: block;
  margin-right: 20px;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 10;
  padding: 80px 40px;
  font-size: 15px;
  color: rgb(0, 0, 0);
  opacity: 0.95;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: 0.4s ease-out;
  li {
    padding: 10px 0;
    width: 100%;
    text-align: left;
    padding: 10px 0 10px 20px;
    transition: 0.3s;
    border-radius: 16px;
    cursor: pointer;
  }

  li:hover {
    background-color: #f2f2f2;
  }

  img {
    font-size: 50px;
    font-weight: 200;
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 20px;
    background-color: white;
    padding: 10px;
    border: none;
    border-radius: 50%;
    transition: 0.5s;
  }

  img:hover {
    background-color: #f2f2f2;
  }
`;
