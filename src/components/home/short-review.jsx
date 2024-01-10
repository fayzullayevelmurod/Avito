import React from 'react';
import {
	Box,
	Flex,
	Heading,
	Text,
	Image,
	useDisclosure,
	// Modal,
	// ModalOverlay,
	// ModalContent,
	// ModalCloseButton,
	// ModalBody,
	// AspectRatio
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import assets from '../../assets';
import { VideoModal } from '../modal/modal';


export const ShortReview = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const handleOpenModal = () => {
		onOpen();
	};

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
					onClick={handleOpenModal}
				>
					<Image src={assets.playIcon} />
				</Box>
			</Box>
			<VideoModal onClose={onClose} isOpen={isOpen} /> 
		</Flex>
	)
}