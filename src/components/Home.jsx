import {
  Text,
  Box,
  Flex,
  Heading,
  Image,
  VStack,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import img1 from '../assets/icons8-html.svg';
import img2 from '../assets/icons8-css3.svg';
import img3 from '../assets/icons8-javascript.svg';
import img4 from '../assets/icons8-tailwind-css.svg';
import img5 from '../assets/icons8-react-js.svg';
import img6 from '../assets/icons8-git.svg';
import img7 from '../assets/icons8-github.svg';
import img8 from '../assets/icons8-java.svg';
import img9 from '../assets/icons8-c.svg';
import img10 from '../assets/ChakraUi.svg';
import img11 from '../assets/icons8-sass-avatar.svg';
import img12 from '../assets/icons8-c (1).svg';
import About from './Education';
import Projects from './Projects';
import img20 from '../assets/profile-pic (2).png';
import Footer from '../components/Footer'

const Home = () => {
  return (
    
    <Box w={'100%'} h={['fit-content', '100%']} px={['5','10']} py={['0','0']}>
      <Flex
        justifyContent={'space-between'}
        h={['fit-content', 'fit-content']}
        alignItems={'center'}
        id='home'
        direction={['column', 'column']}
        paddingTop={['14','20']}
      >
        <Image
          src={img20}
          w={['48','54','62','72']}
          borderRadius={['80px 50px 70px 10px', 'full']}
          transition={'all 0.4s'}
          boxShadow={'0px 0px 20px rgba(0, 0, 0, 1)'}
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
          <Text fontSize={['', '', '', '18']} letterSpacing={'wider'} lineHeight={'160%'}>
            I'm currently a <strong>BCA 2nd year </strong> student with a
            passion for technology and coding. <strong>JAVA</strong> is my
            preferred programming language, although I am well-versed in other
            programming languages such as <strong>C, C++, PYTHON. </strong>
            My experience extends to both areas including <strong>WEB DEVELOPMENT and ANDROID DEVELOPMENT. </strong>
          </Text>
          <Button
            colorScheme="purple"
            variant={'outline'}
            alignSelf={['center', 'center']}
          >
            Download resume
          </Button>
        </VStack>
      </Flex>

      <About />

      <Box
        height={['fit-content', '', 'fit-content', 'fit-content']}
        px={['2', '', '14', '8']}
        id="skills"
        paddingTop={['20','']}
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
          justifyContent={['space-evenly','','space-evenly','stretch']}
          flexWrap={'wrap'}
          fontWeight={'semibold'}
        >
          <VStack cursor={'pointer'}>
            <Image src={img1} boxSize={['5rem', '8rem']} />
            <Text>HTML</Text>
          </VStack>
          <VStack cursor={'pointer'}>
            <Image src={img2} boxSize={['5rem', '8rem']} />
            <Text>CSS</Text>
          </VStack>
          <VStack cursor={'pointer'}>
            <Image src={img3} boxSize={['5rem', '8rem']} />
            <Text>JAVASCRIPT</Text>
          </VStack>
          <VStack cursor={'pointer'}>
            <Image src={img4} boxSize={['5rem', '8rem']} />
            <Text>TAILWIND</Text>
          </VStack>
          <VStack cursor={'pointer'}>
            <Image src={img5} boxSize={['5rem', '8rem']} />
            <Text>REACT JS</Text>
          </VStack>
          <VStack cursor={'pointer'}>
            <Image src={img6} boxSize={['5rem', '8rem']} />
            <Text>GIT</Text>
          </VStack>
          <VStack cursor={'pointer'}>
            <Image src={img7} boxSize={['5rem', '8rem']} />
            <Text>GITHUB</Text>
          </VStack>
          <VStack cursor={'pointer'}>
            <Image src={img8} boxSize={['5rem', '8rem']} />
            <Text>JAVA</Text>
          </VStack>
          <VStack cursor={'pointer'}>
            <Image src={img9} boxSize={['5rem', '8rem']} />
            <Text>C</Text>
          </VStack>
          <VStack cursor={'pointer'}>
            <Image src={img10} boxSize={['5rem', '8rem']} />
            <Text>CHAKRA UI</Text>
          </VStack>
          <VStack cursor={'pointer'}>
            <Image src={img11} boxSize={['5rem', '8rem']} />
            <Text>SASS</Text>
          </VStack>
          <VStack cursor={'pointer'}>
            <Image src={img12} boxSize={['5rem', '8rem']} />
            <Text>C++</Text>
          </VStack>
        </Flex>
      </Box>
      <Projects />
      <Footer />
    </Box>
  );
};

export default Home;
