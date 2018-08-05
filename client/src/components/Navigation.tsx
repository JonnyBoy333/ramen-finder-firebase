import * as React from 'react';
import { connect } from 'react-redux';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Nav,
  Navbar,
  NavItem
} from 'reactstrap';
import { default as NavLink } from 'reactstrap/lib/NavLink'; 
// import SignOutButton from './SignOut';
import * as routes from '../constants/routes';
import IStoreState from '../store/IStoreState';
import { logOut as logOutAction } from './../actions/authenticationAction'

interface IProps {
  authUser: firebase.User | null,
  logOut: () => void
}

const Navigation = (props: IProps) => {
  const { authUser, logOut } = props
  return (
    <div>
      <Navbar color='dark' dark={true} expand='md'>
        {authUser
          ? <NavigationAuth logOut={logOut} />
          : <NavigationNonAuth />
        }
      </Navbar>
    </div>
  )
}

const NavigationAuth = ({ logOut }: { logOut: IProps['logOut'] }) => {
  return (
    <Nav className='ml-auto' navbar={true}>
      {/* <NavItem>
        <NavLink to={routes.LANDING} tag={RRNavLink}>Landing</NavLink>
      </NavItem> */}
      <NavItem>
        <NavLink to={routes.HOME} tag={RRNavLink} >Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to={routes.ACCOUNT} tag={RRNavLink}>Account</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to={routes.SIGN_IN} tag={RRNavLink} onClick={logOut}>Log Out</NavLink>
      </NavItem>
    </Nav>
  )
}

const NavigationNonAuth = () =>
  <Nav className='ml-auto' navbar={true}>
    {/* <NavItem>
      <NavLinkX to={routes.ACCOUNT} tag={RRNavLink}>Landing</NavLinkX>
    </NavItem> */}
    <NavItem>
      <NavLink to={routes.SIGN_IN} tag={RRNavLink}>Sign In</NavLink>
    </NavItem>
  </Nav>

interface IStateProps {
  authUser: firebase.User | null;
}

const mapStateToProps = (state: IStoreState): IStateProps => ({
  authUser: state.sessionState.authUser
});

interface IDispatchProps {
  logOut: () => any;
}

const mapDispatchToProps = (dispatch: any): any => {
  return {
    logOut: () => dispatch(logOutAction())
  }
};

export default connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps)(Navigation);