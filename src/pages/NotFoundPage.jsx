import {
	Box,
	Heading,
	Text,
	Button,
	Image
} from '@chakra-ui/react'
import { Footer, Header } from '../layout'
import assets from '../assets'
import { Link } from 'react-router-dom'

export const NotFoundPage = () => (
	<Box bgColor='#fafafa'>
		<Header />
		<Box className='container main' textAlign='center' mt={{ base: '80px', sm: '90px', md: '148px', lg: '136px' }}>
			<Image src={assets.noteFoundImg} mx='auto' />
			<Heading
				color='#171923'
				fontSize={{ base: '16px', sm: '35px', md: '48px', lg: '48px' }}
				fontWeight='700'
				lineHeight='120%'
				mb='18px'
			>
				Страница не найдена
			</Heading>
			<Text
				color='#4A5568'
				mb='45px'
				fontSize={{ base: '15px', sm: '18px', md: '18px', lg: '18px' }}
				maxWidth={{ base: '100%', md: '615px', lg: '615px' }}
				mx='auto'
			>
				Похоже, эта страница была перемещена или удалена, вернитесь на главную страницу
			</Text>
			<Link to='/'>
				<Button
					fontSize={{ base: '16px', sm: '18px', md: '18px', lg: '18px' }}
					lineHeight='28px'
					fontWeight='600'
					px='24px'
					colorScheme='purple'
					sx={{
						"@media (max-width: 480px)": {
							width: '100%',
						}
					}}
				>
					На главную страницу
				</Button>
			</Link>
		</Box>
		<Footer />
	</Box>
)