import {
	Flex,
	Box,
	Heading,
	Text,
	Button,
	Grid,
	Image,
} from '@chakra-ui/react'
import assets from '../../assets'
import { Link } from 'react-router-dom'

export const VideoInstructions = () => {
	return (
		<Box pb={{ base: '80px', sm: '144px', md: '144px', lg: '144px' }}>
			<Heading
				fontSize={{ base: '22px', sm: '35px', md: '40px', lg: '48px' }}
				fontWeight='700'
				color='#171923'
				lineHeight='120%'
				p='44px 0 32px 0'
			>
				Видео-инструкции
			</Heading>
			<Flex
				alignItems='center'
				gap='40px'
			>
				<Box
					bgColor='#fff'
					borderRadius='32px'
					p='24px'
					width='100%'
				>
					<Flex
						gap={{ base: '28px', sm: '40px', md: '40px', lg: '40px' }}
						flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
						alignItems={{ base: 'center', lg: 'auto' }}
					>
						<Image
							src={assets.purpleBallon}
							width={{ base: '75px', sm: '151px', md: '151px', lg: '151px' }}
							height={{ base: '75px', sm: '150px', md: '150px', lg: '150px' }}
						/>
						<Box flex='1 1 0'>
							<Heading
								fontSize={{ base: '20px', md: '24px', lg: '24px' }}
								fontWeight={700}
								lineHeight='120%'
								color='#171923'
							>
								Поддержка
							</Heading>
							<Text
								fontSize={{ base: '15px', sm: '18px', md: '18px', lg: '18px' }}
								lineHeight='150%'
								color='#2D3748'
								m={{ base: '12px 0 20px 0', sm: '16px 0 28px 0', md: '16px 0 28px 0', lg: '16px 0 28px 0' }}
							>
								Мы на связи, напишите нам, с радостью ответим на все ваши вопросы.
							</Text>
							<Link to='https://t.me/avito_plus_help'>
								<Button
									colorScheme='purple'
									variant='outline'
									fontSize='18px'
									lineHeight='28px'
									width={{ base: '100%', md: 'auto', lg: 'auto' }}
									_hover={{
										bgColor: 'purple.500',
										color: 'white'
									}}
								>
									Спросить поддержку
								</Button>
							</Link>
						</Box>
						<Box
							p='9px'
							bgColor='#fafafa'
							borderRadius='9px'
							width='fit-content'
						>
							<Image src={assets.avitoQrCode} width={{ base: '117px', lg: 'auto' }} />
						</Box>
					</Flex>
				</Box>
			</Flex >

			<Flex flexDirection={{ base: 'column', md: 'row', lg: 'row' }} mt='40px' gap='20px'>
				<Box
					maxWidth={{ base: '100%', md: '299px', lg: '407px' }}
					width='100%'
				>
					<Box
						bgColor='#fff'
						borderRadius='12px'
						p={{ base: '16px', sm: '20px', md: '24px', lg: '24px' }}
					>
						<Text
							fontWeight={500}
							lineHeight='120%'
							color='#171923'
						>
							Содержание
						</Text>
						<Flex gap='8px' flexDirection='column' mt='12px'>
							<Box
								p='8px 16px'
								bgColor='#fafafa'
								borderRadius='8px'
								transition='all 0.1s linear'
								fontSize='14px'
								fontWeight='500'
								cursor='pointer'
								_hover={{
									bgColor: 'purple.500',
									color: 'white'
								}}
							>
								Моя первая статья на сайте авито плюс
							</Box>
							<Box
								p='8px 16px'
								bgColor='#fafafa'
								borderRadius='8px'
								transition='all 0.1s linear'
								fontSize='14px'
								fontWeight='500'
								cursor='pointer'
								_hover={{
									bgColor: 'purple.500',
									color: 'white'
								}}
							>
								Моя первая статья на сайте авито плюс
							</Box>
							<Box
								p='8px 16px'
								bgColor='#fafafa'
								borderRadius='8px'
								transition='all 0.1s linear'
								fontSize='14px'
								fontWeight='500'
								cursor='pointer'
								_hover={{
									bgColor: 'purple.500',
									color: 'white'
								}}
							>
								Моя первая статья на сайте авито плюс
							</Box>
							<Box
								p='8px 16px'
								bgColor='#fafafa'
								borderRadius='8px'
								transition='all 0.1s linear'
								fontSize='14px'
								fontWeight='500'
								cursor='pointer'
								_hover={{
									bgColor: 'purple.500',
									color: 'white'
								}}
							>
								Моя первая статья на сайте авито плюс
							</Box>
							<Box
								p='8px 16px'
								bgColor='#fafafa'
								borderRadius='8px'
								transition='all 0.1s linear'
								fontSize='14px'
								fontWeight='500'
								cursor='pointer'
								_hover={{
									bgColor: 'purple.500',
									color: 'white'
								}}
							>
								Моя первая статья на сайте авито плюс
							</Box>
							<Box
								p='8px 16px'
								bgColor='#fafafa'
								borderRadius='8px'
								transition='all 0.1s linear'
								fontSize='14px'
								fontWeight='500'
								cursor='pointer'
								_hover={{
									bgColor: 'purple.500',
									color: 'white'
								}}
							>
								Моя первая статья на сайте авито плюс
							</Box>
							<Box
								p='8px 16px'
								bgColor='#fafafa'
								borderRadius='8px'
								transition='all 0.1s linear'
								fontSize='14px'
								fontWeight='500'
								cursor='pointer'
								_hover={{
									bgColor: 'purple.500',
									color: 'white'
								}}
							>
								Моя первая статья на сайте авито плюс
							</Box>
						</Flex>
					</Box>
				</Box>
				<Flex width='100%' flexDirection='column' gap='20px'>
					<Box
						bgColor='#fff'
						borderRadius='12px'
						p={{ base: '16px', sm: '20px', md: '24px', lg: '24px' }}
						width='100%'
					>
						<Heading
							fontWeight={700}
							lineHeight='120%'
							color='#171923'
							fontSize='20px'
						>
							Как продавать больше на Авито
						</Heading>
						<Text
							lineHeight='150%'
							color='#171923'
							m={{ base: '12px 0 16px 0', sm: '12px 0 24px 0', md: '12px 0 24px 0', lg: '12px 0 24px 0' }}
							fontSize={{ base: '15px', sm: '16px', md: '16px', lg: '16px' }}
						>
							Мы на связи, напишите нам, с радостью ответим на все ваши вопросы.
						</Text>
						<Box
							height={{ base: '180px', sm: '250px', md: '319px', lg: '319px' }}
						>
							<iframe
								width='100%'
								height='100%'
								style={{ borderRadius: '20px' }}
								src='https://www.youtube.com/embed/vhnFVeRGlCc?si=srdoZ6H0Ng8iXYOT'
							/>
						</Box>
					</Box>

					<Box
						bgColor='#fff'
						borderRadius='12px'
						p={{ base: '16px', sm: '20px', md: '24px', lg: '24px' }}
						width='100%'
					>
						<Heading
							fontWeight={700}
							lineHeight='120%'
							color='#171923'
							fontSize='20px'
						>
							Как продавать больше на Авито
						</Heading>
						<Text
							lineHeight='150%'
							color='#171923'
							m={{ base: '12px 0 16px 0', sm: '12px 0 24px 0', md: '12px 0 24px 0', lg: '12px 0 24px 0' }}
							fontSize={{ base: '15px', sm: '16px', md: '16px', lg: '16px' }}
						>
							Мы на связи, напишите нам, с радостью ответим на все ваши вопросы.
						</Text>
						<Box
							height={{ base: '180px', sm: '250px', md: '319px', lg: '319px' }}
						>
							<iframe
								width='100%'
								height='100%'
								style={{ borderRadius: '20px' }}
								src='https://www.youtube.com/embed/vhnFVeRGlCc?si=srdoZ6H0Ng8iXYOT'
							/>
						</Box>
					</Box>

					<Box
						bgColor='#fff'
						borderRadius='12px'
						p={{ base: '16px', sm: '20px', md: '24px', lg: '24px' }}
						width='100%'
					>
						<Heading
							fontWeight={700}
							lineHeight='120%'
							color='#171923'
							fontSize='20px'
						>
							Как продавать больше на Авито
						</Heading>
						<Text
							lineHeight='150%'
							color='#171923'
							m={{ base: '12px 0 16px 0', sm: '12px 0 24px 0', md: '12px 0 24px 0', lg: '12px 0 24px 0' }}
							fontSize={{ base: '15px', sm: '16px', md: '16px', lg: '16px' }}
						>
							Мы на связи, напишите нам, с радостью ответим на все ваши вопросы.
						</Text>
						<Box
							height={{ base: '180px', sm: '250px', md: '319px', lg: '319px' }}
						>
							<iframe
								width='100%'
								height='100%'
								style={{ borderRadius: '20px' }}
								src='https://www.youtube.com/embed/vhnFVeRGlCc?si=srdoZ6H0Ng8iXYOT'
							/>
						</Box>
					</Box>
				</Flex>
			</Flex>
		</Box >
	)
}