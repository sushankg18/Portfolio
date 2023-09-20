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
import {
  AiFillLinkedin,
  AiOutlineSend,
  AiOutlineGithub,
  AiFillInstagram,
  AiFillMail,
  AiFillHome,
  AiOutlineArrowUp,
  AiFillPhone,
} from 'react-icons/ai';
import { FaUniversity, FaProjectDiagram, FaCode } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { HashLink } from 'react-router-hash-link';
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
    <Box
      h={'fit-content'}
      px={['5', '', '1', '10']}
      paddingBottom={['3', '2', '', '3']}
    >
      <Flex
        h={'full'}
        direction={['column-reverse', 'row-reverse', 'row-reverse', 'row']}
        flexWrap={['nowrap', 'wrap', 'wrap-reverse', 'nowrap']}
        justifyContent={['', 'space-between', 'space-between', '']}
        gap={['20', '10', '', '0']}
        id="contact"
        paddingBottom={'5'}
      >
        <VStack w={['full', 'full', 'full', 'full']} {...styleItem} spacing={4}>
          <Heading color={'purple.600'} fontSize={['32', '', '22', '32']}>
            Contact Me
          </Heading>
          <Text alignSelf={['', '', 'center', 'flex-start']}>
            Wanna talk with me? Just drop a message!
          </Text>
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
              colorScheme="purple"
              variant={'outline'}
              gap={'5'}
            >
              Send <AiOutlineSend />
            </Button>
          </form>
        </VStack>

        <VStack w={['', '45%', '45%', 'full']} {...styleItem}>
          <Heading color={'purple.600'} fontSize={['32', '', '22', '32']}>
            Quick links
          </Heading>
          <Box {...styleItem} gap={'5'}>
            <VStack gap={'5'} fontWeight={'semibold'} alignItems={'flex-start'}>
              <HashLink to={'/#home'}>
                <Flex alignItems={'center'} gap={'5'} fontSize={'18'}>
                  <AiFillHome /> Home
                </Flex>
              </HashLink>
              <HashLink to={'/#education'}>
                <Flex alignItems={'center'} gap={'5'} fontSize={'18'}>
                  <FaUniversity /> Education
                </Flex>
              </HashLink>
              <HashLink to={'/#skills'}>
                <Flex alignItems={'center'} gap={'5'} fontSize={'18'}>
                  <FaCode /> Skills
                </Flex>
              </HashLink>
              <HashLink to={'/#projects'}>
                <Flex alignItems={'center'} gap={'5'} fontSize={'18'}>
                  <FaProjectDiagram /> Projects
                </Flex>
              </HashLink>
              <HashLink to={'/#contact'}>
                <Flex alignItems={'center'} gap={'5'} fontSize={'18'}>
                  <AiFillPhone /> Contact
                </Flex>
              </HashLink>
            </VStack>
          </Box>
        </VStack>

        <VStack w={['', '45%', '45%', 'full']} {...styleItem}>
          <Heading color={'purple.600'} fontSize={['32', '', '22', '32']}>
            Social Media
          </Heading>
          <Box {...styleItem} gap={'5'}>
            <a
              href="https://github.com/sushankg18"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Flex gap={'2'} cursor={'pointer'}>
                <AiOutlineGithub size={'30'} />
                <Text fontWeight={'semibold'}>Github</Text>
              </Flex>
            </a>

            <a
              href="https://www.linkedin.com/in/sushank-gautam-a99685249/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Flex gap={'2'} cursor={'pointer'}>
                <AiFillLinkedin size={'30'} />
                <Text fontWeight={'semibold'}>Linkedin</Text>
              </Flex>
            </a>

            <a
              href="https://www.instagram.com/sushankk_gotnolife/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Flex gap={'2'} cursor={'pointer'}>
                <AiFillInstagram size={'30'} />
                <Text fontWeight={'semibold'}>Instagram</Text>
              </Flex>
            </a>

            <a
              href="https://wa.me/+918368433001"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Flex gap={'2'} cursor={'pointer'}>
                <IoLogoWhatsapp size={'30'} />
                <Text fontWeight={'semibold'}>WhatsApp</Text>
              </Flex>
            </a>

            <a href={'mailto:sushankg4@gmail.com'} rel="noopener noreferrer">
              <Flex gap={'2'} cursor={'pointer'}>
                <AiFillMail size={'30'} />
                <Text fontWeight={'semibold'}>Email</Text>
              </Flex>
            </a>
          </Box>
        </VStack>
      </Flex>
      <Box w={'full'} {...styleItem} alignItems={'center'}>
        <AiOutlineArrowUp
          className="goupBtn"
          size={'48'}
          onClick={goUp}
          cursor={'pointer'}
        />

        <Text
          fontWeight={'semibold'}
          color={'purple.600'}
          fontSize={['9', '14']}
          letterSpacing={'widest'}
        >
          Copyright ©2023 | All Rights Reserved | Sushank Gautam
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
