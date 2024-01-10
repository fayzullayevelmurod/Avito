import { Flex, Text, Box } from '@chakra-ui/react'

export const Footer = () => (
	<Box bgColor='#FAFAFA'>
		<div className='container'>
			<Flex
				justifyContent={'space-between'}
				fontSize='sm'
				color='gray.500'
				py={8}
				sx={{
					"@media (max-width:869px)": {
						flexDirection: 'column',
						alignItems: 'center',
						textAlign: 'center',
						gap: '12px'
					},
					"@media (max-width:580px)": {
						py: '20px'
					}
				}}
			>
				<Flex
					gap={14}
					sx={{
						"@media (max-width:580px)": {
							flexDirection: 'column',
							gap: '12px'
						}
					}}
				>
					<Text>@ 2024 Avito Plus - ИП Иванов Иван Иванович</Text>
					<Text>ИНН 7729773587</Text>
				</Flex>
				<Flex
					gap={14}
					sx={{
						"@media (max-width:580px)": {
							gap: '12px'
						}
					}}
				>
					<Text>Политика конфиденциальности</Text>
					<Text>Оферта</Text>
				</Flex>
			</Flex>
		</div>
	</Box>
)