import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  VStack,
  Text,
  Textarea,
} from '@chakra-ui/react';
import React from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram, AiOutlineWhatsApp,AiOutlineMail } from 'react-icons/ai';
const Footer = () => {
  const styleItem = {
    display: 'flex',
    gap: '10',
    flexDirection: 'column',
  };
  const inputStyling = {
    outline: 'none',
    focus: 'none',
    focusBorderColor: 'none',
  };
  return (
    <Box h={'fit-content'}>
      <Flex
        h={'full'}
        direction={['column', 'row']}
        gap={['20', '0']}
        paddingBottom={'5'}
      >
        <VStack w={'full'} {...styleItem} spacing={4}>
          <Heading>Contact Me</Heading>
          <Text>Wanna talk with me? Just drop a message!</Text>
          <form action="">
            <Input
              {...inputStyling}
              type={'email'}
              required
              placeholder="Enter Your Email"
            />
            <Textarea
              {...inputStyling}
              mt={4}
              rows={4}
              required
              placeholder="Enter message here"
            />
            <Button
              mt={4}
              type={'submit'}
              colorScheme="teal"
              variant={'outline'}
            >
              Submit
            </Button>
          </form>
        </VStack>
        <VStack w={'full'} {...styleItem}>
          <Heading>Social Media</Heading>
          <Box {...styleItem} gap={'5'}>
            <Flex gap={'2'} cursor={'pointer'}>
              <AiFillGithub size={'30'} />
              <Text fontWeight={'semibold'}>Github</Text>
            </Flex>
            <Flex gap={'2'} cursor={'pointer'}>
              <AiFillLinkedin size={'30'} />
              <Text fontWeight={'semibold'}>Linkedin</Text>
            </Flex>
            <Flex gap={'2'} cursor={'pointer'}>
              <AiFillInstagram size={'30'} />
              <Text fontWeight={'semibold'}>Instagram</Text>
            </Flex>
            <Flex gap={'2'} cursor={'pointer'}>
              <AiOutlineWhatsApp size={'30'} />
              <Text fontWeight={'semibold'}>WhatsApp</Text>
            </Flex>
            <Flex gap={'2'} cursor={'pointer'}>
              <AiOutlineMail size={'30'} />
              <Text fontWeight={'semibold'}>Email</Text>
            </Flex>
          </Box>
        </VStack>
      </Flex>
      <Box w={'full'} {...styleItem} >
        <Text alignSelf={'center'} fontWeight={'semibold'}>Copyright ©2023 | All Rights Reserved | Sushank Gautam</Text>
      </Box>
    </Box>
  );
};

export default Footer;
