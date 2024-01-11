import {
	Flex,
	Box,
	Heading,
	Text,
	FormControl,
	FormLabel,
	Switch,
	Button,
	useClipboard,
	Input,
	Grid,
	Image,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionIcon,
	AccordionPanel,
	Alert,
	AlertIcon,
} from '@chakra-ui/react'
import {
	ExternalLinkIcon,
	CopyIcon,
	CheckIcon,
	SettingsIcon,
	CloseIcon,
} from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import assets from '../../assets';

export const YourAccounts = () => {
	const placeholder = "https://docs.google.com/spreadsheet...";
	const { onCopy, value, setValue, hasCopied } = useClipboard("");

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
			<Box bgColor='white'
				borderRadius='12px'
				p='32px'
				position='relative'
			>
				<Grid
					templateColumns='repeat(2, 1fr)'
					gap='40px'
					mb='24px'
				>
					<Box>
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
								bgColor='#DD6B20'
								color='white'
								fontSize='12px'
								lineHeight='16px'
								px='4px'
								py='3px'
								borderRadius='2px'
								fontWeight='700'
							>Остановлено</Box>
						</Flex>
						<Flex
							mt='20px'
							gap='15px'
						>
							<Link>
								<Button
									colorScheme='green'
									px='12px'
									variant='outline'
									_hover={{ bgColor: 'green.500', color: 'white' }}
									color='green.500'
									fontSize='14px'
									fontWeight='600'
								>
									<Text pr='8px'>
										Google Таблица
									</Text>
									<ExternalLinkIcon />
								</Button>
							</Link>
							<Flex
								mb={2}
								position='relative'
								width='100%'
							>
								<Input
									placeholder={placeholder}
									value={value}
									width='100%'
									onChange={(e) => {
										setValue(e.target.value);
									}}
								/>
								<Button
									onClick={onCopy}
									position='absolute'
									right='0'
									borderTopLeftRadius='0'
									borderBottomLeftRadius='0'
									zIndex='100'
								>
									{hasCopied ? <CheckIcon /> : <CopyIcon />}
								</Button>
							</Flex>
						</Flex>
						<Box mt='12px'>
							<Flex gap='14px'>
								<Link to='#!'>
									<Button
										variant='outline'
									>
										<Text mr='8px'>
											Отключить Яндекс Диск
										</Text>
										<Image src={assets.yandexIcon} width='19px' height='19px' />
									</Button>
								</Link>
								<Link to='#!'>
									<Button
										// variant='outline'
										bgColor='gray.200'
									>
										<Text mr='8px'>
											Подключить Авито
										</Text>
										<Image src={assets.yandexAvitoIcon} width='19px' height='19px' />
									</Button>
								</Link>
								<Link to='#!'>
									<Button
										color='purple.500'
										colorScheme='purple'
										variant='outline'
										_hover={{
											bgColor: 'purple.500',
											color: 'white'
										}}
									>
										<Text mr='8px'>
											Автоматизация
										</Text>
										<SettingsIcon />
									</Button>
								</Link>
							</Flex>
						</Box>
					</Box>
					<Box>
						<Heading
							fontSize='16px'
							color='#171923'
							fontWeight={500}
							mb='12px'
						>
							Категории в таблице
						</Heading>
						<Box
							position='absolute'
							top='32px'
							right='32px'
							cursor='pointer'
						>

							<Menu>
								<MenuButton >
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
										<path d="M12 7C11.4696 7 10.9609 6.78929 10.5858 6.41421C10.2107 6.03914 10 5.53043 10 5C10 4.46957 10.2107 3.96086 10.5858 3.58579C10.9609 3.21071 11.4696 3 12 3C12.5304 3 13.0391 3.21071 13.4142 3.58579C13.7893 3.96086 14 4.46957 14 5C14 5.53043 13.7893 6.03914 13.4142 6.41421C13.0391 6.78929 12.5304 7 12 7ZM12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14ZM12 21C11.4696 21 10.9609 20.7893 10.5858 20.4142C10.2107 20.0391 10 19.5304 10 19C10 18.4696 10.2107 17.9609 10.5858 17.5858C10.9609 17.2107 11.4696 17 12 17C12.5304 17 13.0391 17.2107 13.4142 17.5858C13.7893 17.9609 14 18.4696 14 19C14 19.5304 13.7893 20.0391 13.4142 20.4142C13.0391 20.7893 12.5304 21 12 21Z" fill="#718096" />
									</svg>
								</MenuButton>
								<MenuList
									border='0'
									boxShadow='15px 15px 40px -4px rgba(145, 158, 171, 0.17), 0px 0px 2px 0px rgba(145, 158, 171, 0.24)'
									width='161px'
								>
									<MenuItem>Переименовать</MenuItem>
									<MenuItem>Добавить в архив</MenuItem>
								</MenuList>
							</Menu>
						</Box>
						<Flex
							gap='5px'
							flexWrap='wrap'
						>
							<Flex
								gap='5px'
							>
								<Flex
									bgColor='#E9D8FD'
									fontSize='12px'
									borderRadius='6px'
									px='8px'
									gap='8px'
									width='fit-content'
									color='#44337A'
									alignItems='center'
									fontWeight='500'
								>
									Часы и украшения
									<CloseIcon opacity='0.3' color='purple.800' width='10px' height='20px' cursor='pointer' _hover={{ opacity: '1' }} transition='all 0.2s linear' />
								</Flex>
								<Flex
									bgColor='#E9D8FD'
									fontSize='12px'
									borderRadius='6px'
									px='8px'
									gap='8px'
									width='fit-content'
									color='#44337A'
									alignItems='center'
									fontWeight='500'
								>
									Автомобили
									<CloseIcon opacity='0.3' color='purple.800' width='10px' height='20px' cursor='pointer' _hover={{ opacity: '1' }} transition='all 0.2s linear' />
								</Flex>
								<Flex
									bgColor='#E9D8FD'
									fontSize='12px'
									borderRadius='6px'
									px='8px'
									gap='8px'
									width='fit-content'
									color='#44337A'
									alignItems='center'
									fontWeight='500'
								>
									Запчасти
									<CloseIcon opacity='0.3' color='purple.800' width='10px' height='20px' cursor='pointer' _hover={{ opacity: '1' }} transition='all 0.2s linear' />
								</Flex>
							</Flex>
							<Text
								cursor='pointer'
								px='8px'
								lineHeight='16px'
								color='#6B46C1'
								fontWeight='500'
							>
								Добавить
							</Text>
						</Flex>
					</Box>
				</Grid>
				<hr />
				<Box mt='24px'>
					<Accordion allowMultiple>
						<AccordionItem
							border='none'
						>
							<Box
								as='span'
								display='inline-block'
							>
								<AccordionButton
									justifyContent='start'
									p='0'
									_hover={{
										bgColor: 'transparent',
									}}
									gap='4px'
								>
									<Heading flex='1' textAlign='left'
										fontSize='16px'
										fontWeight='500'
										lineHeight='120%'
										color='#171923'>
										Статистика
									</Heading>

									<AccordionIcon color='purple.500' width='16px' height='16px' />
								</AccordionButton>
							</Box>
							<AccordionPanel >

							</AccordionPanel>
						</AccordionItem>
					</Accordion>
				</Box>
				<Box mt='24px'>
					<Alert width='642px' status='warning' borderRadius='12px' alignItems='start'>
						<AlertIcon />
						<Box>
							<Heading lineHeight='24px' fontSize='16px'>
								Оплатите аккаунт
							</Heading>
							<Text
								lineHeight='140%'
								color='#2D3748'
							>
								Подписка закончилась 23.03.2023
							</Text>
						</Box>
					</Alert>
				</Box>
			</Box>
		</Box>
	)
}
