import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

// local components
import Hamburger from './hamburger';

// styled components
const Header = styled.header`
	margin: 0 auto;
  	max-width: 960px;
  	padding: 0 1.0875rem 1.45rem;
`;
const Nav = styled.nav`
	width: 100%;
	height: 55px;
	display: flex;
	justify-conent: space-between;
	padding-top: 2em;
	margin-bottom: 1em;
`;
const Logo = styled.div``

// markup
const Navbar = () => {
	return (
		<Header>
			<Nav>
				<Logo>
					<Link to='/'>
						<StaticImage src='../images/logo.png' alt='polished nail salon logo' />
					</Link>
				</Logo>
				<Hamburger />
			</Nav>
		</Header>
	);
};

export default Navbar;
