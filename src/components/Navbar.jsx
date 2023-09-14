import React from 'react';
import {
  Box,
  Button,
  Text,
  Flex,
  Heading,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState('right');

  const smallScreenNavStyling = {
    borderBottom: '1px solid white',
    padding: '2px 20px',
    borderRadius: '10px',
  };

  return (
    <Box position={'sticky'} top={'0'} overflow={'hidden'} >
      <Flex
        w={'full'}
        height={'fit-content'}
        bgColor={'blackAlpha.200'}
        py={'3'}
        px={['2','','3', '10']}
        justifyContent={'space-between'}
        alignItems={'center'}
        flexDirection={['row-reverse', 'unset']}
      >
        <Heading color={'teal.500'} fontSize={['1.3rem','1.7rem','2rem', '3rem']}>
          Sushank Gautam
        </Heading>

        <Flex
          gap={'10'}
          fontWeight={'bold'}
          paddingRight={['','','10','20']}
          fontSize={'18'}
          display={['none', 'flex']}
        >
          <Link to={'/'}>Home</Link>
          <HashLink to={'/#about'}>About</HashLink>
          <HashLink to={'/#skills'}>Skills</HashLink>
          <HashLink to={'/#projects'}>Projects</HashLink>
        </Flex>

        <Button variant={'outline'} display={['flex', 'none']} onClick={onOpen}>
          <BiMenu size={'20'} />
        </Button>

        <Drawer placement={'top'} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader
              borderBottomWidth="1px"
              alignSelf={'center'}
              fontWeight={'bold'}
              fontSize={'24'}
            >
              CHECK
            </DrawerHeader>
            <DrawerBody>
              <Flex
                direction={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                gap={'3'}
                fontWeight={'semibold'}
                color={'teal.400'}
              >
                <Link to={'/'} style={smallScreenNavStyling}>
                  Home
                </Link>
                <HashLink to={'/#about'} style={smallScreenNavStyling}>
                  About
                </HashLink>
                <HashLink to={'/#skills'} style={smallScreenNavStyling}>
                  Skills
                </HashLink>
                <HashLink to={'/#projects'} style={smallScreenNavStyling}>
                  Projects
                </HashLink>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
};

export default Navbar;
