import { Outlet, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Toaster } from 'react-hot-toast';
// Styled Components
const Wrapper = styled.div`
  padding: 40px;
`;
const Nav = styled.nav`
  display: flex;
  gap: 30px;
  margin-bottom: 20px;
`;
const Link = styled(NavLink)`
  &.active {
    color: tomato;
  }
`;
// ==============//
export const Layout = () => {
  return (
    <Wrapper>
      <Nav>
        <Link to="list">List page</Link>
        <Link to="create">Create page</Link>
      </Nav>
      <Outlet />
      <Toaster />
    </Wrapper>
  );
};
