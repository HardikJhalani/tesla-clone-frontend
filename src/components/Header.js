import styled from "styled-components";

function Header() {
  return (
    <Container>
      <a>
        <img src="/images/tesla-logo.svg" />
      </a>
      <Menu>
        <a href="#">Model S</a>
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
        <a href="#">Menu</a>
      </RightMenu>
      <BurgerNav>
        <img src="/images/close-line.svg" />
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
  z-index: 1;
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
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    padding: 0 10px;
    font-size: 15px;
    flex-wrap: nowrap;
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
