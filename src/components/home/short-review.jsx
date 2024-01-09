import React from 'react';
import {
	Button,
	AspectRatio,
	Box,
	Flex,
	Heading,
	Text,
	Image
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import assets from '../../assets';

export const ShortReview = () => {
	return (
		<Flex
			direction={{ base: 'column-reverse', md: 'row' }}
			justify={{ base: 'center', md: 'space-between' }}
			align='center'
			py='50px'
			gap='50px'
		>
			<Box maxW='565px'>
				<Heading
					lineHeight='120%'
					fontWeight='700'
					textAlign={{ base: 'center', md: 'unset' }}
					fontSize='48px'
					color='#171923'
				>
					Краткий обзор <br />
					<Box as='span' color='purple.500'>
						— 120 секунд
					</Box>
				</Heading>
				<Text
					textAlign={{ base: 'center', md: 'unset' }}
					fontSize='18px'
					mt='32px'
					mb='56px'
					lineHeight='150%'
				>
					Используйте разное время публикации, разные станции метро и адреса, отслеживайте статистику и включайте рекламу —
					<span style={{ fontWeight: '600', color: '#805ad5' }}>Это все не покидая таблицы.</span>
				</Text>
				<Flex
					gap={{ base: '10px', md: '30px' }}
					flexWrap='wrap'
					justify={{ base: 'center', md: 'flex-start' }}
				>
					<Link
						className='link-button'
					>
						<Image src={assets?.lightning} alt="liglightning icon" display={'inline-block'} />
						Начните сейчас
					</Link>
				</Flex>
			</Box>
			{/* <Box
				bgImage={{ base: 'unset', md: "url('https://wp.salesforce.com/en-us/wp-content/uploads/sites/4/2023/08/n-up-news-starter-uma.jpg?resize=1024,576')" }}
				bgSize='cover'
				bgPosition='center'
				bgRepeat='no-repeat'
				w='100%'
				h={{ base: 'unset', md: '535px' }}
			>
				<Box pt={{ base: '0px', md: '50px', lg: '0px' }}>
					<AspectRatio
						maxW='459px'
						h={{ base: '270px', md: '250px', lg: '332px' }}
						mt={{ base: '0px', md: '100px' }}
						mr={{ base: 'auto', md: '20px' }}
						ml='auto'
					>
						<iframe
							width='100%'
							height='100%'
							style={{ borderRadius: '20px' }}
							src='https://www.youtube.com/embed/vhnFVeRGlCc?si=srdoZ6H0Ng8iXYOT'
						/>
					</AspectRatio>
				</Box>
			</Box> */}
			<Box>
				<Image src={assets.shortReview} />
			</Box>
		</Flex>
	)
}
