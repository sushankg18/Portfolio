import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  VStack,
  Text,
  Image,
  Textarea,
  HStack,
} from '@chakra-ui/react';
import React from 'react';
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineSend,
  AiFillInstagram,
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiOutlineHome,
  AiOutlineUser,
  AiFillProject,
  AiFillContacts,
  AiOutlineCode,
  AiOutlineArrowUp,
} from 'react-icons/ai';
import { HashLink } from 'react-router-hash-link';
import img16 from '../assets/arrow-up.svg';
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
  const goUp = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Box h={'fit-content'}>
      <Flex
        h={'full'}
        direction={['column', 'row']}
        gap={['20', '0']}
        id="contact"
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
              gap={'5'}
            >
              Send <AiOutlineSend />
            </Button>
          </form>
        </VStack>

        <VStack w={'full'} {...styleItem}>
          <Heading>Quick links</Heading>

          <VStack gap={'5'} fontWeight={'semibold'} alignItems={'flex-start'}>
            <HashLink to={'/#home'}>
              <Flex alignItems={'center'} gap={'5'} fontSize={'18'}>
                <AiOutlineHome /> Home
              </Flex>
            </HashLink>
            <HashLink to={'/#about'}>
              <Flex alignItems={'center'} gap={'5'} fontSize={'18'}>
                <AiOutlineUser /> About
              </Flex>
            </HashLink>
            <HashLink to={'/#skills'}>
              <Flex alignItems={'center'} gap={'5'} fontSize={'18'}>
                <AiOutlineCode /> Skills
              </Flex>
            </HashLink>
            <HashLink to={'/#projects'}>
              <Flex alignItems={'center'} gap={'5'} fontSize={'18'}>
                <AiFillProject /> Projects
              </Flex>
            </HashLink>
            <HashLink to={'/#contact'}>
              <Flex alignItems={'center'} gap={'5'} fontSize={'18'}>
                <AiFillContacts /> Contact
              </Flex>
            </HashLink>
          </VStack>
        </VStack>

        <VStack w={'full'} {...styleItem}>
          <Heading>Social Media</Heading>
          <Box {...styleItem} gap={'5'}>
            <a href="https://github.com/sushankg18" target="_blank">
              <Flex gap={'2'} cursor={'pointer'}>
                <AiFillGithub size={'30'} />
                <Text fontWeight={'semibold'}>Github</Text>
              </Flex>
            </a>

            <a
              href="https://www.linkedin.com/in/sushank-gautam-a99685249/"
              target="_blank"
            >
              <Flex gap={'2'} cursor={'pointer'}>
                <AiFillLinkedin size={'30'} />
                <Text fontWeight={'semibold'}>Linkedin</Text>
              </Flex>
            </a>

            <a
              href="https://www.instagram.com/sushankk_gotnolife/"
              target="_blank"
            >
              <Flex gap={'2'} cursor={'pointer'}>
                <AiFillInstagram size={'30'} />
                <Text fontWeight={'semibold'}>Instagram</Text>
              </Flex>
            </a>

            <a href="https://wa.me/+918368433001" target="_blank">
              <Flex gap={'2'} cursor={'pointer'}>
                <AiOutlineWhatsApp size={'30'} />
                <Text fontWeight={'semibold'}>WhatsApp</Text>
              </Flex>
            </a>

            <a href={'mailto:sushankg4@gmail.com'}>
              <Flex gap={'2'} cursor={'pointer'}>
                <AiOutlineMail size={'30'} />
                <Text fontWeight={'semibold'}>Email</Text>
              </Flex>
            </a>
          </Box>
        </VStack>
      </Flex>
      <Box w={'full'} {...styleItem} alignItems={'center'}>
        <Image
          className="goupBtn"
          w={'14'}
          border={'1px solid black'}
          onClick={goUp}
          borderRadius={'full'}
          cursor={'pointer'}
          src={img16}
        ></Image>
        <Text fontWeight={'semibold'} >
          Copyright ©2023 | All Rights Reserved | Sushank Gautam
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
