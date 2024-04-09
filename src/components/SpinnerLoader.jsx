import { Center, Spinner} from '@chakra-ui/react'

const SpinnerLoader = () => {
	return (
		<Center
			h='100vh'
			w='100vh'
			position='relative'
		>
			<Spinner
				position='absolute'
				top='40%'
				left='80%'
				transform='translate(-50%, -50%)'
				thickness='4px'
				speed='0.65s'
				emptyColor='gray.200'
				color='green.500'
				w='80px'
				h='80px'
			/>
		</Center>
	)
}

export default SpinnerLoader
