import React, { useRef } from 'react'
import {
	Flex,
	Box,
	Heading,
	Text,
	Button,
	Image,
	Grid,
	Input
} from '@chakra-ui/react'
import assets from '../../assets'
import { Link } from 'react-router-dom'

export const UserSettings = () => {

	return (
		<Box>
			<Flex
				alignItems='center'
				justifyContent='space-between'
				m='44px 0 32px 0'
			>
				<Heading
					fontSize={{ base: '22px', sm: '35px', md: '40px', lg: '48px' }}
					fontWeight='700'
					color='#171923'
					lineHeight='120%'
				>
					Подписка на сервис
				</Heading>
				<Button
					fontSize='16px'
					fontWeight='600'
					lineHeight='24px'
					color='#1a202c'
					borderColor='#E2E8F0'
					variant='outline'
					_hover={{
						bgColor: '#E2E8F0'
					}}
				>
					<Box as='span' pr='8px'>
						Выйти из профиля
					</Box>

					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
						<g clipPath="url(#clip0_89_7592)">
							<path d="M7.99967 1.66663C8.26489 1.66663 8.51925 1.77198 8.70678 1.95952C8.89432 2.14706 8.99967 2.40141 8.99967 2.66663C8.99967 2.93184 8.89432 3.1862 8.70678 3.37373C8.51925 3.56127 8.26489 3.66663 7.99967 3.66663H4.66634C4.57794 3.66663 4.49315 3.70175 4.43064 3.76426C4.36813 3.82677 4.33301 3.91155 4.33301 3.99996V12C4.33301 12.0884 4.36813 12.1732 4.43064 12.2357C4.49315 12.2982 4.57794 12.3333 4.66634 12.3333H7.66634C7.93156 12.3333 8.18591 12.4387 8.37345 12.6262C8.56098 12.8137 8.66634 13.0681 8.66634 13.3333C8.66634 13.5985 8.56098 13.8529 8.37345 14.0404C8.18591 14.2279 7.93156 14.3333 7.66634 14.3333H4.66634C4.0475 14.3333 3.45401 14.0875 3.01643 13.6499C2.57884 13.2123 2.33301 12.6188 2.33301 12V3.99996C2.33301 3.38112 2.57884 2.78763 3.01643 2.35004C3.45401 1.91246 4.0475 1.66663 4.66634 1.66663H7.99967ZM12.0397 5.40663L13.9257 7.29329C14.1129 7.48079 14.2181 7.73496 14.2181 7.99996C14.2181 8.26496 14.1129 8.51913 13.9257 8.70663L12.0403 10.5933C11.8527 10.7809 11.5983 10.8863 11.333 10.8863C11.0677 10.8863 10.8133 10.7809 10.6257 10.5933C10.4381 10.4057 10.3327 10.1513 10.3327 9.88596C10.3327 9.62066 10.4381 9.36622 10.6257 9.17863L10.8043 8.99996H7.99967C7.73446 8.99996 7.4801 8.8946 7.29257 8.70707C7.10503 8.51953 6.99967 8.26518 6.99967 7.99996C6.99967 7.73474 7.10503 7.48039 7.29257 7.29285C7.4801 7.10532 7.73446 6.99996 7.99967 6.99996H10.8043L10.6257 6.82129C10.5328 6.7284 10.4592 6.61814 10.409 6.49679C10.3587 6.37544 10.3329 6.24539 10.3329 6.11406C10.333 5.98272 10.3589 5.85268 10.4091 5.73136C10.4594 5.61003 10.5331 5.4998 10.626 5.40696C10.7189 5.31412 10.8292 5.24048 10.9505 5.19024C11.0719 5.14001 11.2019 5.11418 11.3332 5.11421C11.4646 5.11424 11.5946 5.14014 11.7159 5.19042C11.8373 5.24071 11.9475 5.3144 12.0403 5.40729L12.0397 5.40663Z" fill="#1A202C" />
						</g>
						<defs>
							<clipPath id="clip0_89_7592">
								<rect width="16" height="16" fill="white" />
							</clipPath>
						</defs>
					</svg>
				</Button>
			</Flex>

			<Flex
				bgColor='white'
				borderRadius='12px'
				px='32px'
				py='20px'
				gap='20px'
				alignItems='end'
				mb='24px'
			>
				<Box flex='1 1 0'>
					<Text
						lineHeight='120%'
						color='#171923'
						mb='8px'
					>
						Имя
					</Text>
					<Box
						position='relative'
					>
						<Input
							placeholder='Alexander'
							width='100%'
							_focusVisible={{
								boxShadow: 'none',
								borderColor: 'gray.200',
								outline: 'none'
							}}
							_placeholder={{
								color: '#2D3748',
							}}
						/>
						<Button
							position='absolute'
							right='0'
							top='0'
							variant='outline'
							borderColor='purple.500'
							color='purple.500'
							borderTopLeftRadius='0'
							fontWeight='600'
							lineHeight='24px'
							borderBottomLeftRadius='0'
							_hover={{
								bgColor: 'purple.500',
								color: 'white'
							}}
							zIndex='10'
						>
							Изменить
						</Button>
					</Box>
				</Box>

				<Box flex='1 1 0'>
					<Text
						lineHeight='120%'
						color='#171923'
						mb='8px'
					>
						Почта
					</Text>
					<Box
						position='relative'
					>
						<Input
							placeholder='mail.mai'
							width='100%'
							color='#2D3748'
							borderColor='gray.100'
							bgColor='gray.100'
							border='none'
							_focusVisible={{
								boxShadow: 'none',
								borderColor: 'gray.200',
								outline: 'none'
							}}
							_placeholder={{
								color: '#2D3748',
							}}
						/>
					</Box>
				</Box>
				<Box>
					<Button
						colorScheme='purple'
						fontWeight='600'
						lineHeight='24px'
					>
						Изменить пароль
					</Button>
				</Box>
			</Flex>

			<Box
				bgColor='white'
				borderRadius='12px'
				px='32px'
				py='20px'
			>
				<Heading
					fontSize='20px'
					color='#171923'
					fontWeight='700'
					lineHeight='120%'
					mb='20px'
				>
					Настройки  подключения к Telegram
				</Heading>
				<Flex
					alignItems='center'
					gap='24px'
				>
					<Link to='#!'>
						<Button
							borderColor='blue.500'
							color='blue.500'
							variant='outline'
							fontSize={{ base: '14px', md: '16px', lg: '16px' }}
						>
							Подключить Telegram Бот
							<Image src={assets.telegramIcon} ml='13px' />
						</Button>
					</Link>
					<Box
						sx={{
							"@media (max-width: 550px)": {
								order: '-1'
							}
						}}
					>
						<Text
							fontSize='14px'
							color='gray.500'
							lineHeight='20px'
							display='block'
						>
							Получайте актуальную информацию о ваших акаунтах в Telegram
						</Text>
					</Box>
				</Flex>
			</Box>
		</Box>
	)
}
