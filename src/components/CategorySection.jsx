import React from 'react'
import { Container, Flex, Text } from '@chakra-ui/react'
const CategorySection = () => {
    return (
        <Container marginBottom={'8'}>
            <Flex w={'full'} justifyContent={'space-between'}>
                <Text fontSize={'1.2rem'} cursor={'pointer'} color={'purple.500'} borderBottom={'1px solid purple'} fontWeight={'bold'} _hover={{borderBottom : "none"}}>All</Text>
                <Text fontSize={'1.2rem'} cursor={'pointer'} color={'purple.500'} borderBottom={'1px solid purple'} fontWeight={'bold'} _hover={{borderBottom : "none"}}>Recent</Text>
                <Text fontSize={'1.2rem'} cursor={'pointer'} color={'purple.500'} borderBottom={'1px solid purple'} fontWeight={'bold'} _hover={{borderBottom : "none"}}>Ongoing</Text>
            </Flex>
        </Container>
    )
}

export default CategorySection
