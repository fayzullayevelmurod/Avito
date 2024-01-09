import {
	Heading,
	Box,
	Text,
	Flex,
	Image,
	Grid, GridItem
} from '@chakra-ui/react';
import assets from '../../assets';
import { OutlineButton } from '../common';
import { Link } from 'react-router-dom';


export const AvitoPlus = () => (
	<Box
		color='#171923'
		bgColor='#FAFAFA'
		py='144px'
		mb='144px'
	>
		<div className='container'>
			<Heading
				fontSize='48px'
				fontWeight='700'
				lineHeight='120%'
				mb='44px'
				textAlign='center'
			>
				Как работает — <span className='purple'>Avito Plus?</span>
			</Heading>

			<Grid
				templateColumns='repeat(3, 1fr)'
				gap={8}
			>
				<GridItem>
					<Box
						borderRadius={32}
						bgColor='#fff'
						p={8}
						height='467px'
						position='relative'
					>
						<Heading
							fontSize='24px'
							color='#171923'
						>
							Редактируйте
							Google Таблицу
						</Heading>
						<Text
							fontSize='18px'
							color='#2D3748'
							lineHeight='150%'
							mt={4}
						>
							Одна строка в таблице, <br />
							равна одному объявлению
						</Text>
						<Box
							position='absolute'
							bottom={0}
							right={0}
						>
							<Image src={assets.fullGoogleSheet} />
						</Box>
					</Box>
				</GridItem>
				<GridItem
					bgImage={`url(${assets.avitoPlusBg})`}
					bgColor='purple.500'
					bgRepeat='no-repeat'
					bgSize='100% 100%'
					borderRadius={32}
					display='flex'
					justifyContent='center'
					alignItems='center'
					textAlign='center'
					px='40px'
					boxShadow='-20px 20px 62.8px -15px rgba(128, 90, 213, 0.40)'
				>
					<Text
						fontSize='28px'
						fontWeight='800'
						lineHeight='120%'
						color='white'
					>
						Выгрузка на Авито
						раз в 60 минут
					</Text>
				</GridItem>
				<GridItem
					borderRadius={32}
					bgColor='#fff'
					p={8}
					height='467px'
					position='relative'
				>
					<Heading
						fontSize='24px'
						color='#171923'
					>
						Авито публикует объявления
					</Heading>
					<Text
						fontSize='18px'
						color='#2D3748'
						lineHeight='150%'
						mt={4}
					>
						Если в объявлении ошибка — мы отобразим ее в таблице рядом с объявлением
					</Text>
					<Box
						position='absolute'
						bottom="50px"
						left='50%'
						transform='translateX(-50%)'
					>
						<Image src={assets.avitoReklama} />
					</Box>
				</GridItem>
			</Grid>
			<Box
				mt='30px'
				bgColor='white'
				borderRadius={32}
				pt={8}
				pr={8}
				pl={8}
				pb='72px'
				position='relative'
				overflow='hidden'
				zIndex='1'
			>
				<Flex>
					<Box maxWidth='580px' width='100%'>
						<Heading
							fontSize='24px'
							fontWeight={700}
							lineHeight='120%'
							color='#171923'
						>
							Статистика Авито
						</Heading>
						<Text
							pt={4}
							pb={7}
						>
							Отслеживайте статистику по объявлениями и Авито аккаунтам. Анализируйте и принимайте решения на основе просмотров, конверсий, лайков и сообщений.
						</Text>
						<Link to='#!' className='outline-link-button outline'>Яндекс Диск</Link>
					</Box>
					<Box>
						<Flex>
							<Box
								className="avito-plus__statistics"
								fontSize={'sm'}
								backgroundColor={'#fff'}
								p={3}
								borderRadius={12}
								width='200px'
								boxShadow='-20px 20px 62.8px -15px #ccc'
								color='#2D3748'
								position='absolute'
								top='22px'
								right='330px'
							>
								<Text fontWeight={500}>Просмотры за 7 дней</Text>
								<Text fontSize='2xl' fontWeight={600} py={1}>👀 783</Text>
								<Flex gap={1}>
									<Image src={assets.upGreenIcon} alt="up green icon" />
									<Text opacity={0.8}>87.09%</Text>
								</Flex>
							</Box>
							<Box className="avito-plus__statistics" fontSize={'sm'} backgroundColor={'#fff'}
								p={3}
								borderRadius={12}
								width='200px'
								color='#2D3748'
								boxShadow='-20px 20px 62.8px -15px #ccc'
								position='absolute'
								top='40px'
								right='105px'
							>
								<Text fontWeight={500}>Сообщения сегодня</Text>
								<Text fontSize='2xl' fontWeight={600} py={1}>💬 12</Text>
								<Flex gap={1}>
									<Image src={assets.upGreenIcon} alt="up green icon" />
									<Text opacity={0.8}>79.48%</Text>
								</Flex>
							</Box>
						</Flex>
						<Flex>
							<Box className="avito-plus__statistics" fontSize={'sm'} backgroundColor={'#fff'}
								p={3}
								borderRadius={12}
								width='200px'
								color='#2D3748'
								boxShadow='-20px 20px 62.8px -15px #ccc'
								position='absolute'
								top='150px'
								right='318px'
							>
								<Text fontWeight={500}>Конверсия за 30 дней</Text>
								<Text fontSize='2xl' fontWeight={600} py={1}>🔥 23%</Text>
								<Flex gap={1}>
									<Image src={assets.upGreenIcon} alt="up green icon" />
									<Text opacity={0.8}>65.31%</Text>
								</Flex>
							</Box>
							<Box className="avito-plus__statistics" fontSize={'sm'} backgroundColor={'#fff'}
								p={3}
								borderRadius={12}
								width='200px'
								color='#2D3748'
								boxShadow='-20px 20px 62.8px -15px #ccc'
								position='absolute'
								top='167px'
								right='95px'
							>
								<Text fontWeight={500}>Избранное за 7 дней</Text>
								<Text fontSize='2xl' fontWeight={600} py={1}>💜 45</Text>
								<Flex gap={1}>
									<Image src={assets.upGreenIcon} alt="up green icon" />
									<Text opacity={0.8}>55.44%</Text>
								</Flex>
							</Box>
						</Flex>
					</Box>
				</Flex>
				<Box
					position='absolute'
					right='0'
					height='100%'
					bottom='0'
					width='43%'
					zIndex='-1'
				>
					<Image src={assets.groupRadius} style={{ width: '100%', height: '100%' }} />
				</Box>
			</Box>
		</div>
	</Box>
)
