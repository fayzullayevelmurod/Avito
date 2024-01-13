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
	Link
} from '@chakra-ui/react'
import {
	ExternalLinkIcon,
	CopyIcon,
	CheckIcon,
	SettingsIcon,
	CloseIcon,
} from '@chakra-ui/icons'
// import { Link } from 'react-router-dom'
import assets from '../../assets';

export const YourAccounts = () => {
	const placeholder = "https://docs.google.com/spreadsheet...";
	const { onCopy, value, setValue, hasCopied } = useClipboard("");

	return (
		<Box pb={{ base: '80px', sm: '100px', md: '100px', lg: '100px' }}>
			<Flex
				justifyContent='space-between'
				alignItems='center'
				pt='40px'
				mb='32px'
				flexWrap='wrap'
				gap='24px'
			>
				<Heading
					fontSize={{ base: '22px', sm: '35px', md: '40px', lg: '48px' }}
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
						<Text
							whiteSpace='nowrap'
							lineHeight='20px'
							sx={{
								"@media (max-width: 480px)": {
									fontSize: '14px'
								}
							}}
						>
							Добавить аккаунт
						</Text>
						<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
							<path fillRule="evenodd" clipRule="evenodd" d="M2.9165 2.33335C2.59434 2.33335 2.33317 2.59452 2.33317 2.91669V11.0834C2.33317 11.4055 2.59434 11.6667 2.9165 11.6667H11.0832C11.4053 11.6667 11.6665 11.4055 11.6665 11.0834V2.91669C11.6665 2.59452 11.4053 2.33335 11.0832 2.33335H2.9165ZM1.1665 2.91669C1.1665 1.95019 1.95001 1.16669 2.9165 1.16669H11.0832C12.0497 1.16669 12.8332 1.95019 12.8332 2.91669V11.0834C12.8332 12.0499 12.0497 12.8334 11.0832 12.8334H2.9165C1.95001 12.8334 1.1665 12.0499 1.1665 11.0834V2.91669Z" fill="#4A5568" />
							<path fillRule="evenodd" clipRule="evenodd" d="M6.99984 4.08331C7.322 4.08331 7.58317 4.34448 7.58317 4.66665V9.33331C7.58317 9.65548 7.322 9.91665 6.99984 9.91665C6.67767 9.91665 6.4165 9.65548 6.4165 9.33331V4.66665C6.4165 4.34448 6.67767 4.08331 6.99984 4.08331Z" fill="#4A5568" />
							<path fillRule="evenodd" clipRule="evenodd" d="M4.0835 7.00002C4.0835 6.67785 4.34466 6.41669 4.66683 6.41669H9.3335C9.65566 6.41669 9.91683 6.67785 9.91683 7.00002C9.91683 7.32219 9.65566 7.58335 9.3335 7.58335H4.66683C4.34466 7.58335 4.0835 7.32219 4.0835 7.00002Z" fill="#4A5568" />
						</svg>
					</Flex>
					<FormControl display='flex' alignItems='center'>
						<FormLabel
							sx={{
								"@media (max-width: 480px)": {
									fontSize: '14px'
								}
							}}
							color='#171923'
							htmlFor='email-alerts'
							mb='0'
						>
							Архивные
						</FormLabel>
						<Switch id='email-alerts' colorScheme='purple' />
					</FormControl>
				</Flex>
			</Flex>
			<Box bgColor='white'
				borderRadius='12px'
				p={{ base: '20px', sm: '28px', md: '32px', lg: '32px' }}
				position='relative'
			>
				<Flex
					gap='40px'
					mb='24px'
					flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
				>
					<Box
						width={{ md: '490px', lg: 'auto' }}
						sx={{
							"@media (max-width:830px)": {
								width: '100%'
							}
						}}
					>
						<Flex
							gap='16px'
							alignItems='center'
							sx={{
								"@media (max-width:480px)": {
									flexDirection: 'column',
									alignItems: 'start',
									gap: '8px'
								}
							}}
						>
							<Heading
								fontSize='24px'
								fontWeight={600}
								lineHeight='120%'
								color='#171923'
								sx={{
									"@media (max-width:480px)": {
										order: '1',
										fontSize: '22px'
									}
								}}
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
							sx={{
								"@media (max-width: 830px)": {
									flexWrap: 'wrap'
								}
							}}
						>
							<Link
								sx={{
									"@media (max-width: 830px)": {
										width: '100%'
									}
								}}
								href='#!'
							>
								<Button
									colorScheme='green'
									sx={{
										"@media (max-width: 830px)": {
											width: '100%'
										}
									}}
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
									_focusVisible={{
										borderColor: 'none',
										boxShadow: 'none'
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
							<Flex
								gap='14px'
								flexWrap={{ base: 'wrap', lg: 'nowrap' }}
							>
								<Link
									href='#!'
									sx={{
										"@media (max-width: 830px)": {
											width: '100%'
										}
									}}
								>
									<Button
										variant='outline'
										sx={{
											"@media (max-width: 830px)": {
												width: '100%'
											}
										}}
									>
										<Text mr='8px'
											fontSize='14px'
											color='gray.800'
											lineHeight='20px'
										>
											Отключить Яндекс Диск
										</Text>
										<Image src={assets.yandexIcon} width='19px' height='19px' />
									</Button>
								</Link>
								<Link
									href='#!'
									sx={{
										"@media (max-width: 830px)": {
											width: '100%'
										}
									}}
								>
									<Button
										bgColor='gray.200'
										sx={{
											"@media (max-width: 830px)": {
												width: '100%'
											}
										}}
									>
										<Text mr='8px'
											fontSize='14px'
											color='gray.800'
											lineHeight='20px'
										>
											Подключить Авито
										</Text>
										<Image src={assets.yandexAvitoIcon} width='19px' height='19px' />
									</Button>
								</Link>
								<Link
									sx={{
										"@media (max-width: 830px)": {
											width: '100%'
										}
									}}
									href='#!'
								>
									<Button
										color='purple.500'
										colorScheme='purple'
										variant='outline'
										_hover={{
											bgColor: 'purple.500',
											color: 'white'
										}}
										sx={{
											"@media (max-width: 830px)": {
												width: '100%'
											}
										}}
									>
										<Text mr='8px'
											fontSize='14px'
											lineHeight='20px'
										>
											Автоматизация
										</Text>
										<SettingsIcon />
									</Button>
								</Link>
							</Flex>
						</Box>
					</Box>
					<Box
						display='none'
						sx={{
							"@media (max-width: 768px)": {
								display: 'block'
							}
						}}
					>
						<hr />
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
						<Box>
							<Menu>
								<MenuButton
									position='absolute'
									top={{ base: '16px', sm: '28px', md: '32px', lg: '32px' }}
									right={{ base: '16px', sm: '28px', md: '32px', lg: '32px' }}
									cursor='pointer'
								>
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
							sx={{
								"@media (max-width:480px)": {
									flexWrap: 'nowrap',
									alignItems: 'end'
								}
							}}
						>
							<Flex
								gap='5px'
								flexWrap='wrap'
							>
								<Flex
									bgColor='#E9D8FD'
									fontSize='12px'
									borderRadius='6px'
									p='4px 8px'
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
									p='4px 8px'
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
									p='4px 8px'
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
								sx={{
									"@media (max-width:480px)": {
										mb: '5px'
									}
								}}
							>
								Добавить
							</Text>
						</Flex>
					</Box>
				</Flex>
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
							<AccordionPanel
								p='0'
								pt='12px'
							>
								<Grid
									templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
									gap='12px'

								>
									<Box
										border='1px solid #E2E8F0'
										borderRadius='12px'
										p={{ base: '20px', sm: '24px', md: '24px', lg: '24px' }}
									>
										<Box
											as='span'
											fontSize='14px'
											fontWeight={500}
											lineHeight='16px'
											color='gray.500'
											display='inline-block'
										>
											Объявления
										</Box>
										<Grid
											templateColumns='repeat(2, 1fr)'
											mt='12px'
											sx={{
												"@media (max-width:435px)": {
													display: 'flex',
													flexDirection: 'column',
												}
											}}
										>
											<Flex
												justifyContent='space-between'
												pr='17px'
												flexWrap='wrap'
												pb='12px'
												sx={{
													"@media (max-width:435px)": {
														pr: '0',
														border: 'none'
													}
												}}
												borderRight='1px solid #E2E8F0'
											>
												<Box
													fontSize='12px'
													color='#2D3748'
													fontWeight='700'
													lineHeight='16px'
												>
													Занято
												</Box>
												<Box
													fontSize='12px'
													color='#2D3748'
													fontWeight='700'
													lineHeight='16px'
												>
													<Text
														bgColor='gray.200'
														px='8px'
														display='inline-block'
														color='gray.800'
														fontSize='12px'
														fontWeight='500'
														borderRadius='6px'
													>
														22 из 100
													</Text>
												</Box>
											</Flex>
											<Flex
												justifyContent='space-between'
												pl='17px'
												pb='12px'
												sx={{
													"@media (max-width:435px)": {
														pl: '0',
														pt: '12px',
														borderTop: '1px solid #e2e9f0'
													}
												}}
											>
												<Box
													fontSize='12px'
													color='#2D3748'
													fontWeight='700'
													lineHeight='16px'
												>
													Активно
												</Box>
												<Box
													fontSize='12px'
													color='#2D3748'
													fontWeight='700'
													lineHeight='16px'
												>
													<Text
														bgColor='blue.100'
														borderRadius='6px'
														display='inline-block'
														px='8px'
														color='#2A4365'
														fontSize='12px'
														fontWeight='500'
													>
														8
													</Text>
												</Box>
											</Flex>
											<Flex
												justifyContent='space-between'
												borderRight='1px solid #E2E8F0'
												pr='17px'
												py='12px'
												sx={{
													"@media (max-width:435px)": {
														pr: '0',
														borderRight: '0'
													}
												}}
												borderBottom='1px solid #E2E8F0'
												borderTop='1px solid #E2E8F0'
											>
												<Box
													fontSize='12px'
													color='#2D3748'
													fontWeight='700'
													lineHeight='16px'
												>
													Ожидают
												</Box>
												<Box
													fontSize='12px'
													color='#2D3748'
													fontWeight='700'
													lineHeight='16px'

												>
													<Text
														bgColor='teal.100'
														px='8px'
														display='inline-block'
														color='teal.800'
														fontSize='12px'
														fontWeight='500'
														borderRadius='6px'
													>
														2
													</Text>
												</Box>
											</Flex>
											<Flex
												justifyContent='space-between'
												pl='17px'
												py='12px'
												sx={{
													"@media (max-width:435px)": {
														pl: '0',
														borderTop: 'none'
													}
												}}
												borderBottom='1px solid #E2E8F0'
												borderTop='1px solid #E2E8F0'
											>
												<Box
													fontSize='12px'
													color='#2D3748'
													fontWeight='700'
													lineHeight='16px'
												>
													Истекло
												</Box>
												<Box
													fontSize='12px'
													color='#2D3748'
													fontWeight='700'
													lineHeight='16px'
												>
													<Text
														bgColor='orange.100'
														borderRadius='6px'
														display='inline-block'
														px='8px'
														color='orange.800'
														fontSize='12px'
														fontWeight='500'
													>
														3
													</Text>
												</Box>
											</Flex>
											<Flex
												justifyContent='space-between'
												borderRight='1px solid #E2E8F0'
												pr='17px'
												pt='12px'
												sx={{
													"@media (max-width:435px)": {
														pr: '0',
														pb: '12px',
														border: 'none'
													}
												}}
											>
												<Box
													fontSize='12px'
													color='#2D3748'
													fontWeight='700'
													lineHeight='16px'
												>
													Ожидают
												</Box>
												<Box
													fontSize='12px'
													color='#2D3748'
													fontWeight='700'
													lineHeight='16px'

												>
													<Text
														bgColor='red.100'
														px='8px'
														display='inline-block'
														color='red.800'
														fontSize='12px'
														fontWeight='500'
														borderRadius='6px'
													>
														2
													</Text>
												</Box>
											</Flex>
											<Flex
												justifyContent='space-between'
												pl='17px'
												pt='12px'
												sx={{
													"@media (max-width:435px)": {
														pl: '0',
														borderTop: '1px solid #E2E8F0'
													}
												}}
											>
												<Box
													fontSize='12px'
													color='#2D3748'
													fontWeight='700'
													lineHeight='16px'
												>
													Истекло
												</Box>
												<Box
													fontSize='12px'
													color='#2D3748'
													fontWeight='700'
													lineHeight='16px'
												>
													<Text
														bgColor='purple.100'
														borderRadius='6px'
														display='inline-block'
														px='8px'
														color='purple.800'
														fontSize='12px'
														fontWeight='500'
													>
														0
													</Text>
												</Box>
											</Flex>
										</Grid>
									</Box>
									<Box
										border='1px solid #E2E8F0'
										borderRadius='12px'
										p={{ base: '20px', sm: '24px', md: '24px', lg: '24px' }}
									>
										<Flex
											justifyContent='space-between'
											gap={{ base: '10px', md: '32px', lg: '10px' }}
											sx={{
												"@media (max-width:668px)": {
													flexWrap: 'wrap'
												}
											}}
										>
											<Box
												flex='1 1 0'
											>
												<Heading
													fontSize='12px'
													color='gray.700'
													fontWeight={700}
													lineHeight='16px'
												>
													Сегодня
												</Heading>
												<Flex
													flexDirection='column'
													gap='8px'
													mt='16px'
												>
													<Box
														px='8px'
														py='6px'
														bgColor='#BEE3F8'
														borderRadius='6px'
														width={{ base: '100%', lg: '163px' }}
														sx={{
															"@media (max-width: 650px)": {
																width: '100%',
															}
														}}
													>
														<Flex
															alignItems='center'
															fontSize='12px'
															color='#2A4365'
															fontWeight={500}
															lineHeight='16px'
															gap='6px'>
															<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
																<path d="M13.5248 6.82281C13.5056 6.77961 13.0424 5.75203 12.0127 4.72227C10.6405 3.35016 8.9075 2.625 7 2.625C5.0925 2.625 3.35945 3.35016 1.98734 4.72227C0.957573 5.75203 0.492182 6.78125 0.475229 6.82281C0.450354 6.87876 0.4375 6.93931 0.4375 7.00055C0.4375 7.06178 0.450354 7.12233 0.475229 7.17828C0.49437 7.22148 0.957573 8.24852 1.98734 9.27828C3.35945 10.6498 5.0925 11.375 7 11.375C8.9075 11.375 10.6405 10.6498 12.0127 9.27828C13.0424 8.24852 13.5056 7.22148 13.5248 7.17828C13.5496 7.12233 13.5625 7.06178 13.5625 7.00055C13.5625 6.93931 13.5496 6.87876 13.5248 6.82281ZM7 9.1875C6.56735 9.1875 6.14442 9.05921 5.78469 8.81884C5.42495 8.57847 5.14458 8.23683 4.97901 7.83712C4.81344 7.43741 4.77012 6.99757 4.85453 6.57324C4.93893 6.14891 5.14727 5.75913 5.4532 5.4532C5.75913 5.14728 6.1489 4.93894 6.57324 4.85453C6.99757 4.77013 7.4374 4.81345 7.83712 4.97901C8.23683 5.14458 8.57847 5.42496 8.81884 5.78469C9.0592 6.14442 9.1875 6.56735 9.1875 7C9.1875 7.58016 8.95703 8.13656 8.54679 8.5468C8.13656 8.95703 7.58016 9.1875 7 9.1875Z" fill="#3182CE" />
															</svg>
															<Text

															>
																Просмотры:
															</Text>
															<Text ml='auto'>
																325
															</Text>
														</Flex>
													</Box>
													<Box
														flex='1 1 0'
														px='8px'
														py='6px'
														bgColor='#EDF2F7'
														borderRadius='6px'
														width='100%'
													>
														<Flex
															alignItems='center'
															fontSize='12px'
															color='#2A4365'
															fontWeight={500}
															lineHeight='16px'
															gap='6px'>
															<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
																<path d="M2.5 1C1.67266 1 1 1.67269 1 2.50006V9.25036C1 10.0777 1.67266 10.7504 2.5 10.7504H4.75V12.6255C4.75 12.7685 4.82969 12.8974 4.95625 12.9607C5.08281 13.024 5.23516 13.0099 5.35 12.9255L8.24922 10.7504H11.5C12.3273 10.7504 13 10.0777 13 9.25036V2.50006C13 1.67269 12.3273 1 11.5 1H2.5Z" fill="#718096" />
															</svg>
															<Text

															>
																Сообщения:
															</Text>
															<Text ml='auto'>
																325
															</Text>
														</Flex>
													</Box>
													<Box
														flex='1 1 0'
														px='8px'
														py='6px'
														bgColor='#FEEBCB'
														borderRadius='6px'
														width={{ base: '100%', lg: '163px' }}
														sx={{
															"@media (max-width: 650px)": {
																width: '100%',
															}
														}}
													>
														<Flex
															alignItems='center'
															fontSize='12px'
															color='#2A4365'
															fontWeight={500}
															lineHeight='16px'
															gap='6px'>
															<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
																<path d="M12.824 6.25517L10.3576 8.40767L11.0965 11.6124C11.1356 11.7799 11.1244 11.9552 11.0644 12.1165C11.0044 12.2777 10.8982 12.4176 10.759 12.5188C10.6199 12.62 10.454 12.678 10.2822 12.6854C10.1103 12.6928 9.94005 12.6494 9.79271 12.5606L6.99763 10.8653L4.20857 12.5606C4.06122 12.6494 3.89097 12.6928 3.7191 12.6854C3.54723 12.678 3.38136 12.62 3.24224 12.5188C3.10311 12.4176 2.9969 12.2777 2.93689 12.1165C2.87688 11.9552 2.86572 11.7799 2.90482 11.6124L3.64255 8.41095L1.1756 6.25517C1.04512 6.14264 0.950768 5.99408 0.904379 5.82814C0.857989 5.6622 0.861626 5.48625 0.914833 5.32237C0.968039 5.15849 1.06845 5.01396 1.20347 4.90691C1.33848 4.79987 1.5021 4.73507 1.6738 4.72064L4.92552 4.439L6.19482 1.4115C6.2611 1.25264 6.37291 1.11694 6.51615 1.0215C6.6594 0.926052 6.82768 0.875122 6.99982 0.875122C7.17195 0.875122 7.34023 0.926052 7.48348 1.0215C7.62673 1.11694 7.73853 1.25264 7.80482 1.4115L9.07794 4.439L12.3286 4.72064C12.5003 4.73507 12.6639 4.79987 12.7989 4.90691C12.9339 5.01396 13.0343 5.15849 13.0875 5.32237C13.1407 5.48625 13.1444 5.6622 13.098 5.82814C13.0516 5.99408 12.9572 6.14264 12.8268 6.25517H12.824Z" fill="#ED8936" />
															</svg>
															<Text

															>
																FEEBCB:
															</Text>
															<Text ml='auto'>
																325
															</Text>
														</Flex>
													</Box>
												</Flex>
											</Box>
											<Box flex='1 1 0'>
												<Heading
													fontSize='12px'
													color='gray.700'
													fontWeight={700}
													lineHeight='16px'
												>
													30 дней
												</Heading>
												<Flex
													flexDirection='column'
													gap='8px'
													mt='16px'
												>
													<Box
														px='8px'
														py='6px'
														bgColor='#BEE3F8'
														borderRadius='6px'
														width={{ base: '100%', lg: '163px' }}
														sx={{
															"@media (max-width: 650px)": {
																width: '100%',
															}
														}}
													>
														<Flex
															alignItems='center'
															fontSize='12px'
															color='#2A4365'
															fontWeight={500}
															lineHeight='16px'
															gap='6px'>
															<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
																<path d="M13.5248 6.82281C13.5056 6.77961 13.0424 5.75203 12.0127 4.72227C10.6405 3.35016 8.9075 2.625 7 2.625C5.0925 2.625 3.35945 3.35016 1.98734 4.72227C0.957573 5.75203 0.492182 6.78125 0.475229 6.82281C0.450354 6.87876 0.4375 6.93931 0.4375 7.00055C0.4375 7.06178 0.450354 7.12233 0.475229 7.17828C0.49437 7.22148 0.957573 8.24852 1.98734 9.27828C3.35945 10.6498 5.0925 11.375 7 11.375C8.9075 11.375 10.6405 10.6498 12.0127 9.27828C13.0424 8.24852 13.5056 7.22148 13.5248 7.17828C13.5496 7.12233 13.5625 7.06178 13.5625 7.00055C13.5625 6.93931 13.5496 6.87876 13.5248 6.82281ZM7 9.1875C6.56735 9.1875 6.14442 9.05921 5.78469 8.81884C5.42495 8.57847 5.14458 8.23683 4.97901 7.83712C4.81344 7.43741 4.77012 6.99757 4.85453 6.57324C4.93893 6.14891 5.14727 5.75913 5.4532 5.4532C5.75913 5.14728 6.1489 4.93894 6.57324 4.85453C6.99757 4.77013 7.4374 4.81345 7.83712 4.97901C8.23683 5.14458 8.57847 5.42496 8.81884 5.78469C9.0592 6.14442 9.1875 6.56735 9.1875 7C9.1875 7.58016 8.95703 8.13656 8.54679 8.5468C8.13656 8.95703 7.58016 9.1875 7 9.1875Z" fill="#3182CE" />
															</svg>
															<Text

															>
																Просмотры:
															</Text>
															<Text ml='auto'>
																325
															</Text>
														</Flex>
													</Box>
													<Box
														px='8px'
														py='6px'
														bgColor='#EDF2F7'
														borderRadius='6px'
														width={{ base: '100%', lg: '163px' }}
														sx={{
															"@media (max-width: 650px)": {
																width: '100%',
															}
														}}
													>
														<Flex
															alignItems='center'
															fontSize='12px'
															color='#2A4365'
															fontWeight={500}
															lineHeight='16px'
															gap='6px'>
															<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
																<path d="M2.5 1C1.67266 1 1 1.67269 1 2.50006V9.25036C1 10.0777 1.67266 10.7504 2.5 10.7504H4.75V12.6255C4.75 12.7685 4.82969 12.8974 4.95625 12.9607C5.08281 13.024 5.23516 13.0099 5.35 12.9255L8.24922 10.7504H11.5C12.3273 10.7504 13 10.0777 13 9.25036V2.50006C13 1.67269 12.3273 1 11.5 1H2.5Z" fill="#718096" />
															</svg>
															<Text

															>
																Сообщения:
															</Text>
															<Text ml='auto'>
																325
															</Text>
														</Flex>
													</Box>
													<Box
														px='8px'
														py='6px'
														bgColor='#FEEBCB'
														borderRadius='6px'
														width={{ base: '100%', lg: '163px' }}
														sx={{
															"@media (max-width: 650px)": {
																width: '100%',
															}
														}}
													>
														<Flex
															alignItems='center'
															fontSize='12px'
															color='#2A4365'
															fontWeight={500}
															lineHeight='16px'
															gap='6px'>
															<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
																<path d="M12.824 6.25517L10.3576 8.40767L11.0965 11.6124C11.1356 11.7799 11.1244 11.9552 11.0644 12.1165C11.0044 12.2777 10.8982 12.4176 10.759 12.5188C10.6199 12.62 10.454 12.678 10.2822 12.6854C10.1103 12.6928 9.94005 12.6494 9.79271 12.5606L6.99763 10.8653L4.20857 12.5606C4.06122 12.6494 3.89097 12.6928 3.7191 12.6854C3.54723 12.678 3.38136 12.62 3.24224 12.5188C3.10311 12.4176 2.9969 12.2777 2.93689 12.1165C2.87688 11.9552 2.86572 11.7799 2.90482 11.6124L3.64255 8.41095L1.1756 6.25517C1.04512 6.14264 0.950768 5.99408 0.904379 5.82814C0.857989 5.6622 0.861626 5.48625 0.914833 5.32237C0.968039 5.15849 1.06845 5.01396 1.20347 4.90691C1.33848 4.79987 1.5021 4.73507 1.6738 4.72064L4.92552 4.439L6.19482 1.4115C6.2611 1.25264 6.37291 1.11694 6.51615 1.0215C6.6594 0.926052 6.82768 0.875122 6.99982 0.875122C7.17195 0.875122 7.34023 0.926052 7.48348 1.0215C7.62673 1.11694 7.73853 1.25264 7.80482 1.4115L9.07794 4.439L12.3286 4.72064C12.5003 4.73507 12.6639 4.79987 12.7989 4.90691C12.9339 5.01396 13.0343 5.15849 13.0875 5.32237C13.1407 5.48625 13.1444 5.6622 13.098 5.82814C13.0516 5.99408 12.9572 6.14264 12.8268 6.25517H12.824Z" fill="#ED8936" />
															</svg>
															<Text

															>
																FEEBCB:
															</Text>
															<Text ml='auto'>
																325
															</Text>
														</Flex>
													</Box>
												</Flex>
											</Box>
											<Box flex='1 1 0'>
												<Heading
													fontSize='12px'
													color='gray.700'
													fontWeight={700}
													lineHeight='16px'
												>
													7 дней
												</Heading>
												<Flex
													flexDirection='column'
													gap='8px'
													mt='16px'
												>
													<Box
														px='8px'
														py='6px'
														bgColor='#BEE3F8'
														borderRadius='6px'
														width={{ base: '100%', lg: '163px' }}
														sx={{
															"@media (max-width: 650px)": {
																width: '100%',
															}
														}}
													>
														<Flex
															alignItems='center'
															fontSize='12px'
															color='#2A4365'
															fontWeight={500}
															lineHeight='16px'
															gap='6px'>
															<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
																<path d="M13.5248 6.82281C13.5056 6.77961 13.0424 5.75203 12.0127 4.72227C10.6405 3.35016 8.9075 2.625 7 2.625C5.0925 2.625 3.35945 3.35016 1.98734 4.72227C0.957573 5.75203 0.492182 6.78125 0.475229 6.82281C0.450354 6.87876 0.4375 6.93931 0.4375 7.00055C0.4375 7.06178 0.450354 7.12233 0.475229 7.17828C0.49437 7.22148 0.957573 8.24852 1.98734 9.27828C3.35945 10.6498 5.0925 11.375 7 11.375C8.9075 11.375 10.6405 10.6498 12.0127 9.27828C13.0424 8.24852 13.5056 7.22148 13.5248 7.17828C13.5496 7.12233 13.5625 7.06178 13.5625 7.00055C13.5625 6.93931 13.5496 6.87876 13.5248 6.82281ZM7 9.1875C6.56735 9.1875 6.14442 9.05921 5.78469 8.81884C5.42495 8.57847 5.14458 8.23683 4.97901 7.83712C4.81344 7.43741 4.77012 6.99757 4.85453 6.57324C4.93893 6.14891 5.14727 5.75913 5.4532 5.4532C5.75913 5.14728 6.1489 4.93894 6.57324 4.85453C6.99757 4.77013 7.4374 4.81345 7.83712 4.97901C8.23683 5.14458 8.57847 5.42496 8.81884 5.78469C9.0592 6.14442 9.1875 6.56735 9.1875 7C9.1875 7.58016 8.95703 8.13656 8.54679 8.5468C8.13656 8.95703 7.58016 9.1875 7 9.1875Z" fill="#3182CE" />
															</svg>
															<Text

															>
																Просмотры:
															</Text>
															<Text ml='auto'>
																325
															</Text>
														</Flex>
													</Box>
													<Box
														px='8px'
														py='6px'
														bgColor='#EDF2F7'
														borderRadius='6px'
														width={{ base: '100%', lg: '163px' }}
														sx={{
															"@media (max-width: 650px)": {
																width: '100%',
															}
														}}
													>
														<Flex
															alignItems='center'
															fontSize='12px'
															color='#2A4365'
															fontWeight={500}
															lineHeight='16px'
															gap='6px'>
															<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
																<path d="M2.5 1C1.67266 1 1 1.67269 1 2.50006V9.25036C1 10.0777 1.67266 10.7504 2.5 10.7504H4.75V12.6255C4.75 12.7685 4.82969 12.8974 4.95625 12.9607C5.08281 13.024 5.23516 13.0099 5.35 12.9255L8.24922 10.7504H11.5C12.3273 10.7504 13 10.0777 13 9.25036V2.50006C13 1.67269 12.3273 1 11.5 1H2.5Z" fill="#718096" />
															</svg>
															<Text

															>
																Сообщения:
															</Text>
															<Text ml='auto'>
																325
															</Text>
														</Flex>
													</Box>
													<Box
														px='8px'
														py='6px'
														bgColor='#FEEBCB'
														borderRadius='6px'
														width={{ base: '100%', lg: '163px' }}
														sx={{
															"@media (max-width: 650px)": {
																width: '100%',
															}
														}}
													>
														<Flex
															alignItems='center'
															fontSize='12px'
															color='#2A4365'
															fontWeight={500}
															lineHeight='16px'
															gap='6px'>
															<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
																<path d="M12.824 6.25517L10.3576 8.40767L11.0965 11.6124C11.1356 11.7799 11.1244 11.9552 11.0644 12.1165C11.0044 12.2777 10.8982 12.4176 10.759 12.5188C10.6199 12.62 10.454 12.678 10.2822 12.6854C10.1103 12.6928 9.94005 12.6494 9.79271 12.5606L6.99763 10.8653L4.20857 12.5606C4.06122 12.6494 3.89097 12.6928 3.7191 12.6854C3.54723 12.678 3.38136 12.62 3.24224 12.5188C3.10311 12.4176 2.9969 12.2777 2.93689 12.1165C2.87688 11.9552 2.86572 11.7799 2.90482 11.6124L3.64255 8.41095L1.1756 6.25517C1.04512 6.14264 0.950768 5.99408 0.904379 5.82814C0.857989 5.6622 0.861626 5.48625 0.914833 5.32237C0.968039 5.15849 1.06845 5.01396 1.20347 4.90691C1.33848 4.79987 1.5021 4.73507 1.6738 4.72064L4.92552 4.439L6.19482 1.4115C6.2611 1.25264 6.37291 1.11694 6.51615 1.0215C6.6594 0.926052 6.82768 0.875122 6.99982 0.875122C7.17195 0.875122 7.34023 0.926052 7.48348 1.0215C7.62673 1.11694 7.73853 1.25264 7.80482 1.4115L9.07794 4.439L12.3286 4.72064C12.5003 4.73507 12.6639 4.79987 12.7989 4.90691C12.9339 5.01396 13.0343 5.15849 13.0875 5.32237C13.1407 5.48625 13.1444 5.6622 13.098 5.82814C13.0516 5.99408 12.9572 6.14264 12.8268 6.25517H12.824Z" fill="#ED8936" />
															</svg>
															<Text

															>
																FEEBCB:
															</Text>
															<Text ml='auto'>
																325
															</Text>
														</Flex>
													</Box>
												</Flex>
											</Box>
										</Flex>
									</Box>
									<Alert width='100%' bgColor='#FAF5FF' borderRadius='12px' alignItems='start'>
										<AlertIcon color='purple.500' />
										<Box>
											<Heading lineHeight='24px' fontSize='16px'>
												Подключите Яндекс Диск
											</Heading>
											<Text
												lineHeight='140%'
												color='#2D3748'
											>
												Сейчас вы не можете загрузить изображения
											</Text>
										</Box>
									</Alert>

									<Alert width='100%' bgColor='#FAF5FF' borderRadius='12px' alignItems='start'>
										<AlertIcon color='purple.500' />
										<Box>
											<Heading lineHeight='24px' fontSize='16px'>
												Подключите Авито
											</Heading>
											<Text
												lineHeight='140%'
												color='#2D3748'
											>
												Сейчас вы не можете выгружать объявления
											</Text>
										</Box>
									</Alert>
								</Grid>
							</AccordionPanel>
						</AccordionItem>
					</Accordion>
				</Box>
				<Box mt='24px'>
					<Alert
						width='50%'
						status='warning'
						borderRadius='12px'
						alignItems='start'
						sx={{
							"@media (max-width:830px)": {
								width: '100%'
							}
						}}
					>
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
				<Box>
					<Link

					>
						<Button
							width={{ base: '100%', sm: 'auto', md: 'auto', lg: 'auto' }}
							color='white'
							mt='24px'
							bgColor='orange.500'
							_hover={{
								bgColor: 'orange.600',
							}}
						>
							Оплатить аккаунт
						</Button>
					</Link>
				</Box>
			</Box >
		</Box >
	)
}
