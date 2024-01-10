import {
	Flex,
	Box,
	Heading,
	Text,
	FormControl,
	FormLabel,
	Switch,
	Tag

} from '@chakra-ui/react'
export const YourAccounts = () => {
	return (
		<Box bgColor='#FAFAFA'>
			<Flex
				justifyContent='space-between'
				alignItems='center'
				pt='40px'
				mb='32px'
			>
				<Heading
					fontSize='48px'
					fontWeight='700'
					color='#171923'
					lineHeight='120%'
				>
					Ваши аккаунты
				</Heading>
				<Flex
					gap='25px'
				>
					<Flex
						alignItems='center'
						gap='8px'
						border='1px solid #E2E8F0'
						borderRadius='6px'
						color='#1A202C'
						px='12px'
						py='8px'
						cursor='pointer'
						_hover={{
							bgColor: '#E2E8F0',
						}}
					>
						<Text whiteSpace='nowrap' lineHeight='20px'>
							Добавить аккаунт
						</Text>
						<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
							<path fillRule="evenodd" clipRule="evenodd" d="M2.9165 2.33335C2.59434 2.33335 2.33317 2.59452 2.33317 2.91669V11.0834C2.33317 11.4055 2.59434 11.6667 2.9165 11.6667H11.0832C11.4053 11.6667 11.6665 11.4055 11.6665 11.0834V2.91669C11.6665 2.59452 11.4053 2.33335 11.0832 2.33335H2.9165ZM1.1665 2.91669C1.1665 1.95019 1.95001 1.16669 2.9165 1.16669H11.0832C12.0497 1.16669 12.8332 1.95019 12.8332 2.91669V11.0834C12.8332 12.0499 12.0497 12.8334 11.0832 12.8334H2.9165C1.95001 12.8334 1.1665 12.0499 1.1665 11.0834V2.91669Z" fill="#4A5568" />
							<path fillRule="evenodd" clipRule="evenodd" d="M6.99984 4.08331C7.322 4.08331 7.58317 4.34448 7.58317 4.66665V9.33331C7.58317 9.65548 7.322 9.91665 6.99984 9.91665C6.67767 9.91665 6.4165 9.65548 6.4165 9.33331V4.66665C6.4165 4.34448 6.67767 4.08331 6.99984 4.08331Z" fill="#4A5568" />
							<path fillRule="evenodd" clipRule="evenodd" d="M4.0835 7.00002C4.0835 6.67785 4.34466 6.41669 4.66683 6.41669H9.3335C9.65566 6.41669 9.91683 6.67785 9.91683 7.00002C9.91683 7.32219 9.65566 7.58335 9.3335 7.58335H4.66683C4.34466 7.58335 4.0835 7.32219 4.0835 7.00002Z" fill="#4A5568" />
						</svg>
					</Flex>
					<FormControl display='flex' alignItems='center'>
						<FormLabel color='#171923' htmlFor='email-alerts' mb='0'>
							Архивные
						</FormLabel>
						<Switch id='email-alerts' colorScheme='purple' />
					</FormControl>
				</Flex>
			</Flex>
			<Box

				bgColor='white'
				borderRadius='12px'
				p='32px'
			>
				<Flex
					gap='16px'
					alignItems='center'
				>
					<Heading
						fontSize='24px'
						fontWeight={600}
						lineHeight='120%'
						color='#171923'
					>
						Мой авито магазин
					</Heading>
					<Box
						bgColor='green.500'
						color='white'
						fontSize='12px'
						lineHeight='16px'
						px='4px'
						py='3px'
						borderRadius='2px'
						fontWeight='700'
					>Активен до 23.04.2023</Box>
				</Flex>
			</Box>
		</Box>
	)
}
