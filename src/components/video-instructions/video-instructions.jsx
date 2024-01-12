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
		<Box pb='144px'>
			<Heading
				fontSize={{ base: '22px', sm: '35px', md: '40px', lg: '48px' }}
				fontWeight='700'
				color='#171923'
				lineHeight='120%'
				m='44px 0 32px 0'
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
						gap='40px'
					>
						<Image src={assets.purpleBallon} width='151px' height='150px' />
						<Box flex='1 1 0'>
							<Heading
								fontSize='24px'
								fontWeight={700}
								lineHeight='120%'
								color='#171923'
							>
								Поддержка
							</Heading>
							<Text
								fontSize='18px'
								lineHeight='150%'
								color='#2D3748'
								m='16px 0 28px 0'
							>
								Мы на связи, напишите нам, с радостью ответим на все ваши вопросы.
							</Text>
							<Link to='https://t.me/avito_plus_help'>
								<Button
									colorScheme='purple'
									variant='outline'
									fontSize='18px'
									lineHeight='28px'
									_hover={{
										bgColor: 'purple.500',
										color: 'white'
									}}
								>
									Спросить поддержку
								</Button>
							</Link>
						</Box>
						<Image src={assets.avitoQrCode} />
					</Flex>
				</Box>
			</Flex>

			<Flex mt='40px' gap='20px'>
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
							m='12px 0 24px 0'
						>
							Мы на связи, напишите нам, с радостью ответим на все ваши вопросы.
						</Text>
						<Box
							height='319px'
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
							m='12px 0 24px 0'
						>
							Мы на связи, напишите нам, с радостью ответим на все ваши вопросы.
						</Text>
						<Box
							height='319px'
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
							m='12px 0 24px 0'
						>
							Мы на связи, напишите нам, с радостью ответим на все ваши вопросы.
						</Text>
						<Box
							height='319px'
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
		</Box>
	)
}