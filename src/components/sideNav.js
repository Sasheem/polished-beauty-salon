import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

// styled components
const Ul = styled.ul`
	list-style: none;
	display: flex;
	justify-content: flex-end;
	margin: 0;
	padding: 0;
    width: 100%;

	li {
		padding: 0 0 0 30px;
		margin: 0;
	}
	a,
	p {
		text-decoration: none;
		background-color: none;
		color: #44566C;
	}
	a:hover,
	a:active,
	p:hover,
	p:active {
		cursor: pointer;
		color: #8a8a8a;
	}

	@media only screen and (max-width: 768px) {
		flex-direction: column;
		justify-content: flex-start;
		background-color: #0D2538;
		position: fixed;
		transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
		top: 0;
		right: 0;
		height: 100vh;
		width: 300px;
		padding-top: 3.5rem;
		transition: transform 0.3s ease-in-out;
		z-index: 1;
		
		p, a {
			color: #a0aec0;
		}

        li {
			padding: 20px 0 20px 30px;
		}
	}
`;

const NavText = styled.p`
	margin: 0;
	font-size: 1.15rem;
	font-weight: 700;
`;

// markup
const SideNav = ({ open }) => {
    return (
        <Ul open={open}>
            <li>
                <NavText><Link to='/about'>About</Link></NavText>
            </li>
            <li>
                <NavText><Link to='/services'>Services</Link></NavText>
            </li>
            <li>
                <NavText><Link to='/gallery'>Gallery</Link></NavText>
            </li>
            <li>
                <NavText><Link to='/contact'>Contact</Link></NavText>
            </li>
        </Ul>
    );
};

export default SideNav;