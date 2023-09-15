import {
  Text,
  VStack,
  Box,
  Flex,
  Heading,
  Image,
  HStack,
  Button,
  Container,
} from '@chakra-ui/react';
import React from 'react';
import img13 from '../assets/PROJECT -1.jpg';
import img14 from '../assets/todo.jpg';
import { AiOutlineLink, AiFillGithub } from 'react-icons/ai';
import img15 from '../assets/VideoHub.jpg';
const Projects = () => {
  return (
    <Box w={'full'} h={'fit-content'} py={'20'} id="projects" >
      <Flex justifyContent={'center'} pb={'10'}>
        <Heading color={'green'}>FEW PROJECTS</Heading>
      </Flex>

      <Flex
        h={'fit-content'}
        w={'full'}
        flexWrap={'wrap'}
        justifyContent={'space-evenly'}
      >
        <Box
          w={['', '', '20rem', '25rem']}
          h={'fit-content'}
          py={'4'}
          transition={'all 0.5s'}
          _hover={{
            boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.7)',
          }}
        >
          <VStack>
            <Image w={'52'} src={img13} cursor={'pointer'}></Image>
            <HStack>
              <a href="https://github.com/sushankg18/portfolio" target="_blank">
                <Button
                  variant={'outline'}
                  cursor={'pointer'}
                  colorScheme="green"
                  borderRadius={'full '}
                >
                  <AiFillGithub size={'24'} />
                </Button>
              </a>
              <a href="https://sushankportfolio.vercel.app/" target="_blank">
                <Button
                  variant={'outline'}
                  colorScheme="green"
                  cursor={'pointer'}
                  borderRadius={'full '}
                >
                  <AiOutlineLink size={'24'} cursor={'pointer'} />
                </Button>
              </a>
            </HStack>
            <Text fontWeight={'semibold'} fontSize={'18'} py={'2'}>
              Portfolio using REACT
            </Text>
          </VStack>
        </Box>

        <Box
          w={['', '', '20rem', '25rem']}
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
              <Button
                variant={'outline'}
                cursor={'pointer'}
                colorScheme="green"
              >
                <AiFillGithub size={'28'} />
              </Button>
              <Button
                variant={'outline'}
                colorScheme="green"
                cursor={'pointer'}
              >
                <AiOutlineLink size={'28'} cursor={'pointer'} />
              </Button>
            </HStack>
            <Text fontWeight={'semibold'} fontSize={'18'} py={'2'}>
              TO DO Application
            </Text>
          </VStack>
        </Box>

        <Box
          w={['', '', '20rem', '25rem']}
          h={'fit-content'}
          py={'4'}
          transition={'all 0.5s'}
          _hover={{
            boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.5)',
          }}
        >
          <VStack h={'305px'} justifyContent={'space-evenly'}>
            <Image w={'52'} src={img15} cursor={'pointer'}></Image>
            <HStack>
              <Button
                variant={'outline'}
                cursor={'pointer'}
                colorScheme="green"
              >
                <AiFillGithub size={'28'} />
              </Button>
              <Button
                variant={'outline'}
                colorScheme="green"
                cursor={'pointer'}
              >
                <AiOutlineLink size={'28'} cursor={'pointer'} />
              </Button>
            </HStack>
            <Text fontWeight={'semibold'} fontSize={'18'}>
              Video Hub
            </Text>
          </VStack>
        </Box>

        <Box
          w={['', '', '20rem', '25rem']}
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
              <Button
                variant={'outline'}
                cursor={'pointer'}
                colorScheme="green"
              >
                <AiFillGithub size={'28'} />
              </Button>
              <Button
                variant={'outline'}
                colorScheme="green"
                cursor={'pointer'}
              >
                <AiOutlineLink size={'28'} cursor={'pointer'} />
              </Button>
            </HStack>
            <Text fontWeight={'semibold'} fontSize={'18'}>
              Portfolio using REACT
            </Text>
          </VStack>
        </Box>

        <Box
          w={['', '', '20rem', '25rem']}
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
              <Button
                variant={'outline'}
                cursor={'pointer'}
                colorScheme="green"
              >
                <AiFillGithub size={'28'} />
              </Button>
              <Button
                variant={'outline'}
                colorScheme="green"
                cursor={'pointer'}
              >
                <AiOutlineLink size={'28'} cursor={'pointer'} />
              </Button>
            </HStack>
            <Text fontWeight={'semibold'} fontSize={'18'}>
              Portfolio using REACT
            </Text>
          </VStack>
        </Box>

        <Box
          w={['', '', '20rem', '25rem']}
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
              <Button
                variant={'outline'}
                cursor={'pointer'}
                colorScheme="green"
              >
                <AiFillGithub size={'28'} />
              </Button>
              <Button
                variant={'outline'}
                colorScheme="green"
                cursor={'pointer'}
              >
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
