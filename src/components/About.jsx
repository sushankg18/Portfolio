import { Box, Container, Flex, Heading, VStack, Text } from '@chakra-ui/react';
import React from 'react';

const About = () => {
  return (
    <Box h={['fit-content','60vh']} py={'5'} id="#about">
      <Flex h={'100%'} justifyContent={'center'} flexDirection={'column'}>
        <Heading alignSelf={'center'} py={'10'}>About Me</Heading>

        <Flex w={'full'} h={'full'} gap={'10'} flexDirection={['column','row']}>
          <Box w={'full'}  >
            <VStack alignItems={'flex-start'}>
              <Heading>
                Institute of Professional and Excellence Management
              </Heading>
              <Text>Bachelor's of Computer Application</Text>
              <Text>2022 - 2025</Text>
              <Text>Ghaziabad Uttar Pradesh</Text>
            </VStack>
          </Box>
          <Box w={'full'} >
            <VStack alignItems={'flex-start'}>
              <Heading>Kendriya Vidyalaya No.1</Heading>
              <Text>Bachelor's of Computer Application</Text>
              <Text>2022 - 2025</Text>
              <Text>Ghaziabad Uttar Pradesh</Text>
            </VStack>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default About;
