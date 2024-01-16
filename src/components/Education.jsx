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
import { MdSchool } from "react-icons/md";
import img17 from '../assets/college-img.jpg';
import img18 from '../assets/school-img.jpeg';
const Education = () => {
  return (
    <Box h={['fit-content', 'fit-content']} paddingTop={'24'} id="education">
      <VStack w={'full'} height={'full'} gap={'10'} >
        <VStack>
          <Heading color={'purple.600'} fontSize={['28', '32', '32', '40']} display={'flex'} alignItems={'center'} gap={'5'}>
            Education <MdSchool   />
          </Heading>
          <Text fontSize={'1.1rem'}>"Education is the catalyst for individual growth, unlocking doors to endless possibilities."</Text>
        </VStack>
        <VStack w={'80%'} gap={['8', '12']} >
          <VStack w={'full'} p={['0', '3']} alignItems={'flex-start'} bgColor={'whitesmoke'}>
            <Flex direction={['column', '', 'row', 'row']} >
              <Box w={['16', '', '18', '36']} h={['16', '', '18', '36']} >
                <Image w={'full'} h={'full'} objectFit={'cover'} src={img17}/>
              </Box>
              <VStack
                alignItems={'flex-start'}
                px={['0', '5']}
                gap={['5', '', '', '1']}
              >
                <Text fontWeight={'bold'} fontSize={['18', '24']}>
                  Institute of Professional Excellence and Management
                </Text>
                <Text fontWeight={'semibold'} fontSize={['16', '18']}>
                  Bachelor's of Computer Application (BCA)
                </Text>
                <Text fontWeight={'semibold'} fontSize={['14', '18']} display={'flex'} gap={'1rem'}>
                  2022 - 2025 | <Text color={'purple'}> PURSUING</Text>
                </Text>
                <Text fontWeight={'semibold'} fontSize={['14', '18']}>
                  Ghaziabad U.P.
                </Text>
              </VStack>
            </Flex>
          </VStack>

          <VStack w={'full'} p={['', '3']} py={'3'} alignItems={['flex-start', '', 'flex-start', 'flex-start']} bgColor={'whitesmoke'}>
            <Flex direction={['column', 'column', 'row', 'row',]}>
            <Box w={['16', '', '18', '36']} h={['16', '', '18', '36']} >
                <Image w={'full'} h={'full'} objectFit={'cover'} src={img18}/>
              </Box>
              <VStack alignItems={['flex-start', 'flex-start', 'flex-start', 'flex-start',]} px={['0', '5']} gap={['5', '', '', '1']}>
                <Text fontWeight={'bold'} fontSize={['18', '24']}>
                  Kendriya Vidyalaya Sangathan
                </Text>
                <Text fontWeight={'semibold'} fontSize={['16', '18']} display={'flex'} gap={'1rem'}>
                  I to XII Std | <Text color={'purple'}>CBSE</Text>
                </Text>
                <Text fontWeight={'semibold'} fontSize={['14', '18']} display={'flex'} gap={'1rem'}>
                  2009 - 2022 | <Text color={'purple'}>COMPLETED</Text>
                </Text>
                <Text fontWeight={'semibold'} fontSize={['14', '18']}>
                  Ghaziabad U.P.
                </Text>
              </VStack>
              <HStack paddingBottom={['4', '0']} px={['0', '3']} alignSelf={'flex-start'}>
              </HStack>
            </Flex>
          </VStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Education;
