import { Box, Flex, VStack, Text, Button } from '@chakra-ui/react';
import { IoIosClose } from 'react-icons/io';

const Temperature = ({ onClose }) => {
  return (
    <Box
      position={'fixed'}
      top={['5rem','5rem','5rem','7rem']}
      right={['1rem','2rem','2.5rem','3rem']}
      borderRadius={'md'}
      bgColor={'#fbb348'}
      color={'black'}
      zIndex={'99'}
      w={['72','70','80','96']}
      height={['md','md','md','xl']}
      fontFamily={'Josefin Sans'}
      className="app"
    >
      <VStack>
        <Flex
          borderBottom={'2px solid white'}
          w={'full'}
          justifyContent={'space-between'}
          py={'2'}
          px={'6'}
          alignItems={'center'}
        >
          <Text fontWeight={'700'} fontSize={['large','large','x-large','xx-large']}>
            Weather Info
          </Text>
          <Button w={'fit-content'} onClick={onClose}>
            <IoIosClose fontSize={'xx-large'} />
          </Button>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Temperature;
