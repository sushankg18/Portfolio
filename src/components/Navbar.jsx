import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { BiMenu } from 'react-icons/bi';
import { IoIosSettings } from 'react-icons/io';
import { HashLink } from 'react-router-hash-link';
import Temperature from './Temperature';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tempcomp, setTempComp] = useState(false);

  const openTempComp = () => {
    setTempComp(true)
  }
  const closeTempComp = () => {
    setTempComp(false)
  }

  const smallScreenNavStyling = {
    padding: '2px 20px',
  };

  return (
    <Box
      position={'sticky'}
      boxShadow="0px 0px 10px rgba(0, 0, 0, 0.2)"
      bgColor={'white'}
      top={'0'}
      overflow={'hidden'}
      zIndex={9}
      fontFamily={'Josefin Sans'}
    >
      <Flex
        w={'full'}
        height={'fit-content'}
        py={'3'}
        px={['2', '', '3', '5']}
        justifyContent={['space-between', '', 'space-between', 'space-between']}
        alignItems={'center'}
        flexDirection={['row-reverse', 'unset']}
      >
        <Heading
          color={'purple.600'}
          cursor={'pointer'}
          fontSize={['1.3rem', '1.7rem', '1.7rem', '3rem']}
        >
          Sushank Gautam
        </Heading>

        <Flex
          gap={['', '', '8', '10']}
          fontWeight={'bold'}
          paddingRight={['', '', '10', '10']}
          fontSize={['', '', '', '18']}
          display={['none', '', 'none', 'flex']}
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

          <IoIosSettings fontSize={'xx-large'} className="setting-icon" color='#6B46C1' onClick={openTempComp} />
        </Flex>

        <Button
          variant={'outline'}
          display={['flex', '', '', 'none']}
          onClick={onOpen}
        >
          <BiMenu size={'20'} />
        </Button>

        <Drawer placement={'top'} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <Flex
                direction={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                gap={'3'}
                fontWeight={'semibold'}
                color={'purple.600'}
              >
                <HashLink
                  onClick={onClose}
                  to={'/#home'}
                  style={smallScreenNavStyling}
                >
                  Home
                </HashLink>
                <HashLink
                  onClick={onClose}
                  to={'/#education'}
                  style={smallScreenNavStyling}
                >
                  education
                </HashLink>
                <HashLink
                  onClick={onClose}
                  to={'/#skills'}
                  style={smallScreenNavStyling}
                >
                  Skills
                </HashLink>
                <HashLink
                  onClick={onClose}
                  to={'/#projects'}
                  style={smallScreenNavStyling}
                >
                  Projects
                </HashLink>
                <HashLink
                  onClick={onClose}
                  to={'/#contact'}
                  style={smallScreenNavStyling}
                >
                  Contact
                </HashLink>
                <IoIosSettings fontSize={'xx-large'} className="setting-icon" color='#6B46C1' onClick={openTempComp} />
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        {tempcomp && <Temperature onClose={closeTempComp} />}

      </Flex>
    </Box>
  );
};

export default Navbar;
