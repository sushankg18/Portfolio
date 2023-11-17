import {
  Text,
  VStack,
  Box,
  Flex,
  Heading,
  Image,
  HStack,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import portfolio from '../assets/portfolio.jpg';
import img14 from '../assets/todo.jpg';
import Enterntube from '../assets/4905784.jpg';
import Elearning from '../assets/Elearning.jpg';
import filmix from '../assets/Filmix.jpg';
import VideoHub from '../assets/VideoHub.jpg'
import console from '../assets/console.jpg';
import { AiOutlineLink, AiFillGithub } from 'react-icons/ai';
import { FaProjectDiagram } from 'react-icons/fa';
const Projects = () => {
  return (
    <Box w={'full'} h={'fit-content'} py={'20'} id="projects">
      <Flex justifyContent={'center'} pb={'10'}>
        <Heading
          color={'purple.600'}
          fontSize={['28', '32', '32', '40']}
          display={'flex'}
          alignItems={'center'}
          gap={'5'}
        >
          Few Projects <FaProjectDiagram /> 
        </Heading>
      </Flex>

      <Flex
        h={'fit-content'}
        w={'full'}
        flexWrap={'wrap'}
        justifyContent={'space-evenly'}
        gap={['5', '']}
      >
        <Box
          w={['full', '', '20rem', '25rem']}
          h={'fit-content'}
          py={'4'}
          transition={'all 0.5s'}
          _hover={{
            boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.7)',
          }}
        >
          <VStack>
            <Image w={'52'} src={portfolio} cursor={'pointer'}></Image>
            <HStack>
              <a
                href="https://github.com/sushankg18/portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant={'outline'}
                  cursor={'pointer'}
                  colorScheme="purple"
                >
                  <AiFillGithub size={'24'} />
                </Button>
              </a>
              <a
                href="https://sushankportfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant={'outline'}
                  colorScheme="purple"
                  cursor={'pointer'}
                >
                  <AiOutlineLink size={'24'} cursor={'pointer'} />
                </Button>
              </a>
            </HStack>
            <Text fontWeight={'semibold'} fontSize={'18'} py={'2'}>
                Personal Portfolio
            </Text>
            <Text>Technologies : React js, Chakra UI</Text>
          </VStack>
        </Box>

        <Box
          w={['full', '', '20rem', '25rem']}
          h={'fit-content'}
          py={'4'}
          transition={'all 0.5s'}
          _hover={{
            boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.7)',
          }}
        >
          <VStack>
            <Image w={'52'} src={VideoHub} cursor={'pointer'}></Image>
            <HStack>
              <a
                href="https://github.com/sushankg18/VideoHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant={'outline'}
                  cursor={'pointer'}
                  colorScheme="purple"
                >
                  <AiFillGithub size={'24'} />
                </Button>
              </a>
              <a
                href="https://video-hub-lovat.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant={'outline'}
                  colorScheme="purple"
                  cursor={'pointer'}
                >
                  <AiOutlineLink size={'24'} cursor={'pointer'} />
                </Button>
              </a>
            </HStack>
            <Text fontWeight={'semibold'} fontSize={'18'} py={'2'}>
              VideoHub
            </Text>
            <Text>Technologies : React js, Chakra UI</Text>
          </VStack>
        </Box>

        <Box
          w={['full', '', '20rem', '25rem']}
          h={'fit-content'}
          py={'4'}
          transition={'all 0.5s'}
          _hover={{
            boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.7)',
          }}
        >
          <VStack>
            <Image w={'52'} src={console} cursor={'pointer'}></Image>
            <HStack>
              <a
                href="https://github.com/sushankg18/console-launcher"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant={'outline'}
                  cursor={'pointer'}
                  colorScheme="purple"
                >
                  <AiFillGithub size={'24'} />
                </Button>
              </a>
              <a
                href="https://consolelauncher.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant={'outline'}
                  colorScheme="purple"
                  cursor={'pointer'}
                >
                  <AiOutlineLink size={'24'} cursor={'pointer'} />
                </Button>
              </a>
            </HStack>
            <Text fontWeight={'semibold'} fontSize={'18'} py={'2'}>
                Console Launcher
            </Text>
            <Text>Technologies : HTML and CSS</Text>
          </VStack>
        </Box>

        <Box
          w={['full', '', '20rem', '25rem']}
          h={'fit-content'}
          py={'4'}
          transition={'all 0.5s'}
          _hover={{
            boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.7)',
          }}
        >
          <VStack>
            <Image w={'80'} src={Enterntube} cursor={'pointer'}></Image>
            <HStack>
              <a
                href="https://github.com/sushankg18/EnternTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant={'outline'}
                  cursor={'pointer'}
                  colorScheme="purple"
                >
                  <AiFillGithub size={'24'} />
                </Button>
              </a>
              <a
                href="https://entern-tube.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant={'outline'}
                  colorScheme="purple"
                  cursor={'pointer'}
                >
                  <AiOutlineLink size={'24'} cursor={'pointer'} />
                </Button>
              </a>
            </HStack>
            <Text fontWeight={'semibold'} fontSize={'18'} py={'2'}>
              EnternTube
            </Text>
            <Text>Technologies : HTML and CSS</Text>
          </VStack>
        </Box>

        <Box
          w={['full', '', '20rem', '25rem']}
          h={'fit-content'}
          py={'4'}
          transition={'all 0.5s'}
          _hover={{
            boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.5)',
          }}
        >
          <VStack>
            <Image w={'52'} src={Elearning} cursor={'pointer'}></Image>
            <HStack>
              <Button
                variant={'outline'}
                cursor={'pointer'}
                colorScheme="purple"
              >
                <AiFillGithub size={'28'} />
              </Button>
              <Button
                variant={'outline'}
                colorScheme="purple"
                cursor={'pointer'}
              >
                <AiOutlineLink size={'28'} cursor={'pointer'} />
              </Button>
            </HStack>
            <Text fontWeight={'semibold'} fontSize={'18'}>
              Edu Explorer (E-learning platform)
            </Text>
            <Text>Technologies : React js, SASS, </Text>
          </VStack>
        </Box>

        <Box
          w={['full', '', '20rem', '25rem']}
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
                colorScheme="purple"
              >
                <AiFillGithub size={'28'} />
              </Button>
              <Button
                variant={'outline'}
                colorScheme="purple"
                cursor={'pointer'}
              >
                <AiOutlineLink size={'28'} cursor={'pointer'} />
              </Button>
            </HStack>
            <Text fontWeight={'semibold'} fontSize={'18'}>
              To Do Application
            </Text>
            <Text>Technologies : HTML, CSS, JAVASCRIPT</Text>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Projects;
