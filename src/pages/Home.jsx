import { Box, Heading, Text, Button } from '@chakra-ui/react'

function Home() {
  return (
    <Box p={8} textAlign="center">
      <Heading mb={4}>Coach for Mind</Heading>
      <Text fontSize="xl" mb={6}>
        Welcome to your mental wellness companion.
      </Text>
      <Button colorScheme="teal">Get Started</Button>
    </Box>
  )
}

export default Home