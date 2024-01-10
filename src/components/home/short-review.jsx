import React from 'react';
import {
	Box,
	Flex,
	Heading,
	Text,
	Image,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalCloseButton,
	ModalBody,
	AspectRatio
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import assets from '../../assets';


export const ShortReview = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()

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
			<Box position='relative'>
				<Image src={assets.shortReview} />
				<Box
					position='absolute'
					top='50%'
					left='50%'
					transform='translate(-50%)'
					cursor='pointer'
					onClick={onOpen}
				>
					<Image src={assets.playIcon} />
				</Box>
			</Box>
			< Modal onClose={onClose} isOpen={isOpen} isCentered>
				<ModalOverlay />
				<ModalContent 
				maxW='600px'
					width='100%'>
					<ModalCloseButton />
					<ModalBody>
						<Box pt={{ base: '0px', md: '50px', lg: '0px' }}>
							<AspectRatio
								h={{ base: '270px', md: '250px', lg: '332px' }}
								mt={{ base: '0px', md: '60px' }}
								mb={{ base: '0px', md: '40px' }}
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

					</ModalBody>
				</ModalContent>
			</ Modal>
		</Flex>
	)
}