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
		<Box>
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

			<Flex>
				<Box
					bgColor='#fff'
					borderRadius='12px'
					p='24px'
				>

				</Box>
			</Flex>
		</Box>
	)
}