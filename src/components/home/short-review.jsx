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
			pt='50px'
			mb='144px'
			gap='50px'
			sx={{
				"@media (max-width: 992px)": {
					gap: '20px'
				},
				"@media (max-width: 768px)": {
					flexDirection: 'column',
					mt: '470px',
					gap: '36px',
					mb: '80px'
				}
			}}
		>
			<Box
				maxW='565px'
				sx={{
					"@media (max-width: 1300px)": {
						maxWidth: '440px'
					},
					"@media (max-width: 992px)": {
						maxWidth: '335px'
					},
					"@media (max-width: 768px)": {
						maxWidth: '100%'
					}
				}}
			>
				<Heading
					lineHeight='120%'
					fontWeight='700'
					textAlign='left'
					fontSize='48px'
					color='#171923'
					sx={{
						"@media (max-width: 1000px)": {
							fontSize: '40px'
						},
						"@media (max-width: 480px)": {
							fontSize: '22px'
						},
					}}
				>
					Краткий обзор <br />
					<Box as='span' color='purple.500'>
						— 120 секунд
					</Box>
				</Heading>
				<Text
					textAlign='left'
					fontSize='18px'
					mt='32px'
					mb='56px'
					lineHeight='150%'
					sx={{
						"@media (max-width: 480px)": {
							mt: '16px',
							mb: '24px',
							fontSize: '15px',
						}
					}}
				>
					Используйте разное время публикации, разные станции метро и адреса, отслеживайте статистику и включайте рекламу —
					<Box as='span' display={'block'} style={{ fontWeight: '600', color: '#805ad5' }}>Это все не покидая таблицы.</Box>
				</Text>
				<Flex
					gap={{ base: '10px', md: '30px' }}
					flexWrap='wrap'
					justify='start'
				>
					<Link
						className='link-button media-full'
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
					top='40%'
					left='50%'
					transform='translate(-50%)'
					cursor='pointer'
					onClick={handleOpenModal}
				>
					<Image src={assets.playIcon} />
				</Box>
			</Box>
			<VideoModal onClose={onClose} isOpen={isOpen} />
		</Flex >
	)
}