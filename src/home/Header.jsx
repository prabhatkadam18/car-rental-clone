import { Anchor } from "@mantine/core";
import styled from "styled-components";


const Header = () => {
	return (
		<HeaderWrapper>
			<Navbar>
				<Logo src='./assets/images/logo_v4.png' />
				<LinksWrapper>
					<Anchor>Home</Anchor>
					<Anchor>About</Anchor>
					<Anchor>Vehicle Models</Anchor>
					<Anchor>Testimonials</Anchor>
					<Anchor>Our Team</Anchor>
					<Anchor>Contact</Anchor>
				</LinksWrapper>
				<ActionsWrapper>
					<Anchor>Sign In</Anchor>
					<Anchor>Register</Anchor>
				</ActionsWrapper>
			</Navbar>
		</HeaderWrapper>
	);
};

const HeaderWrapper = styled.header`
`;

const Navbar = styled.div`
	display: flex;
	min-height: 72px;
	align-items: center;
	justify-content: space-between;

`;

const Logo = styled.img`
	max-width: 152px;
	min-width: 145px;
	padding: 10px;
	flex-basis: 20%;
`;

const LinksWrapper = styled.div`
	flex-basis: 55%;
	display: flex;
	justify-content: flex-start;
	> a {
		margin: 0 10px;

	}
`;

const ActionsWrapper = styled.div`
	flex-basis: 17%;
`;



export default Header;