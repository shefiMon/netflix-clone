import React, { useState } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #111;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
`;

const Logo = styled.img`
  width: 100px;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #111;
    padding: 20px;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background-color: white;
    margin-bottom: 4px;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-left: 20px;
  cursor: pointer;

  &:hover {
    color: #aaa;
  }
`;

const SearchBar = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-right: 20px;
  width: 200px;
  background-color: #333;
  color: white;
`;

const Navbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Logo src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix Logo" />
      <Hamburger onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
      <NavLinks isOpen={isOpen}>
        <SearchBar type="text" placeholder="Search" value={searchQuery} onChange={handleSearchChange} />
        <NavLink>Home</NavLink>
        <NavLink>TV Shows</NavLink>
        <NavLink>Movies</NavLink>
        <NavLink>My List</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;