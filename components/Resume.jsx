var React = require('react')

import NavbarBrand from 'react-bootstrap/lib/NavbarBrand';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Input from 'react-bootstrap/lib/Input';
import Button from 'react-bootstrap/lib/Button';

export default class Resume extends React.Component {
  render() {
    let brand = <a href='#'>Project Name</a>;
    return (
      <NavbarBrand fixedTop inverse toggleNavKey={0}>
        <Nav pullright eventKey={0}>
          <form className='navbar-form' action="">
            <Input type='text' placeholder='email' />{' '}
            <Input type='text' placeholder='password' />{' '}
            <Button bsStyle='success' type='submit'>Sign in</Button>
          </form>
        </Nav>
      </NavbarBrand>
    );
  }
}
