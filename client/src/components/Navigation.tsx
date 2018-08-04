import * as React from 'react';
import { connect } from 'react-redux';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Nav,
  Navbar,
  NavItem,
  NavLink
} from 'reactstrap';
// import SignOutButton from './SignOut';

import * as routes from '../constants/routes';
import { auth } from '../firebase';
import IStoreState from '../store/IStoreState';

const Navigation = ({ authUser }: { authUser: firebase.User }) =>
  <div>
    <Navbar color='dark' dark={true} expand='md'>
      {authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
      }
    </Navbar>
  </div>

const NavigationAuth = () =>
  <Nav className='ml-auto' navbar={true}>
    {/* <NavItem>
      <NavLink to={routes.LANDING} tag={RRNavLink}>Landing</NavLink>
    </NavItem> */}
    <NavItem>
      <NavLink to={routes.HOME} tag={RRNavLink}>Home</NavLink>
    </NavItem>
    <NavItem>
      <NavLink to={routes.ACCOUNT} tag={RRNavLink}>Account</NavLink>
    </NavItem>
    <NavItem>
      <NavLink to={routes.SIGN_IN} tag={RRNavLink} onClick={auth.doSignOut}>Log Out</NavLink>
    </NavItem>
  </Nav>

const NavigationNonAuth = () =>
  <Nav className='ml-auto' navbar={true}>
    {/* <NavItem>
      <NavLink to={routes.ACCOUNT} tag={RRNavLink}>Landing</NavLink>
    </NavItem> */}
    <NavItem>
      <NavLink to={routes.SIGN_IN} tag={RRNavLink}>Sign In</NavLink>
    </NavItem>
  </Nav>

const mapStateToProps = (state: IStoreState) => ({
  authUser: state.sessionState.authUser
})

export default connect(mapStateToProps)(Navigation);