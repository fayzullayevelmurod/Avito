import {
	Heading,
	Box,
	Flex,
	Text,
	Image
} from '@chakra-ui/react';
import { OutlineButton } from '../common';
import assets from '../../assets';

export const AvitoServices = () => (
	<Box mb='144px'>
		<Heading
			fontSize='48px'
			fontWeight='700'
			lineHeight='120%'
			mb='44px'
		>
			<span className='purple'>Что умеет</span> наш сервис
		</Heading>
		<Flex
			gap='30px'
		>
			<Box
				maxWidth='407px'
				width='100%'
				bgColor='#FAFAFA'
				px={8}
				pt={8}
				borderRadius={32}
				height='600px'
				position='relative'
			>
				<Heading
					color='#171923'
					fontSize='24px'
					fontWeight='700'
					lineHeight='120%'
				// width='343px'
				>
					Сделайте из 100 шт  -> <span className='purple'>1000 шт</span>
				</Heading>
				<Text
					my='16px'
					color='#2D3748'
					lineHeight='150%'
				>
					Используйте встроенную функцию рандомизатора, что бы создать уникальные копии объявлений
				</Text>
				<OutlineButton text='Рандомизатор' />
				<Box
					position='absolute'
					bottom={0}
				>
					<Image src={assets.airpordsGroup} alt='airports group' />
				</Box>
			</Box>
			<Box
				width='100%'
				bgColor='#FAFAFA'
				px={8}
				pt={8}
				borderRadius={32}
				height='600px'
				position='relative'
			>
				<Heading
					color='#171923'
					fontSize='24px'
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
					width='540px'
				>
					Используйте разное время публикации, разные станции метро и адреса, отслеживайте статистику и включайте рекламу — Все это не покидая таблицы.
				</Text>
				<OutlineButton text='База знаний Avito Plus' />
				<Box
					position='absolute'
					bottom='0'
					right='78px'
				>
					<Image src={assets.statistics} alt='airports group' />
				</Box>
			</Box>
		</Flex>
		<Flex
			gap='30px'
			mt='30px'
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
			>
				<Heading
					color='#171923'
					fontSize='24px'
					fontWeight='700'
					lineHeight='120%'
				>
					Удобная работа с фото -> <span className='purple'>Яндекс Диск</span>
				</Heading>
				<Text
					my='16px'
					color='#2D3748'
					lineHeight='150%'
					width='540px'
				>
					Загрузите фотографии по папкам, вставьте названия папок в таблицу, фотографии сами подгрузятся на Авито.
				</Text>
				<OutlineButton text='Яндекс Диск' />
				<Box
					position='absolute'
					bottom='0'
					left={0}
				>
					<Image src={assets.allFolders} alt='airports group' style={{borderBottomLeftRadius: '32px'}} />
				</Box>
			</Box>
			<Box
				maxWidth='407px'
				width='100%'
				bgColor='#FAFAFA'
				px={8}
				pt={8}
				borderRadius={32}
				height='522px'
				position='relative'
			>
				<Heading
					color='#171923'
					fontSize='24px'
					fontWeight='700'
					lineHeight='120%'
				>
					Автоматизация 
				</Heading>
				<Text
					my='16px'
					color='#2D3748'
					lineHeight='150%'
				>
					Экономьте время, используйте встроенную функцию рандомизатора, 
				</Text>
				<OutlineButton text='Автоматизация' />
				<Box
					position='absolute'
					bottom={0}
					right='0'
				>
					<Image src={assets.settingsIcon} alt='airports group' />
				</Box>
			</Box>
		</Flex>
	</Box>
)
