import { Box, Flex, Heading, VStack, Text, Image } from '@chakra-ui/react';
import React from 'react';
import img17 from '../assets/college.png';
import img18 from '../assets/kvslogo.jpg';
const About = () => {
  return (
    <Box h={['fit-content', '100vh']} py={'5'} id="about">
      <Flex
        h={'100%'}
        justifyContent={'center'}
        flexDirection={'column'}
        px={['0', '20']}
      >
        <Heading alignSelf={'center'} py={'10'}>
          About Me
        </Heading>

        <Flex
          w={'full'}
          h={'full'}
          gap={'10'}
          flexDirection={['column', 'row']}
        >
          <Box
            w={'full'}
            h={'fit-content'}
            py={'16'}
            border={'1px solid black'}
            className="college"
            position={'relative'}
            _before={{
              content: '""',
              width: 0,
              height: 0,
              borderLeft: '25px solid transparent',
              borderRight: '25px solid transparent',
              borderTop: '25px solid black',
              position: 'absolute',
              bottom: 0,
              top: 0,
              left: '45%',
            }}
          >
            <VStack
              h={'full'}
              borderTop={'none'}
              justifyContent={'center'}
              alignItems={'flex-start'}
              py={'10'}
            >
              <Image src={img17} alignSelf={'center'} w={'24'}></Image>
              <Heading>
                Institute of Professional and Excellence Management
              </Heading>
              <Text>Bachelor's of Computer Application</Text>
              <Text>2022 - 2025</Text>
              <Text>Ghaziabad Uttar Pradesh</Text>
            </VStack>
          </Box>
          <Box
            w={'full'}
            className="college"
            border={'1px solid black'}
            position={'relative'}
            _before={{
              content: '""',
              width: 0,
              height: 0,
              borderLeft: '25px solid transparent',
              borderRight: '25px solid transparent',
              borderBottom: '25px solid black',
              position: 'absolute',
              bottom: 0,
              left: '45%',
            }}
          >
            <VStack
              h={'full'}
              border={'1px solid black'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Heading>Kendriya Vidyalaya No.1</Heading>
              <Text>Bachelor's of Computer Application</Text>
              <Text>2022 - 2025</Text>
              <Text>Ghaziabad Uttar Pradesh</Text>
              <Image src={img18} w={'24'}></Image>
            </VStack>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default About;
