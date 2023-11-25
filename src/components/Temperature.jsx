import {
  Box,
  Flex,
  VStack,
  Text,
  Button,
  Input,
} from '@chakra-ui/react';
import { IoIosClose, IoMdSearch } from 'react-icons/io';
import tempbg from '../assets/temp-bg.jpg';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Temperature = ({ onClose }) => {
  const [data, setData] = useState({});
  const [cityName, setCityName] = useState('');

  const API_KEY = '124270dbe3c5095c18474a42500402e3';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [cityName, API_KEY]);

  const dateBuilder = d => {
    let months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    let days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  const handleInputChange = e => {
    setCityName(e.target.value);
  };
  const handleRender = () => {
    const show = document.getElementById('show');
    if (cityName === '') {
      alert('please fill city name ');
      show.style.display = 'none';
    } else {
      show.style.display = 'flex';
      setCityName('');
    }
  };

  return (
    <Box
      position={'fixed'}
      top={['5rem', '5rem', '5rem', '7rem']}
      right={['1rem', '2rem', '2.5rem', '3rem']}
      borderRadius={'md'}
      color={'black'}
      w={['72', '70', '80', '96']}
      height={['md', 'md', 'md', 'xl']}
      fontFamily={'Josefin Sans'}
      background={`url(${tempbg})`}
      backgroundSize={'cover'}
      backgroundRepeat={'no-repeat'}
    >
      <VStack h={'100%'}>
        <Flex
          borderBottom={'2px solid white'}
          w={'full'}
          justifyContent={'space-between'}
          py={'2'}
          px={'6'}
          alignItems={'center'}
        >
          <Text
            fontWeight={'700'}
            fontSize={['large', 'large', 'x-large', '3xl']}
            color={'white'}
          >
            Today's Weather
          </Text>
          <Button w={'fit-content'} onClick={onClose} variant={'unstyled'}>
            <IoIosClose fontSize={'xx-large'} />
          </Button>
        </Flex>

        <VStack w={'full'} h={'full'} alignItems={'center'} py={'4'} px={'4'}>
          <Flex
            border={'1px solid gray'}
            alignItems={'center'}
            px={'4'}
            borderRadius={'md'}
            py={'1'}
          >
            <Input
              type="text"
              placeholder="search city.."
              value={cityName}
              onChange={handleInputChange}
              border={'none'}
              color={'white'}
              style={{
                background: 'none',
                height: '2rem',
                fontSize: '1.2rem',
                fontWeight: '400',
              }}
              focusBorderColor="transparent"
              _focus={{
                boxShadow: 'none',
              }}
            />
            <IoMdSearch
              cursor={'pointer'}
              fontSize={'22px'}
              onClick={handleRender}
            />
          </Flex>

          <VStack
            w={'full'}
            height={'100%'}
            gap={['4', '4', '4', '6']}
            justifyContent={'center'}
            display={'none'}
            id="show"
            color={'white'}
          >
            <Text fontSize={['', '', 'large', 'x-large']}>
              {dateBuilder(new Date())}
            </Text>
            <Text fontSize={['', '', 'large', 'x-large']}>
              {data.name} | {data.sys && data.sys.country}
            </Text>
            <Flex w={'24'} h={'16'} alignItems={'center'} justifyContent={'center'} borderRadius={"10px"} border={'1px solid white'}>
              <Text fontSize={['', '', 'large', 'x-large']}>
                {data.main && (data.main.temp - 273.15).toFixed(0)} °C
              </Text>
            </Flex>
            <Text fontSize={['', '', 'large', 'x-large']} textTransform={'capitalize'}>
              weather : {data.weather && data.weather[0].description}
            </Text>
          </VStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Temperature;
