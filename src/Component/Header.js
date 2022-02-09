import {
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import "./Style/Header.css";

function Header() {
  return (
    <div id="Head">
      <div className="menu-bahasa">
        <DropdownButton id="dropdown-basic-button" size="sm" title="Language">
          <Dropdown.Item href="#/" active>
            Indonesia
          </Dropdown.Item>
          <Dropdown.Item href="#/">English</Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="user-p">
        <img
          src="https://png.pngtree.com/svg/20161113/ef1b24279e.png"
          className="img-roundedCircle"
          alt="user-profile"
        />
        <p>Alan Saputra</p>
      </div>
</div>



  );
}
export default Header;
