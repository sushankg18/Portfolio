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
  useColorMode,
  DrawerCloseButton
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  const smallScreenNavStyling = {
    padding: '2px 20px',
  };
  const backgroundColor = colorMode === 'dark' ? 'gray.800' : 'white';


  return (
    <Box
      position={'sticky'}
      boxShadow="0px 0px 10px rgba(0, 0, 0, 0.2)"
      backgroundColor={backgroundColor}
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
          fontSize={['1.3rem', '1.7rem', '1.7rem', '3rem']}
        >
          Sushank Gautam
        </Heading>

        <Flex
          gap={['','','8','10']}
          fontWeight={'bold'}
          paddingRight={['', '', '10', '20']}
          fontSize={['','','','18']}
          display={['none', 'flex']}
        >
          <HashLink to={'/#home'} className="hover-link">
            Home
          </HashLink>
          <HashLink to={'/#education'} className="hover-link">
            education
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
            <DrawerCloseButton />
            <DrawerBody>
              <Flex
                direction={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                gap={'3'}
                fontWeight={'semibold'}
                color={'teal.400'}
              >
                <HashLink onClick={onClose} to={'/#home'} style={smallScreenNavStyling}>
                  Home
                </HashLink>
                <HashLink onClick={onClose} to={'/#education'} style={smallScreenNavStyling}>
                education
                </HashLink>
                <HashLink onClick={onClose} to={'/#skills'} style={smallScreenNavStyling}>
                  Skills
                </HashLink>
                <HashLink onClick={onClose} to={'/#projects'} style={smallScreenNavStyling}>
                  Projects
                </HashLink>
                <HashLink onClick={onClose} to={'/#contact'} style={smallScreenNavStyling}>
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
