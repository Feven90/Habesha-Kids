import React from 'react';
import './MyNavbar.scss';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

class MyNavbar extends React.Component {
  state = {
    isOpen: false,
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const { isAuthed, logoutClickEvent } = this.props;
    const buildNavbar = () => {
      if (isAuthed) {
        return (
        <Nav className='ml-auto' > {/* color='dark' dark navbar */}
        <NavItem>
          <NavLink tag={RRNavLink} to='/alphabets' className="navigation btn btn-primary">ፊደላት<p>Alphabets</p></NavLink>
          </NavItem>
          <NavItem>
          <NavLink tag={RRNavLink} to='/numbers' className="navigation btn btn-primary">ቁጥሮች<p>Numbers</p></NavLink>
          </NavItem>
          <NavItem>
          <NavLink tag={RRNavLink} to='/colors' className="navigation btn btn-primary">ቀለማት<p>Colors</p></NavLink>
          </NavItem>
          <NavItem>
          <NavLink tag={RRNavLink} to='/words' className="navigation btn btn-primary">ቃላት<p>Words</p></NavLink>
          </NavItem>
          <NavItem>
          <NavLink tag={RRNavLink} to='/profile' className="navigation btn btn-primary">ገፅ<p>Profile</p></NavLink>
          </NavItem>
          <NavItem>
          <NavLink onClick={logoutClickEvent} className="navigation btn btn-primary">ለመዉጣት<p>Logout</p></NavLink>
          </NavItem>
        </Nav>
        );
      }
      return <Nav className='ml-auto' navbar />;
    };
    return (
      <div className="my-navbar">
        <div>
          <Navbar expand="md"> {/*dark*/}
            <NavbarBrand href="/home" className="navigation">ሐበሻ ልጆች</NavbarBrand>
            <NavbarToggler onClick={e => this.toggle(e)} />
            <Collapse isOpen={this.state.isOpen} navbar>
              {buildNavbar()}
            </Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default MyNavbar;