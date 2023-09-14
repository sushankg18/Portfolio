import {
  Text,
  VStack,
  Box,
  Flex,
  Heading,
  Image,
  HStack,
  extendTheme,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import img13 from '../assets/PROJECT -1.jpg';
import img14 from '../assets/todo.jpg'
import { AiOutlineLink, AiFillGithub } from 'react-icons/ai';
const Projects = () => {
  return (
    <Box w={'full'} h={'fit-content'} py={'20'}>
      <Flex justifyContent={'center'} pb={'10'}>
        <Heading>FEW PROJECTS</Heading>
      </Flex>

      <Flex
        h={'fit-content'}
        w={'full'}
        flexWrap={'wrap'}
        justifyContent={'space-evenly'}
      >
        <Box
          w={'25rem'}
          h={'fit-content'}
          py={'4'}
          transition={'all 0.5s'}
          _hover={{
            boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.7)',
          }}
        >
          <VStack>
            <Image w={'52'} src={img13} cursor={'pointer'}></Image>
            <HStack>
              <Button variant={'outline'} cursor={'pointer'} colorScheme='green' borderRadius={'full '}>
                <AiFillGithub size={'24'} />
              </Button>
              <Button variant={'outline'} colorScheme='green' cursor={'pointer'} borderRadius={'full '}>
                <AiOutlineLink size={'24'} cursor={'pointer'} />
              </Button>
            </HStack>
            <Text fontWeight={'semibold'} fontSize={'18'} py={'2'}>
              Portfolio using REACT
            </Text>
          </VStack>
        </Box>

        <Box
          w={'25rem'}
          h={'fit-content'}
          py={'4'}
          transition={'all 0.5s'}
          _hover={{
            boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.5)',
          }}
        >
          <VStack>
            <Image w={'52'} src={img14} cursor={'pointer'}></Image>
            <HStack>
              <Button variant={'outline'} cursor={'pointer'} colorScheme='green'>
                <AiFillGithub size={'28'} />
              </Button>
              <Button variant={'outline'} colorScheme='green' cursor={'pointer'} >
                <AiOutlineLink size={'28'} cursor={'pointer'} />
              </Button>
            </HStack>
            <Text fontWeight={'semibold'} fontSize={'18'} py={'2'}>
              TO DO Application
            </Text>
          </VStack>
        </Box>

        <Box
          w={'25rem'}
          h={'fit-content'}
          py={'4'}
          transition={'all 0.5s'}
          _hover={{
            boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.5)',
          }}
        >
          <VStack>
            <Image w={'52'} src={img13} cursor={'pointer'}></Image>
            <HStack>
              <Button variant={'outline'} cursor={'pointer'} colorScheme='green'>
                <AiFillGithub size={'28'} />
              </Button>
              <Button variant={'outline'} colorScheme='green' cursor={'pointer'} >
                <AiOutlineLink size={'28'} cursor={'pointer'} />
              </Button>
            </HStack>
            <Text fontWeight={'semibold'} fontSize={'18'}>
              Portfolio using REACT
            </Text>
          </VStack>
        </Box>


        <Box
          w={'25rem'}
          h={'fit-content'}
          py={'4'}
          transition={'all 0.5s'}
          _hover={{
            boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.5)',
          }}
        >
          <VStack>
            <Image w={'52'} src={img13} cursor={'pointer'}></Image>
            <HStack>
              <Button variant={'outline'} cursor={'pointer'} colorScheme='green'>
                <AiFillGithub size={'28'} />
              </Button>
              <Button variant={'outline'} colorScheme='green' cursor={'pointer'} >
                <AiOutlineLink size={'28'} cursor={'pointer'} />
              </Button>
            </HStack>
            <Text fontWeight={'semibold'} fontSize={'18'}>
              Portfolio using REACT
            </Text>
          </VStack>
        </Box>


        <Box
          w={'25rem'}
          h={'fit-content'}
          py={'4'}
          transition={'all 0.5s'}
          _hover={{
            boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.5)',
          }}
        >
          <VStack>
            <Image w={'52'} src={img13} cursor={'pointer'}></Image>
            <HStack>
              <Button variant={'outline'} cursor={'pointer'} colorScheme='green'>
                <AiFillGithub size={'28'} />
              </Button>
              <Button variant={'outline'} colorScheme='green' cursor={'pointer'} >
                <AiOutlineLink size={'28'} cursor={'pointer'} />
              </Button>
            </HStack>
            <Text fontWeight={'semibold'} fontSize={'18'}>
              Portfolio using REACT
            </Text>
          </VStack>
        </Box>

        <Box
          w={'25rem'}
          h={'fit-content'}
          py={'4'}
          transition={'all 0.5s'}
          _hover={{
            boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.5)',
          }}
        >
          <VStack>
            <Image w={'52'} src={img13} cursor={'pointer'}></Image>
            <HStack>
              <Button variant={'outline'} cursor={'pointer'} colorScheme='green'>
                <AiFillGithub size={'28'} />
              </Button>
              <Button variant={'outline'} colorScheme='green' cursor={'pointer'} >
                <AiOutlineLink size={'28'} cursor={'pointer'} />
              </Button>
            </HStack>
            <Text fontWeight={'semibold'} fontSize={'18'}>
              Portfolio using REACT
            </Text>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Projects;
