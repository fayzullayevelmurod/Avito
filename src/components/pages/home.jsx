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
			<Box style={boxPropery} px='40px' pt="64px">
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
				<Box className='avito-plus__card' backgroundColor={'white'} borderRadius={32} p='40px'>
					<Text fontSize='4xl' fontWeight='700'>Получайте больше заявок <br />
						— используя <span className='purple'>Avito Plus</span> </Text>
					<Flex>
						<Box className="avito-plus__statistics" fontSize={'sm'} backgroundColor={'#FAFAFA'} p={3} borderRadius={12}>
							<Text>Просмотры</Text>
							<Text fontSize='2xl' fontWeight={600} py={1}>👀 783</Text>
							<Flex gap={1}>
								<Image src={assets.upGreenIcon} alt="up green icon" />
								87.09%
							</Flex>
						</Box>
					</Flex>
				</Box>
			</Box>
		</>
	)
}
