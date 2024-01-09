import { Link } from "react-router-dom";
import assets from '../assets';
import { Flex, ButtonGroup, Box } from '@chakra-ui/react'
import { OutlineButton, RegularButton } from "../components/common";

export const Header = () => {
	return (
		<Box py={5} className="container">
			<Flex justifyContent='space-between'>
				<Link to='/'>
					<img src={assets.avitoPlusLogo} alt="header logo" />
				</Link>
				<ButtonGroup gap={1}>
					<OutlineButton text='Вход' />
					<RegularButton text='Регистрация' />
				</ButtonGroup>
			</Flex>
		</Box>
	)
}
