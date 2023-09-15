import React from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const smallScreenNavStyling = {
    borderBottom: '1px solid white',
    padding: '2px 20px',
    borderRadius: '10px',
  };

  return (
    <Box
      position={'sticky'}
      boxShadow="0px 0px 10px rgba(0, 0, 0, 0.2)"
      top={'0'}
      overflow={'hidden'}
      zIndex={9}
    >
      <Flex
        w={'full'}
        height={'fit-content'}
        py={'3'}
        px={['2', '', '3', '10']}
        justifyContent={'space-between'}
        alignItems={'center'}
        flexDirection={['row-reverse', 'unset']}
      >
        <Heading
          color={'teal.500'}
          cursor={'pointer'}
          fontSize={['1.3rem', '1.7rem', '2rem', '3rem']}
        >
          Sushank Gautam
        </Heading>

        <Flex
          gap={'10'}
          fontWeight={'bold'}
          paddingRight={['', '', '10', '20']}
          fontSize={'18'}
          display={['none', 'flex']}
        >
          <HashLink to={'/#home'} className="hover-link">
            Home
          </HashLink>
          <HashLink to={'/#about'} className="hover-link">
            About
          </HashLink>
          <HashLink to={'/#skills'} className="hover-link">
            Skills
          </HashLink>
          <HashLink to={'/#projects'} className="hover-link">
            Projects
          </HashLink>
          <HashLink to={'/#contact'} className="hover-link">
            Contact
          </HashLink>
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
                <HashLink to={'/#contact'} style={smallScreenNavStyling}>
                  Contact
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
