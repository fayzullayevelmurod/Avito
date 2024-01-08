import { Button, Link } from '@chakra-ui/react'

export const OutlineButton = ({ text }) => (
	<Button
		colorScheme="purple"
		variant='outline'
		_hover={{ backgroundColor: "purple.500", color: "white", border: '1px solid #805AD5' }}
	>{text}</Button>
)

export const RegularButton = ({ text }) => (
	<Button colorScheme='purple'>
		{text}
	</Button>
)