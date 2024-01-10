import { Link } from "react-router-dom";
import assets from '../assets';
import { Flex, ButtonGroup, Box, Image } from '@chakra-ui/react'
import { OutlineButton, RegularButton } from "../components/common";

export const Header = () => {
	return (
		<Box py={5} className="container">
			<Flex alignItems='center' justifyContent='space-between'>
				<Link to='/'>
					<Image src={assets.avitoPlusLogo} alt="header logo" sx={{
						"@media (max-width:480px)":{
							width: '109px'
						}
					}} />
				</Link>
				<ButtonGroup gap={1}>
					<OutlineButton text='Вход' />
					<RegularButton text='Регистрация' />
				</ButtonGroup>
			</Flex>
		</Box>
	)
}
