import { Flex, Text, Box } from '@chakra-ui/react'

export const Footer = () => (
	<Box bgColor='#FAFAFA'>
		<div className='container'>
			<Flex justifyContent={'space-between'} fontSize='sm' color='gray.500' py={8}>
				<Flex gap={14}>
					<Text>@ 2024 Avito Plus - ИП Иванов Иван Иванович</Text>
					<Text>ИНН 7729773587</Text>
				</Flex>
				<Flex gap={14}>
					<Text>Политика конфиденциальности</Text>
					<Text>Оферта</Text>
				</Flex>
			</Flex>
		</div>
	</Box>
)