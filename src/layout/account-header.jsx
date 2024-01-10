import {
	Box,
	ButtonGroup,
	Flex,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom"
import assets from '../assets'

export const AccountHeader = () => {
	return (
		<Box py={5} className="container">
			<Flex justifyContent='space-between'>
				<Link to='/'>
					<img src={assets.avitoPlusLogo} alt="header logo" />
				</Link>
				<ButtonGroup gap={1}>
					<Link to='#!'>
						<Button
							_hover={{
								bgColor: 'purple.500',
								borderColor: 'purple.500',
								color: 'white',
							}}
							colorScheme='gray'
							variant='outline'
						>
							Аккаунты
						</Button>
					</Link>
					<Link to='#!'>
						<Button
							_hover={{
								bgColor: 'purple.500',
								borderColor: 'purple.500',
								color: 'white',
							}}
							colorScheme='gray'
							variant='outline'
						>
							Подписка
						</Button>
					</Link>
					<Link to='#!'>
						<Button
							_hover={{
								bgColor: 'purple.500',
								borderColor: 'purple.500',
								color: 'white',
							}}
							colorScheme='gray'
							variant='outline'
						>
							Видео-инструкции
						</Button>
					</Link>
				</ButtonGroup>
				<ButtonGroup gap={1}>
					<Box
						bgColor='#EDF2F7'
						px='16px'
						py='8px'
						lineHeight='24px'
						fontSize='16px'
						fontWeight='600'
						borderRadius={6}
					>
						4300 ₽
					</Box>
					<Menu>
						<MenuButton
							as={Button}
							rightIcon={<ChevronDownIcon />}
							bgColor='transparent'
							color='purple.500'
							border='1px solid #805AD5'
							borderRadius='6px'
							_hover={{ backgroundColor: 'purple.500', color: '#fff' }}
						>
							Александр
						</MenuButton>
						<MenuList>
							<MenuItem>Label</MenuItem>
							<MenuItem>Label</MenuItem>
							<MenuItem>Label</MenuItem>
						</MenuList>
					</Menu>
				</ButtonGroup>
			</Flex>
		</Box>
	)
}