import {
  Box,
  Flex,
  Heading,
  VStack,
  Text,
  Image,
  HStack,
} from '@chakra-ui/react';
import React from 'react';
import img17 from '../assets/college.png';
import img18 from '../assets/kvs-logo.png';
const About = () => {

  return (
    <Box  h={['fit-content', 'fit-content']} paddingTop={'24'}  id="education" >
 
      <VStack w={'full'} height={'full'} gap={'10'} >
        <Heading color={'purple.600'}>Education</Heading>
        <VStack w={'full'} gap={['8','12']}>

          <VStack w={'full'} p={['0','3']} alignItems={'flex-start'} >
            <Flex direction={['column','row']}>
              <HStack paddingBottom={['4','0']}>
                <Image  w={['16','32']} src={img17} borderRadius={'full'} />
              </HStack>
              <VStack alignItems={'flex-start'} px={['0','5']} gap={['5','','','1']}>
                <Text fontWeight={'bold'} fontSize={['18','24']}>
                  Institute of Professional Excellence and Management
                </Text>
                <Text fontWeight={'semibold'} fontSize={['16','18']}>
                  Bachelor's of Computer Application (BCA)
                </Text>
                <Text fontWeight={'semibold'} fontSize={['14','18']}>
                  2022 - 2025
                </Text>
                <Text fontWeight={'semibold'} fontSize={['14','18']}>
                  Ghaziabad U.P.
                </Text>
              </VStack>
            </Flex>
          </VStack>


          <VStack w={'full'} p={['','3']} py={'3'} alignItems={['flex-start','','flex-start','flex-end']}>
            <Flex direction={['column-reverse','row-reverse','row-reverse','row']}>
              <VStack alignItems={['flex-start','flex-start','flex-start','flex-end']}px={['0','5']} gap={['5','','','1']}>
                <Text fontWeight={'bold'} fontSize={['18','24']}>
                  Kendriya Vidyalaya Sangathan
                </Text>
                <Text fontWeight={'semibold'} fontSize={['16','18']}>
                  I to XII Std.
                </Text>
                <Text fontWeight={'semibold'} fontSize={['14','18']}>
                  2009 - 2022
                </Text>
                <Text fontWeight={'semibold'} fontSize={['14','18']}>
                  Ghaziabad U.P.
                </Text>
              </VStack>
              <HStack paddingBottom={['4','0']}>
                <Image w={['16','32']} src={img18} borderRadius={'full'} />
              </HStack>
            </Flex>
          </VStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default About;
