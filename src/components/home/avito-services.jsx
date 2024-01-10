import {
	Heading,
	Box,
	Flex,
	Text,
	Image
} from '@chakra-ui/react';
import assets from '../../assets';
import { Link } from 'react-router-dom';

export const AvitoServices = () => (
	<Box mb='144px'>
		<Heading
			fontSize={{ base: '22px', sm: '35px', md: '40px', lg: '48px' }}
			fontWeight='700'
			lineHeight='120%'
			mb={{ base: '20px', sm: '40px', md: '44px', lg: '44px' }}

		>
			<span className='purple'>Что умеет</span> наш сервис
		</Heading>
		<Flex
			gap='30px'
			sx={{
				"@media (max-width:768px)": {
					flexDirection: 'column',
				}
			}}
		>
			<Box
				maxWidth={{ md: '50%', lg: '407px' }}
				width='100%'
				bgColor='#FAFAFA'
				px={8}
				pt={8}
				sx={{
					"@media (max-width:480px)": {
						px: '20px',
					}
				}}
				borderRadius={32}
				height={{ base: 'auto', md: '546px', lg: '600px' }}
				position='relative'
				overflow='hidden'
			>
				<Heading
					color='#171923'
					fontSize={{ base: '18px', md: '24px', lg: '24px' }}
					fontWeight='700'
					lineHeight='120%'
				>
					Сделайте из 100 шт  -{'>'} <span className='purple'>1000 шт</span>
				</Heading>
				<Text
					my='16px'
					color='#2D3748'
					lineHeight='150%'
					fontSize={{ base: '15px', sm: '16px', lg: '18px' }}
				>
					Используйте встроенную функцию рандомизатора, что бы создать уникальные копии объявлений
				</Text>
				<Link className='outline-link-button' to='#!'>
					Рандомизатор
				</Link>
				<Box
					position='absolute'
					sx={{
						"@media (max-width:768px)": {
							position: 'initial'
						}
					}}
					bottom={0}
					height={{ base: '53%', lg: 'auto' }}
				>
					<Image src={assets.airpordsGroup} alt='airports group' />
				</Box>
			</Box>
			<Box
				width={{ md: '50%', lg: '100%' }}
				bgColor='#FAFAFA'
				px={8}
				sx={{
					"@media (max-width:480px)": {
						px: '20px',
					}
				}}
				pt={8}
				borderRadius={32}
				height={{ base: 'auto', md: '546px', lg: '600px' }}
				position='relative'
				zIndex={1}
			>
				<Heading
					color='#171923'
					fontSize={{ base: '18px', md: '24px', lg: '24px' }}
					fontWeight='700'
					lineHeight='120%'
					maxWidth='540px'
				>
					Больше объявлений — <span className='purple'>больше заявок! </span>
					Публикуй объявления как PRO
				</Heading>
				<Text
					my='16px'
					color='#2D3748'
					lineHeight='150%'
					width={'540px'}
					sx={{
						"@media (max-width:1200px)": {
							width: '100%',
						}
					}}
				>
					Используйте разное время публикации, разные станции метро и адреса, отслеживайте статистику и включайте рекламу — Все это не покидая таблицы.
				</Text>
				<Link className='outline-link-button' to='#!'>
					База знаний Avito Plus
				</Link>
				<Box
					bottom='0'
					right={{ base: '0', lg: '78px' }}
					width={{ base: '100%', lg: 'auto' }}
					zIndex={-1}
					position='absolute'
					sx={{
						"@media (max-width:768px)": {
							position: 'initial'
						},
						"@media (max-width:480px)": {
							height: '177px'
						}
					}}
				>
					<Image src={assets.statistics} alt='airports group' height='100%' mt='16px' />
				</Box>
			</Box>
		</Flex>
		<Flex
			gap='30px'
			mt='30px'
			sx={{
				"@media (max-width:768px)": {
					flexDirection: 'column'
				}
			}}
		>
			<Box
				width='100%'
				bgColor='#FAFAFA'
				px={8}
				pt={8}
				borderRadius={32}
				height='522px'
				position='relative'
				overflow='hidden'
				sx={{
					"@media (max-width:480px)": {
						height: '458px',
					}
				}}
			>
				<Heading
					color='#171923'
					fontSize={{ base: '18px', md: '24px', lg: '24px' }}
					fontWeight='700'
					lineHeight='120%'
				>
					Удобная работа с фото -{'>'} <span className='purple'>Яндекс Диск</span>
				</Heading>
				<Text
					my='16px'
					color='#2D3748'
					lineHeight='150%'
					width='540px'
					sx={{
						"@media (max-width:1300px)": {
							width: '100%'
						},
						"@media (max-width:480px)": {
							fontSize: ' 15px',
						}
					}}
				>
					Загрузите фотографии по папкам, вставьте названия папок в таблицу, фотографии сами подгрузятся на Авито.
				</Text>
				<Link to='#!' className='outline-link-button'>
					Яндекс Диск
				</Link>
				<Box
					position='absolute'
					bottom='0'
					left={0}
					sx={{
						"@media (max-width: 1000px)": {
							width: '735px'
						},
						"@media (max-width: 480px)": {
							width: '627px'
						}
					}}
				>
					<Image src={assets.allFolders} alt='airports group' style={{ borderBottomLeftRadius: '32px' }} />
				</Box>
			</Box>
			<Box
				maxWidth={{ md: '100%', lg: '407px' }}
				width='100%'
				bgColor='#FAFAFA'
				px={8}
				pt={8}
				borderRadius={32}
				height='522px'
				position='relative'
				sx={{
					"@media (max-width:480px)": {
						height: '363px',
					}
				}}
			>
				<Heading
					color='#171923'
					fontSize={{ base: '18px', md: '24px', lg: '24px' }}
					fontWeight='700'
					lineHeight='120%'
				>
					Автоматизация
				</Heading>
				<Text
					my='16px'
					color='#2D3748'
					lineHeight='150%'
					sx={{
						"@media (max-width:480px)": {
							fontSize: ' 15px',
						}
					}}
				>
					Экономьте время, используйте встроенную функцию рандомизатора,
				</Text>
				<Link to='#!' className='outline-link-button'>
					Автоматизация
				</Link>
				<Box
					position='absolute'
					bottom={0}
					right='0'
					sx={{
						"@media (max-width:480px)": {
							width: '200px',
						}
					}}
				>
					<Image src={assets.settingsIcon} alt='airports group' />
				</Box>
			</Box>
		</Flex>
	</Box>
)
