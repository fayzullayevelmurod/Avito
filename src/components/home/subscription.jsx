import {
	Flex,
	Box,
	Heading,
	Text,
	Image,
	Grid,
	Table,
	Tr,
	Tbody,
	Td
} from '@chakra-ui/react'
import assets from '../../assets'
import { Link } from 'react-router-dom'

export const Subscription = () => (
	<Box
		mb='144px'
		sx={{
			"@media (max-width:500px)": {
				mb: '80px'
			}
		}}
		className='subscription-section'
	>
		<Flex
			justifyContent='space-between'
			alignItems='center'
			sx={{
				"@media (max-width:900px)": {
					flexDirection: "column",
					alignItems: 'start'
				}
			}}
			mb={{ base: '12px', sm: '40px', md: '44px', lg: '44px' }}
		>
			<Box
				maxWidth='477px'
			>
				<Heading
					fontWeight='700'
					color='#171923'
					lineHeight='120%'
					fontSize={{ base: '22px', sm: '35px', md: '40px', lg: '48px' }}
				>
					Доступные тарифы
					<span className='purple'> Для бизнеса</span>
				</Heading>
			</Box>
			<Box
				maxWidth='440px'
			>
				<Text
					fontSize={{ base: '15px', sm: '16px', md: '18px', lg: '18px' }}
					color='#2D3748'
					lineHeight='150%'
				>
					Выберите наиболее подходящий для вас тариф на сервисе. Стоимость зависит от количества объявлений.
				</Text>
			</Box>
		</Flex>

		{/* {============================================================================================================================================================================================================================================================ } */}

		<Box>
			<Box
				bgColor='#fafafa'
				borderRadius={24}
				py={6} px={8}
			>
				<Flex
					alignItems='center'
					justifyContent='space-between'
					sx={{
						"@media (max-width:960px)": {
							flexDirection: "column",
							alignItems: "start",
							justifyContent: 'space-between',
							width: '100%',
							gap: '16px'

						}
					}}
				>

					<Flex
						width='315px'
						sx={{
							"@media (max-width:960px)": {
								width: '100%',
							}
						}}
					>
						<Flex
							alignItems='center'
							gap='16px'
							sx={{
								"@media (max-width:960px)": {
									justifyContent: 'space-between',
									width: '100%',
								}
							}}
						>
							<Image src={assets.lampIcon} alt='lamp icon'
								sx={{
									"@media (max-width:480px)": {
										order: '1'
									}
								}}
							/>
							<Heading
								fontSize={{ base: '20px', sm: '26px', md: '30px', lg: '30px' }}
								fontWeight='700'
								lineHeight='120%'
								color='#171923'
							>
								Старт
							</Heading>
						</Flex>
					</Flex>

					<Box>
						<Box>
							<Flex
								alignItems='center'
								gap='8px'
							>
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
									<path fillRule="evenodd" clipRule="evenodd" d="M10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM13.707 8.707C13.8892 8.5184 13.99 8.2658 13.9877 8.0036C13.9854 7.7414 13.8802 7.49059 13.6948 7.30518C13.5094 7.11977 13.2586 7.0146 12.9964 7.01233C12.7342 7.01005 12.4816 7.11084 12.293 7.293L9 10.586L7.707 9.293C7.5184 9.11084 7.2658 9.01005 7.0036 9.01233C6.7414 9.0146 6.49059 9.11977 6.30518 9.30518C6.11977 9.49059 6.0146 9.7414 6.01233 10.0036C6.01005 10.2658 6.11084 10.5184 6.293 10.707L8.293 12.707C8.48053 12.8945 8.73484 12.9998 9 12.9998C9.26516 12.9998 9.51947 12.8945 9.707 12.707L13.707 8.707Z" fill="#ED8936" />
								</svg>
								<Text
									fontSize={{ base: '15px', md: '16px', lg: '16px' }}
									lineHeight='140%'
									whiteSpace='nowrap'
									color='#2D3748'
								>
									Выгрузка до 100 объявлений
								</Text>
							</Flex>
						</Box>
						<Box mt='8px'>
							<Flex
								alignItems='center'
								gap='8px'
							>
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
									<path fillRule="evenodd" clipRule="evenodd" d="M10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM13.707 8.707C13.8892 8.5184 13.99 8.2658 13.9877 8.0036C13.9854 7.7414 13.8802 7.49059 13.6948 7.30518C13.5094 7.11977 13.2586 7.0146 12.9964 7.01233C12.7342 7.01005 12.4816 7.11084 12.293 7.293L9 10.586L7.707 9.293C7.5184 9.11084 7.2658 9.01005 7.0036 9.01233C6.7414 9.0146 6.49059 9.11977 6.30518 9.30518C6.11977 9.49059 6.0146 9.7414 6.01233 10.0036C6.01005 10.2658 6.11084 10.5184 6.293 10.707L8.293 12.707C8.48053 12.8945 8.73484 12.9998 9 12.9998C9.26516 12.9998 9.51947 12.8945 9.707 12.707L13.707 8.707Z" fill="#ED8936" />
								</svg>
								<Text
									fontSize={{ base: '15px', md: '16px', lg: '16px' }}
									lineHeight='140%'
									whiteSpace='nowrap'
									color='#2D3748'
								>
									Выгрузка до 100 объявлений
								</Text>
							</Flex>
						</Box>
					</Box>

					<Box>
						<Heading
							fontSize={{ base: '18px', sm: '25px', md: '28px', lg: '28px' }}
							fontWeight='600'
							lineHeight='120%'
							color='#171923'
						>
							Бесплатно
						</Heading>
					</Box>

					<Box
						sx={{
							"@media (max-width:480px)": {
								width: '100%',
							}
						}}
					>
						<Link to='#!' className='outline-link-button' style={{ paddingLeft: '24px', paddingRight: '24px' }}>
							Начать
						</Link>
					</Box>

				</Flex>
			</Box>
			<Box
				bgColor='#fafafa'
				borderRadius={24}
				py={6} px={8}
			>
				<Flex
					alignItems='center'
					justifyContent='space-between'
					sx={{
						"@media (max-width:960px)": {
							flexDirection: "column",
							alignItems: "start",
							justifyContent: 'space-between',
							width: '100%',
							gap: '16px'

						}
					}}
				>

					<Flex
						width='315px'
						sx={{
							"@media (max-width:960px)": {
								width: '100%',
							}
						}}
					>
						<Flex
							alignItems='center'
							gap='16px'
							sx={{
								"@media (max-width:960px)": {
									justifyContent: 'space-between',
									width: '100%',
								}
							}}
						>
							<Image src={assets.lampIcon} alt='lamp icon'
								sx={{
									"@media (max-width:480px)": {
										order: '1'
									}
								}}
							/>
							<Heading
								fontSize={{ base: '20px', sm: '26px', md: '30px', lg: '30px' }}
								fontWeight='700'
								lineHeight='120%'
								color='#171923'
							>
								Старт
							</Heading>
						</Flex>
					</Flex>

					<Box>
						<Box>
							<Flex
								alignItems='center'
								gap='8px'
							>
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
									<path fillRule="evenodd" clipRule="evenodd" d="M10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM13.707 8.707C13.8892 8.5184 13.99 8.2658 13.9877 8.0036C13.9854 7.7414 13.8802 7.49059 13.6948 7.30518C13.5094 7.11977 13.2586 7.0146 12.9964 7.01233C12.7342 7.01005 12.4816 7.11084 12.293 7.293L9 10.586L7.707 9.293C7.5184 9.11084 7.2658 9.01005 7.0036 9.01233C6.7414 9.0146 6.49059 9.11977 6.30518 9.30518C6.11977 9.49059 6.0146 9.7414 6.01233 10.0036C6.01005 10.2658 6.11084 10.5184 6.293 10.707L8.293 12.707C8.48053 12.8945 8.73484 12.9998 9 12.9998C9.26516 12.9998 9.51947 12.8945 9.707 12.707L13.707 8.707Z" fill="#ED8936" />
								</svg>
								<Text
									fontSize={{ base: '15px', md: '16px', lg: '16px' }}
									lineHeight='140%'
									whiteSpace='nowrap'
									color='#2D3748'
								>
									Выгрузка до 100 объявлений
								</Text>
							</Flex>
						</Box>
						<Box mt='8px'>
							<Flex
								alignItems='center'
								gap='8px'
							>
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
									<path fillRule="evenodd" clipRule="evenodd" d="M10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM13.707 8.707C13.8892 8.5184 13.99 8.2658 13.9877 8.0036C13.9854 7.7414 13.8802 7.49059 13.6948 7.30518C13.5094 7.11977 13.2586 7.0146 12.9964 7.01233C12.7342 7.01005 12.4816 7.11084 12.293 7.293L9 10.586L7.707 9.293C7.5184 9.11084 7.2658 9.01005 7.0036 9.01233C6.7414 9.0146 6.49059 9.11977 6.30518 9.30518C6.11977 9.49059 6.0146 9.7414 6.01233 10.0036C6.01005 10.2658 6.11084 10.5184 6.293 10.707L8.293 12.707C8.48053 12.8945 8.73484 12.9998 9 12.9998C9.26516 12.9998 9.51947 12.8945 9.707 12.707L13.707 8.707Z" fill="#ED8936" />
								</svg>
								<Text
									fontSize={{ base: '15px', md: '16px', lg: '16px' }}
									lineHeight='140%'
									whiteSpace='nowrap'
									color='#2D3748'
								>
									Выгрузка до 100 объявлений
								</Text>
							</Flex>
						</Box>
					</Box>

					<Box>
						<Heading
							fontSize={{ base: '18px', sm: '25px', md: '28px', lg: '28px' }}
							fontWeight='600'
							lineHeight='120%'
							color='#171923'
						>
							Бесплатно
						</Heading>
					</Box>

					<Box
						sx={{
							"@media (max-width:480px)": {
								width: '100%',
							}
						}}
					>
						<Link to='#!' className='outline-link-button' style={{ paddingLeft: '24px', paddingRight: '24px' }}>
							Начать
						</Link>
					</Box>

				</Flex>
			</Box>
			<Box
				bgColor='#fafafa'
				borderRadius={24}
				py={6} px={8}
			>
				<Flex
					alignItems='center'
					justifyContent='space-between'
					sx={{
						"@media (max-width:960px)": {
							flexDirection: "column",
							alignItems: "start",
							justifyContent: 'space-between',
							width: '100%',
							gap: '16px'

						}
					}}
				>

					<Flex
						width='315px'
						sx={{
							"@media (max-width:960px)": {
								width: '100%',
							}
						}}
					>
						<Flex
							alignItems='center'
							gap='16px'
							sx={{
								"@media (max-width:960px)": {
									justifyContent: 'space-between',
									width: '100%',
								}
							}}
						>
							<Image src={assets.lampIcon} alt='lamp icon'
								sx={{
									"@media (max-width:480px)": {
										order: '1'
									}
								}}
							/>
							<Heading
								fontSize={{ base: '20px', sm: '26px', md: '30px', lg: '30px' }}
								fontWeight='700'
								lineHeight='120%'
								color='#171923'
							>
								Старт
							</Heading>
						</Flex>
					</Flex>

					<Box>
						<Box>
							<Flex
								alignItems='center'
								gap='8px'
							>
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
									<path fillRule="evenodd" clipRule="evenodd" d="M10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM13.707 8.707C13.8892 8.5184 13.99 8.2658 13.9877 8.0036C13.9854 7.7414 13.8802 7.49059 13.6948 7.30518C13.5094 7.11977 13.2586 7.0146 12.9964 7.01233C12.7342 7.01005 12.4816 7.11084 12.293 7.293L9 10.586L7.707 9.293C7.5184 9.11084 7.2658 9.01005 7.0036 9.01233C6.7414 9.0146 6.49059 9.11977 6.30518 9.30518C6.11977 9.49059 6.0146 9.7414 6.01233 10.0036C6.01005 10.2658 6.11084 10.5184 6.293 10.707L8.293 12.707C8.48053 12.8945 8.73484 12.9998 9 12.9998C9.26516 12.9998 9.51947 12.8945 9.707 12.707L13.707 8.707Z" fill="#ED8936" />
								</svg>
								<Text
									fontSize={{ base: '15px', md: '16px', lg: '16px' }}
									lineHeight='140%'
									whiteSpace='nowrap'
									color='#2D3748'
								>
									Выгрузка до 100 объявлений
								</Text>
							</Flex>
						</Box>
						<Box mt='8px'>
							<Flex
								alignItems='center'
								gap='8px'
							>
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
									<path fillRule="evenodd" clipRule="evenodd" d="M10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM13.707 8.707C13.8892 8.5184 13.99 8.2658 13.9877 8.0036C13.9854 7.7414 13.8802 7.49059 13.6948 7.30518C13.5094 7.11977 13.2586 7.0146 12.9964 7.01233C12.7342 7.01005 12.4816 7.11084 12.293 7.293L9 10.586L7.707 9.293C7.5184 9.11084 7.2658 9.01005 7.0036 9.01233C6.7414 9.0146 6.49059 9.11977 6.30518 9.30518C6.11977 9.49059 6.0146 9.7414 6.01233 10.0036C6.01005 10.2658 6.11084 10.5184 6.293 10.707L8.293 12.707C8.48053 12.8945 8.73484 12.9998 9 12.9998C9.26516 12.9998 9.51947 12.8945 9.707 12.707L13.707 8.707Z" fill="#ED8936" />
								</svg>
								<Text
									fontSize={{ base: '15px', md: '16px', lg: '16px' }}
									lineHeight='140%'
									whiteSpace='nowrap'
									color='#2D3748'
								>
									Выгрузка до 100 объявлений
								</Text>
							</Flex>
						</Box>
					</Box>

					<Box>
						<Heading
							fontSize={{ base: '18px', sm: '25px', md: '28px', lg: '28px' }}
							fontWeight='600'
							lineHeight='120%'
							color='#171923'
						>
							Бесплатно
						</Heading>
					</Box>

					<Box
						sx={{
							"@media (max-width:480px)": {
								width: '100%',
							}
						}}
					>
						<Link to='#!' className='outline-link-button' style={{ paddingLeft: '24px', paddingRight: '24px' }}>
							Начать
						</Link>
					</Box>

				</Flex>
			</Box>
			<Box
				bgColor='#fafafa'
				borderRadius={24}
				py={6} px={8}
			>
				<Flex
					alignItems='center'
					justifyContent='space-between'
					sx={{
						"@media (max-width:960px)": {
							flexDirection: "column",
							alignItems: "start",
							justifyContent: 'space-between',
							width: '100%',
							gap: '16px'

						}
					}}
				>

					<Flex
						width='315px'
						sx={{
							"@media (max-width:960px)": {
								width: '100%',
							}
						}}
					>
						<Flex
							alignItems='center'
							gap='16px'
							sx={{
								"@media (max-width:960px)": {
									justifyContent: 'space-between',
									width: '100%',
								}
							}}
						>
							<Image src={assets.lampIcon} alt='lamp icon'
								sx={{
									"@media (max-width:480px)": {
										order: '1'
									}
								}}
							/>
							<Heading
								fontSize={{ base: '20px', sm: '26px', md: '30px', lg: '30px' }}
								fontWeight='700'
								lineHeight='120%'
								color='#171923'
							>
								Старт
							</Heading>
						</Flex>
					</Flex>

					<Box>
						<Box>
							<Flex
								alignItems='center'
								gap='8px'
							>
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
									<path fillRule="evenodd" clipRule="evenodd" d="M10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM13.707 8.707C13.8892 8.5184 13.99 8.2658 13.9877 8.0036C13.9854 7.7414 13.8802 7.49059 13.6948 7.30518C13.5094 7.11977 13.2586 7.0146 12.9964 7.01233C12.7342 7.01005 12.4816 7.11084 12.293 7.293L9 10.586L7.707 9.293C7.5184 9.11084 7.2658 9.01005 7.0036 9.01233C6.7414 9.0146 6.49059 9.11977 6.30518 9.30518C6.11977 9.49059 6.0146 9.7414 6.01233 10.0036C6.01005 10.2658 6.11084 10.5184 6.293 10.707L8.293 12.707C8.48053 12.8945 8.73484 12.9998 9 12.9998C9.26516 12.9998 9.51947 12.8945 9.707 12.707L13.707 8.707Z" fill="#ED8936" />
								</svg>
								<Text
									fontSize={{ base: '15px', md: '16px', lg: '16px' }}
									lineHeight='140%'
									whiteSpace='nowrap'
									color='#2D3748'
								>
									Выгрузка до 100 объявлений
								</Text>
							</Flex>
						</Box>
						<Box mt='8px'>
							<Flex
								alignItems='center'
								gap='8px'
							>
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
									<path fillRule="evenodd" clipRule="evenodd" d="M10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM13.707 8.707C13.8892 8.5184 13.99 8.2658 13.9877 8.0036C13.9854 7.7414 13.8802 7.49059 13.6948 7.30518C13.5094 7.11977 13.2586 7.0146 12.9964 7.01233C12.7342 7.01005 12.4816 7.11084 12.293 7.293L9 10.586L7.707 9.293C7.5184 9.11084 7.2658 9.01005 7.0036 9.01233C6.7414 9.0146 6.49059 9.11977 6.30518 9.30518C6.11977 9.49059 6.0146 9.7414 6.01233 10.0036C6.01005 10.2658 6.11084 10.5184 6.293 10.707L8.293 12.707C8.48053 12.8945 8.73484 12.9998 9 12.9998C9.26516 12.9998 9.51947 12.8945 9.707 12.707L13.707 8.707Z" fill="#ED8936" />
								</svg>
								<Text
									fontSize={{ base: '15px', md: '16px', lg: '16px' }}
									lineHeight='140%'
									whiteSpace='nowrap'
									color='#2D3748'
								>
									Выгрузка до 100 объявлений
								</Text>
							</Flex>
						</Box>
					</Box>

					<Box>
						<Heading
							fontSize={{ base: '18px', sm: '25px', md: '28px', lg: '28px' }}
							fontWeight='600'
							lineHeight='120%'
							color='#171923'
						>
							Бесплатно
						</Heading>
					</Box>

					<Box
						sx={{
							"@media (max-width:480px)": {
								width: '100%',
							}
						}}
					>
						<Link to='#!' className='outline-link-button' style={{ paddingLeft: '24px', paddingRight: '24px' }}>
							Начать
						</Link>
					</Box>

				</Flex>
			</Box>
		</Box>
		{/* 
		<Table mt='44px' mb='144px'>
			<Tbody>
				<Tr
					mt={6} bgColor='#FAFAFA'
					borderRadius={24}
				>
					<Td borderTopLeftRadius={26} borderBottomLeftRadius={26} border={0} py={6} px={8} >

					</Td>
					<Td py={6} px={8} border={0}>

					</Td>
					<Td py={6} px={8} border={0}>

					</Td>
					<Td borderTopRightRadius={26} borderBottomRightRadius={26} border={0} py={6} px={8} 
								sx={{
									"@media (max-width:480px)": {
										width:'100%',
									}
								}}
					>
						<Link to='#!' className='outline-link-button' style={{ paddingLeft: '24px', paddingRight: '24px' }}>
							Начать
						</Link>
					</Td>
				</Tr>
				<Tr
					mt={6} bgColor='#FAFAFA'
					borderRadius={24}
				>
					<Td borderTopLeftRadius={26} borderBottomLeftRadius={26} border={0} py={6} px={8} >
						<Flex
							alignItems='center'
							gap='16px'
						>
							<Image src={assets.fastIcon} alt='lamp icon' />
							<Heading
								fontSize='30px'
								fontWeight='700'
								lineHeight='120%'
								color='#171923'
							>
								5.000 объявлений
							</Heading>
						</Flex>
					</Td>
					<Td py={6} px={8} border={0}>
						<Box>
							<Box>
								<Flex
									alignItems='center'
									gap='8px'
								>
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
										<path fillRule="evenodd" clipRule="evenodd" d="M10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM13.707 8.707C13.8892 8.5184 13.99 8.2658 13.9877 8.0036C13.9854 7.7414 13.8802 7.49059 13.6948 7.30518C13.5094 7.11977 13.2586 7.0146 12.9964 7.01233C12.7342 7.01005 12.4816 7.11084 12.293 7.293L9 10.586L7.707 9.293C7.5184 9.11084 7.2658 9.01005 7.0036 9.01233C6.7414 9.0146 6.49059 9.11977 6.30518 9.30518C6.11977 9.49059 6.0146 9.7414 6.01233 10.0036C6.01005 10.2658 6.11084 10.5184 6.293 10.707L8.293 12.707C8.48053 12.8945 8.73484 12.9998 9 12.9998C9.26516 12.9998 9.51947 12.8945 9.707 12.707L13.707 8.707Z" fill="#4FD1C5" />
									</svg>
									<Text
										fontSize='16px'
										lineHeight='140%'
										whiteSpace='nowrap'
										color='#2D3748'
									>
										Все возможности сервиса
									</Text>
								</Flex>
							</Box>
							<Box mt='8px'>
								<Flex
									alignItems='center'
									gap='8px'
								>
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
										<path fillRule="evenodd" clipRule="evenodd" d="M10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM13.707 8.707C13.8892 8.5184 13.99 8.2658 13.9877 8.0036C13.9854 7.7414 13.8802 7.49059 13.6948 7.30518C13.5094 7.11977 13.2586 7.0146 12.9964 7.01233C12.7342 7.01005 12.4816 7.11084 12.293 7.293L9 10.586L7.707 9.293C7.5184 9.11084 7.2658 9.01005 7.0036 9.01233C6.7414 9.0146 6.49059 9.11977 6.30518 9.30518C6.11977 9.49059 6.0146 9.7414 6.01233 10.0036C6.01005 10.2658 6.11084 10.5184 6.293 10.707L8.293 12.707C8.48053 12.8945 8.73484 12.9998 9 12.9998C9.26516 12.9998 9.51947 12.8945 9.707 12.707L13.707 8.707Z" fill="#4FD1C5" />
									</svg>
									<Text
										fontSize='16px'
										lineHeight='140%'
										whiteSpace='nowrap'
										color='#2D3748'
									>
										Выгрузка до 1000 объявлений
									</Text>
								</Flex>
							</Box>
							<Box mt='8px'>
								<Flex
									alignItems='center'
									gap='8px'
								>
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
										<path fillRule="evenodd" clipRule="evenodd" d="M10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM13.707 8.707C13.8892 8.5184 13.99 8.2658 13.9877 8.0036C13.9854 7.7414 13.8802 7.49059 13.6948 7.30518C13.5094 7.11977 13.2586 7.0146 12.9964 7.01233C12.7342 7.01005 12.4816 7.11084 12.293 7.293L9 10.586L7.707 9.293C7.5184 9.11084 7.2658 9.01005 7.0036 9.01233C6.7414 9.0146 6.49059 9.11977 6.30518 9.30518C6.11977 9.49059 6.0146 9.7414 6.01233 10.0036C6.01005 10.2658 6.11084 10.5184 6.293 10.707L8.293 12.707C8.48053 12.8945 8.73484 12.9998 9 12.9998C9.26516 12.9998 9.51947 12.8945 9.707 12.707L13.707 8.707Z" fill="#4FD1C5" />
									</svg>
									<Text
										fontSize='16px'
										lineHeight='140%'
										whiteSpace='nowrap'
										color='#2D3748'
									>
										Срок действия 30 дней
									</Text>
								</Flex>
							</Box>
						</Box>
					</Td>
					<Td py={6} px={8} border={0}>
						<Box>
							<Heading
								fontSize='28px'
								fontWeight='600'
								lineHeight='120%'
								color='#171923'
							>
								1490 ₽
							</Heading>
						</Box>
					</Td>
					<Td borderTopRightRadius={26} borderBottomRightRadius={26} border={0} py={6} px={8} 
								sx={{
									"@media (max-width:480px)": {
										width:'100%',
									}
								}}
					>
						<Link to='#!' className='outline-link-button' style={{ paddingLeft: '24px', paddingRight: '24px' }}>
							Начать
						</Link>
					</Td>
				</Tr>
				<Tr
					mt={6} bgColor='#FAFAFA'
					borderRadius={24}
				>
					<Td borderTopLeftRadius={26} borderBottomLeftRadius={26} border={0} py={6} px={8} >
						<Flex
							alignItems='center'
							gap='16px'
						>
							<Image src={assets.raketaIcon} alt='lamp icon' />
							<Heading
								fontSize='30px'
								fontWeight='700'
								lineHeight='120%'
								color='#171923'
							>
								10.000 объявлений
							</Heading>
						</Flex>
					</Td>
					<Td py={6} px={8} border={0}>

					</Td>
					<Td py={6} px={8} border={0}>
						<Box>
							<Heading
								fontSize='28px'
								fontWeight='600'
								lineHeight='120%'
								color='#171923'
							>
								1490 ₽
							</Heading>
						</Box>
					</Td>
					<Td borderTopRightRadius={26} borderBottomRightRadius={26} border={0} py={6} px={8} 
								sx={{
									"@media (max-width:480px)": {
										width:'100%',
									}
								}}
					>
						<Link to='#!' className='outline-link-button' style={{ paddingLeft: '24px', paddingRight: '24px' }}>
							Начать
						</Link>
					</Td>
				</Tr>
				<Tr
					mt={6} bgColor='#FAFAFA'
					borderRadius={24}
				>
					<Td borderTopLeftRadius={26} borderBottomLeftRadius={26} border={0} py={6} px={8} >
						<Flex
							alignItems='center'
							gap='16px'
						>
							<Image src={assets.starsGroup} alt='lamp icon' />
							<Heading
								fontSize='30px'
								fontWeight='700'
								lineHeight='120%'
								color='#171923'
							>
								Безлимит
							</Heading>
						</Flex>
					</Td>
					<Td py={6} px={8} border={0}>
						<Box>
							<Box>
								<Flex
									alignItems='center'
									gap='8px'
								>
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
										<path fillRule="evenodd" clipRule="evenodd" d="M10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM13.707 8.707C13.8892 8.5184 13.99 8.2658 13.9877 8.0036C13.9854 7.7414 13.8802 7.49059 13.6948 7.30518C13.5094 7.11977 13.2586 7.0146 12.9964 7.01233C12.7342 7.01005 12.4816 7.11084 12.293 7.293L9 10.586L7.707 9.293C7.5184 9.11084 7.2658 9.01005 7.0036 9.01233C6.7414 9.0146 6.49059 9.11977 6.30518 9.30518C6.11977 9.49059 6.0146 9.7414 6.01233 10.0036C6.01005 10.2658 6.11084 10.5184 6.293 10.707L8.293 12.707C8.48053 12.8945 8.73484 12.9998 9 12.9998C9.26516 12.9998 9.51947 12.8945 9.707 12.707L13.707 8.707Z" fill="#4FD1C5" />
									</svg>
									<Text
										fontSize='16px'
										lineHeight='140%'
										whiteSpace='nowrap'
										color='#2D3748'
									>
										Все возможности сервиса
									</Text>
								</Flex>
							</Box>
							<Box mt='8px'>
								<Flex
									alignItems='center'
									gap='8px'
								>
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
										<path fillRule="evenodd" clipRule="evenodd" d="M10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM13.707 8.707C13.8892 8.5184 13.99 8.2658 13.9877 8.0036C13.9854 7.7414 13.8802 7.49059 13.6948 7.30518C13.5094 7.11977 13.2586 7.0146 12.9964 7.01233C12.7342 7.01005 12.4816 7.11084 12.293 7.293L9 10.586L7.707 9.293C7.5184 9.11084 7.2658 9.01005 7.0036 9.01233C6.7414 9.0146 6.49059 9.11977 6.30518 9.30518C6.11977 9.49059 6.0146 9.7414 6.01233 10.0036C6.01005 10.2658 6.11084 10.5184 6.293 10.707L8.293 12.707C8.48053 12.8945 8.73484 12.9998 9 12.9998C9.26516 12.9998 9.51947 12.8945 9.707 12.707L13.707 8.707Z" fill="#4FD1C5" />
									</svg>
									<Text
										fontSize='16px'
										lineHeight='140%'
										whiteSpace='nowrap'
										color='#2D3748'
									>
										Безлимит на выгрузку
									</Text>
								</Flex>
							</Box>
							<Box mt='8px'>
								<Flex
									alignItems='center'
									gap='8px'
								>
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
										<path fillRule="evenodd" clipRule="evenodd" d="M10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM13.707 8.707C13.8892 8.5184 13.99 8.2658 13.9877 8.0036C13.9854 7.7414 13.8802 7.49059 13.6948 7.30518C13.5094 7.11977 13.2586 7.0146 12.9964 7.01233C12.7342 7.01005 12.4816 7.11084 12.293 7.293L9 10.586L7.707 9.293C7.5184 9.11084 7.2658 9.01005 7.0036 9.01233C6.7414 9.0146 6.49059 9.11977 6.30518 9.30518C6.11977 9.49059 6.0146 9.7414 6.01233 10.0036C6.01005 10.2658 6.11084 10.5184 6.293 10.707L8.293 12.707C8.48053 12.8945 8.73484 12.9998 9 12.9998C9.26516 12.9998 9.51947 12.8945 9.707 12.707L13.707 8.707Z" fill="#4FD1C5" />
									</svg>
									<Text
										fontSize='16px'
										lineHeight='140%'
										whiteSpace='nowrap'
										color='#2D3748'
									>
										Срок действия 7 дней
									</Text>
								</Flex>
							</Box>
						</Box>
					</Td>
					<Td py={6} px={8} border={0}>
						<Box>
							<Heading
								fontSize='28px'
								fontWeight='600'
								lineHeight='120%'
								color='#171923'
							>
								1490 ₽
							</Heading>
						</Box>
					</Td>
					<Td borderTopRightRadius={26} borderBottomRightRadius={26} border={0} py={6} px={8} 
								sx={{
									"@media (max-width:480px)": {
										width:'100%',
									}
								}}
					>
						<Link to='#!' className='outline-link-button' style={{ paddingLeft: '24px', paddingRight: '24px' }}>
							Начать
						</Link>
					</Td>
				</Tr>
			</Tbody>
		</Table> */}

		{/* {============================================================================================================================================================================================================================================================ } */}
		<Grid
			gap='30px'
			templateColumns='repeat(2, 1fr)'
			sx={{
				"@media (max-width:1000px)": {
					display: 'flex',
					flexDirection: 'column',
				}
			}}
			mt='80px'
		>
			<Box
				bgColor='purple.500'
				p='40px'
				borderRadius={32}
				bgImage={assets.subScripImg}
				bgSize='100% 100%'
				bgPosition='top right'
				bgRepeat='no-repeat'
				sx={{
					"@media (max-width:480px)": {
						p: '20px',
						borderRadius: '20px'
					}
				}}
			>
				<Heading
					fontSize={{ base: '18px', sm: '25px', md: '28px', lg: '28px' }}
					fontWeight='700'
					color='#fff'
					lineHeight='120%'
				>
					Попробуй — бесплатно
				</Heading>
				<Text
					color='#fff'
					fontSize={{ se: '18px', sm: '25px', md: '28px', lg: '28' }}
					lineHeight='150%'
					mt='16px'
					mb='28px'
				>
					Создайте свой первый аккаунт и вы получите 7 дней бесплатного доступа к сервису.
				</Text>
				<Link to='#!' className='link-button' style={{ backgroundColor: 'white', color: '#805AD5' }}>
					Начать сейчас
				</Link>
			</Box>
			<Flex
				bgColor='#FAFAFA'
				p='40px'
				borderRadius={32}
				bgImage={assets.subScripImg}
				bgPosition='top right'
				bgRepeat='no-repeat'
				position='relative'
				overflow='hidden'
				sx={{
					"@media (max-width:1000px)": {
						order: '-1'
					},
					"@media (max-width:480px)": {
						p: '20px',
						borderRadius: '20px'
					}
				}}
			>
				<Box>
					<Heading
						fontSize='24px'
						fontWeight='700'
						color='#171923'
						lineHeight='120%'
					>
						Поддержка
					</Heading>
					<Text
						fontSize='18px'
						color='#2D3748'
						lineHeight='150%'
						mt='16px'
						mb='28px'
					>
						Мы на связи, напишите нам, с радостью ответим на все ваши вопросы.
					</Text>
					<Link to='#!' className='outline-link-button' style={{ paddingLeft: '24px', paddingRight: '24px' }}>
						Видео-инструкции
					</Link>
				</Box>
				<Box
					sx={{
						"@media (max-width:500px)": {
							position: 'absolute',
							top: '-75px',
							right: '-75px'
						}
					}}
				>
					<Image src={assets.ballon} width='200px' height='150px' />
				</Box>
			</Flex>
		</Grid>
	</Box>
)