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
import img0 from '../assets/Picsart_23-06-16_13-04-01-011.jpg';
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
import Footer from './Footer';
import About from './About'

const Home = () => {
  return (
    <Box w={'100%'} h={['fit-content', '100%']} p={'10'}>
      <Flex
        justifyContent={'space-between'}
        h={['fit-content', 'fit-content']}
        alignItems={'center'}
        direction={['column', 'column']}
      >
        <Image
          src={img0}
          w={['40', '', '48', '60']}
          h={['40', '', '48', '60']}
          borderRadius={['80px 50px 70px 10px', 'full']}
        />
        <VStack
          w={['full', '', 'full', '70%']}
          alignItems={'flex-start'}
          spacing={'14'}
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
            Hey I'm
            <Heading fontSize={['30', '50']}>Sushank Gautam</Heading>
          </Text>
          <Text fontSize={'20'} lineHeight={'160%'}>
            I'm currently a <strong>BCA 2nd year </strong> student with a
            passion for technology and coding. <strong>JAVA</strong> is my
            preferred programming language, although I am well-versed in other
            programming languages such as <strong>C++, PYTHON , C#. </strong>
            My experience extends to both areas including{' '}
            <strong>WEB DEVELOPMENT and ANDROID DEVELOPMENT. </strong>
          </Text>
          <Button
            colorScheme="teal"
            variant={'outline'}
            alignSelf={['center', 'flex-end']}
          >
            Download resume
          </Button>
        </VStack>
      </Flex>

      
        <About />
      

      <Box
        height={['fit-content','','fit-content', '100vh']}
        p={['2','','14', '8']}
        id="#skills"
        paddingBottom={['14', '0']}
      >
        <Flex justifyContent={'center'}>
          <Heading
            paddingBottom={['12', '10']}
            alignSelf={'center'}
            fontSize={['26', '38']}
          >
            Some Of My Skills
          </Heading>
        </Flex>

        <Flex
          gap={'12'}
          w={'100%'}
          justifyContent={'space-evenly'}
          flexWrap={'wrap'}
          fontWeight={'semibold'}
        >
          <VStack>
            <Image src={img1} boxSize={['5rem', '8rem']} cursor={'pointer'} />
            <Text>HTML</Text>
          </VStack>
          <VStack>
            <Image src={img2} boxSize={['5rem', '8rem']} cursor={'pointer'} />
            <Text>CSS</Text>
          </VStack>
          <VStack>
            <Image src={img3} boxSize={['5rem', '8rem']} cursor={'pointer'} />
            <Text>JAVASCRIPT</Text>
          </VStack>
          <VStack>
            <Image src={img4} boxSize={['5rem', '8rem']} cursor={'pointer'} />
            <Text>TAILWIND</Text>
          </VStack>
          <VStack>
            <Image src={img5} boxSize={['5rem', '8rem']} xcursor={'pointer'} />
            <Text>REACT JS</Text>
          </VStack>
          <VStack>
            <Image src={img6} boxSize={['5rem', '8rem']} cursor={'pointer'} />
            <Text>GIT</Text>
          </VStack>
          <VStack>
            <Image src={img7} boxSize={['5rem', '8rem']} cursor={'pointer'} />
            <Text>GITHUB</Text>
          </VStack>
          <VStack>
            <Image src={img8} boxSize={['5rem', '8rem']} cursor={'pointer'} />
            <Text>JAVA</Text>
          </VStack>
          <VStack>
            <Image src={img9} boxSize={['5rem', '8rem']} cursor={'pointer'} />
            <Text>C</Text>
          </VStack>
          <VStack>
            <Image src={img10} boxSize={['5rem', '8rem']} cursor={'pointer'} />
            <Text>CHAKRA UI</Text>
          </VStack>
          <VStack>
            <Image src={img11} boxSize={['5rem', '8rem']} cursor={'pointer'} />
            <Text>SASS</Text>
          </VStack>
          <VStack>
            <Image src={img12} boxSize={['5rem', '8rem']} cursor={'pointer'} />
            <Text>C++</Text>
          </VStack>
        </Flex>
      </Box>

      <Footer />
    </Box>
  );
};

export default Home;
