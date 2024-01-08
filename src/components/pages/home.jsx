import { Box, Text, Flex, Image, Link } from '@chakra-ui/react';
import assets from '../../assets';

const boxPropery = {
	backgroundColor: '#FAFAFA',
	borderRadius: 32,
	className: 'home-intro__section',
}

export const Home = () => {
	return (
		<>
			<Box style={boxPropery} px='40px' pt="64px" position='relative'>
				<Box pb='196px'>
					<Box fontSize='7xl' fontWeight='700'>
						<Flex alignItems='center' justifyContent='center'>
							Продвигай
							<Image mx={4} src={assets.avitoLogo} alt="avito logo" style={{ display: 'inline-block' }} />
							—
						</Flex>
						<Text textAlign={'center'}>
							Управляй объявлениями
						</Text>
					</Box>
					<Text fontSize='lg' width={616} mx='auto' py={31}>
						Используйте Google Таблицы для управления Avito аккаунтами.
						Добавляйте, клонируйте и редактируйте объявления в пару кликов.
					</Text>
					<Link className='link-button'>
						<Image src={assets.lightning} alt="liglightning icon" display={'inline-block'} />
						Начните сейчас
					</Link>
				</Box>
				<Flex justifyContent='space-between' gap='40px' position='absolute' width='100%' left='0' bottom={0}>
					<Box className='avito-plus__card' backgroundColor={'white'} borderRadius={32} p='40px'>
						<Text fontSize='4xl' fontWeight='700'>Получайте больше заявок <br />
							— используя <span className='purple'>Avito Plus</span> </Text>
						<Flex gap={3} mt={6}>
							<Box className="avito-plus__statistics" fontSize={'sm'} backgroundColor={'#FAFAFA'} p={3} borderRadius={12} maxWidth={137} width='100%' color='#2D3748'>
								<Text fontWeight={500}>Просмотры</Text>
								<Text fontSize='2xl' fontWeight={600} py={1}>👀 783</Text>
								<Flex gap={1}>
									<Image src={assets.upGreenIcon} alt="up green icon" />
									<Text opacity={0.8}>87.09%</Text>
								</Flex>
							</Box>
							<Box className="avito-plus__statistics" fontSize={'sm'} backgroundColor={'#FAFAFA'} p={3} borderRadius={12} maxWidth={137} width='100%' color='#2D3748'>
								<Text fontWeight={500}>Конверсия</Text>
								<Text fontSize='2xl' fontWeight={600} py={1}>🔥 23%</Text>
								<Flex gap={1}>
									<Image src={assets.upGreenIcon} alt="up green icon" />
									<Text opacity={0.8}>65.31%</Text>
								</Flex>
							</Box>
							<Box className="avito-plus__statistics" fontSize={'sm'} backgroundColor={'#FAFAFA'} p={3} borderRadius={12} maxWidth={137} width='100%' color='#2D3748'>
								<Text fontWeight={500}>Сообщения</Text>
								<Text fontSize='2xl' fontWeight={600} py={1}>💬 34</Text>
								<Flex gap={1}>
									<Image src={assets.upGreenIcon} alt="up green icon" />
									<Text opacity={0.8}>79.48%</Text>
								</Flex>
							</Box>
							<Box className="avito-plus__statistics" fontSize={'sm'} backgroundColor={'#FAFAFA'} p={3} borderRadius={12} maxWidth={137} width='100%' color='#2D3748'>
								<Text fontWeight={500}>Избранное</Text>
								<Text fontSize='2xl' fontWeight={600} py={1}>💜 45</Text>
								<Flex gap={1}>
									<Image src={assets.upGreenIcon} alt="up green icon" />
									<Text opacity={0.8}>55.44%</Text>
								</Flex>
							</Box>
						</Flex>
					</Box>
					<Box maxW='380px' bgImage={assets.plusBg} bgColor='#805AD5' p='40px' color='white' textAlign='center' borderRadius={32}>
						<Box bgColor='white' borderRadius={12} py={5} px={8}>
							<Image mx='auto' src={assets.googleSheets} alt="google sheets full logo" />
						</Box>
						<Text fontSize='28px' fontWeight={600} mt={6}>
							10.000+ объявлений
						</Text>
						<Text >
							Через Google Таблицы вы можете выкладывать и легко контролировать тысячи объявлений
						</Text>
					</Box>
				</Flex>
			</Box>
		</>
	)
}
