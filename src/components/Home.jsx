import {
  Text,
  Box,
  Flex,
  Heading,
  Image,
  VStack,
  Button,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import me from '../assets/Me.jpg';
import HTML from '../assets/icons8-html.svg';
import CSS from '../assets/icons8-css3.svg';
import JAVASCRIPT from '../assets/icons8-javascript.svg';
import TAILWIND from '../assets/icons8-tailwind-css.svg';
import REACT from '../assets/icons8-react-js.svg';
import GITHUB from '../assets/icons8-github.svg';
import JAVA from '../assets/icons8-java.svg';
import C from '../assets/icons8-c.svg';
import CHAKRA_UI from '../assets/ChakraUi.svg';
import SASS from '../assets/icons8-sass-avatar.svg';
import CPP from '../assets/icons8-c (1).svg';
import About from './Education';
import Projects from './Projects';
import Footer from '../components/Footer';
import resume from '../assets/resume.pdf';
const Home = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const allSkills = [
      {
        img: HTML,
        name: 'HTML',
      },
      {
        img: CSS,
        name: 'CSS',
      },
      {
        img: JAVASCRIPT,
        name: 'JAVASCRIPT',
      },
      {
        img: TAILWIND,
        name: 'TAILWIND',
      },
      {
        img: REACT,
        name: 'REACT JS',
      },
      {
        img: CHAKRA_UI,
        name: 'CHAKRA UI',
      },
      {
        img: SASS,
        name: 'SASS',
      },
      {
        img: GITHUB,
        name: 'GITHUB',
      },
      {
        img: JAVA,
        name: 'JAVA',
      },
      {
        img: C,
        name: 'C',
      },
      {
        img: CPP,
        name: 'C++',
      },
    ];
    setSkills(allSkills);
  }, []);
  return (
    <Box
      w={'100%'}
      h={['fit-content', '100%']}
      px={['5', '10']}
      py={['0', '0']}
      fontFamily={'Josefin Sans'}
    >
      <Flex
        justifyContent={'space-between'}
        h={['fit-content', 'fit-content']}
        alignItems={'center'}
        id="home"
        direction={['column', 'column']}
        paddingTop={['14', '20']}
      >
        <Image
          src={me}
          w={['48', '54', '62', '']}
          borderRadius={['80px 50px 70px 10px', 'full']}
          transition={'all 0.4s'}
          boxShadow={['0px 0px 20px rgba(0, 0, 0, 1)', 'none']}
          _hover={{
            boxShadow: '0px 0px 20px rgba(0, 0, 0, 1)',
          }}
        />
        <VStack
          w={['full', '', 'full', '70%']}
          alignItems={'flex-start'}
          spacing={'10'}
          m={['10', '5']}
        >
          <Text
            fontWeight={'semibold'}
            fontSize={'22'}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            alignSelf={'center'}
          >
            Hey There ! I'm
            <Heading fontSize={['30', '50']}>Sushank Gautam</Heading>
          </Text>
          <Text
            fontSize={['', '', '', '18']}
            letterSpacing={'wider'}
            lineHeight={'160%'}
          >
            👋 Hey there! I am a second year BCA student with a keen interest in
            web development. Being proficient in HTML, CSS, and JavaScript, I am
            good at crafting interesting user interfaces using{' '}
            <strong>React JS</strong> and
            <strong>Chakra UI.</strong> Find my projects and let’s do something
            amazing together! Happy to bring ideas to life through code.
          </Text>
          <a href={resume} download="resume">
            <Button
              colorScheme="purple"
              variant={'outline'}
              alignSelf={['center', 'center']}
            >
              Download resume
            </Button>
          </a>
        </VStack>
      </Flex>

      <About />

      <Box
        height={['fit-content', '', 'fit-content', 'fit-content']}
        px={['2', '', '14', '8']}
        id="skills"
        paddingTop={['20', '']}
        paddingBottom={['0', '5']}
      >
        <Flex justifyContent={'center'}>
          <Heading
            paddingBottom={['12', '10']}
            alignSelf={'center'}
            fontSize={['26', '38']}
            color={'purple.600'}
          >
            Some Of My Skills
          </Heading>
        </Flex>

        <Flex
          gap={'12'}
          w={'100%'}
          justifyContent={['space-evenly', '', 'space-evenly', 'stretch']}
          flexWrap={'wrap'}
          fontWeight={'semibold'}
        >
          {skills.map((i) => (
            <VStack cursor={'pointer'}>
              <Image src={i.img} boxSize={['5rem', '8rem']} />
              <Text>{i.name}</Text>
            </VStack>
          ))}
        </Flex>
      </Box>
      <Projects />
      <Footer />
    </Box>
  );
};

export default Home;
