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
import React, { useEffect, useState } from 'react';
import portfolio from '../assets/portfolio.jpg';
import practise from '../assets/todo.jpg';
import dalle from '../assets/dalle.jpg';
import instaClone from '../assets/InstaClone.jpg';
import Elearning from '../assets/Elearning.jpg';
import crypto from '../assets/crypto.jpg';
import Ecommerce from '../assets/Ecommerce.jpg';
import console from '../assets/console.jpg';
import { AiOutlineLink, AiFillGithub } from 'react-icons/ai';
import { FaProjectDiagram } from 'react-icons/fa';

const Projects = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const projects = [
      {
        img: crypto,
        title: 'CryptoJugad (cryptoCurrency)',
        category: 'recent',
        techStack: 'Technologies : React js, Chakra UI, Chart JS',
        gitHubURL: 'https://github.com/sushankg18/crypto-Jugad',
        hostURL: 'https://cryptojugadind.vercel.app/',
      },
      {
        img: portfolio,
        title: 'Portfolio',
        category: 'all',
        techStack: 'Technologies : React js, Chakra UI',
        gitHubURL: 'https://github.com/sushankg18/portfolio',
        hostURL: 'https://sushankportfolio.vercel.app/',
      },
      {
        img: Ecommerce,
        title: 'E-commerce',
        category: 'recent',
        techStack: 'Technologies : React js, LocalStorage',
        gitHubURL: 'https://github.com/sushankg18/LoginSignup_webpage',
        hostURL: 'https://e-commerceind.vercel.app/',
      },
      {
        img: dalle,
        category: 'ongoing',
        title: 'DALL-E 2 Clone',
        techStack: 'Technologies : React js, SASS',
        gitHubURL: 'https://github.com/sushankg18/DALL-E-CLONE',
        hostURL: 'https://dall-e-cloneind.vercel.app/',
      },
      {
        img: instaClone,
        title: 'InstaChat',
        category: 'all',
        techStack: 'Technologies : HTML, CSS, JAVASCRIPT',
        gitHubURL: 'https://github.com/sushankg18/InstaChat',
        hostURL: 'https://instachatind.vercel.app/',
      },
      {
        img: console,
        category: 'all',
        title: 'Console Launcher (Gaming Platform)',
        techStack: 'Technologies : Html, Css',
        gitHubURL: 'https://github.com/sushankg18/console-launcher',
        hostURL: 'https://console-launcher.vercel.app/',
      },
      {
        img: Elearning,
        category: 'ongoing',
        title: 'Edu Explorer (E-learning platform)',
        techStack: 'Technologies : React js, SASS',
        gitHubURL: '',
        hostURL: '',
      },
      {
        img: practise,
        title: 'Practise Website',
        techStack: 'Technologies : React Js, Chakra UI',
        gitHubURL: 'https://github.com/sushankg18/VideoHub',
        hostURL: 'https://video-hub-lovat.vercel.app/',
      },
    ];
    setAllProjects(projects);
    setFilteredProjects(projects);
  }, []);

  const filterItem = (categItem) => {
    const updateItem = allProjects.filter((curElem) => {
      return curElem.category === categItem;
    });
    setFilteredProjects(updateItem); 
  };

  return (
    <Box w={'full'} h={'fit-content'} py={'20'} id="projects">
      <Flex justifyContent={'center'} pb={'10'}>
        <Heading
          color={'purple.600'}
          fontSize={['28', '32', '32', '40']}
          display={'flex'}
          alignItems={'center'}
          gap={'8'}
        >
          Few Projects <FaProjectDiagram />
        </Heading>
      </Flex>

      <Flex w={'50%'} justifyContent={'space-evenly'}  py={'4'}  mb={'1rem'}>
        <Text
          fontSize={'1.2rem'}
          cursor={'pointer'}
          onClick={() => setFilteredProjects(allProjects)}
          fontWeight={'bold'}
          _hover={{ borderBottom: 'none' }}
        >
          All
        </Text>
        <Text
          fontSize={'1.2rem'}
          cursor={'pointer'}
          onClick={() => filterItem('recent')}
          fontWeight={'bold'}
          _hover={{ borderBottom: 'none' }}
        >
          Recent
        </Text>
        <Text
          fontSize={'1.2rem'}
          cursor={'pointer'}
          onClick={() => filterItem('ongoing')}
          fontWeight={'bold'}
          _hover={{ borderBottom: 'none' }}
        >
          Ongoing
        </Text>
      </Flex>
      <Flex
        h={'fit-content'}
        w={'full'}
        flexWrap={'wrap'}
        justifyContent={'space-evenly'}
        gap={['5', '2rem']}
        bgColor={'rgb(0, 30, 78)'}
        padding={'2rem'}
        borderRadius={'1rem'}
      >
        {filteredProjects.map((item) => (
          <Box
            w={['full', '', '20rem', '22rem']}
            h={'fit-content'}
            py={'4'}
            borderRadius={'1rem'}
            transition={'all 0.5s'}
            bgColor={'white'}
            _hover={{
              boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.7)',
            }}
          >
            <VStack>
              <Image w={'52'} src={item.img} cursor={'pointer'}></Image>
              <HStack>
                <a
                  href={item.gitHubURL}
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
                  href={item.hostURL}
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
              <Text fontWeight={'bold'} fontSize={'18'} py={'2'}>
                {item.title}
              </Text>
              <Text fontWeight={'semibold'}>{item.techStack}</Text>
            </VStack>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Projects;
