import React from 'react';
import { useColorMode, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ColorModeSwitcher = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark'; // Check if it's currently in dark mode
  const SwitchIcon = isDark ? FaSun : FaMoon;

  return (
    <IconButton
      variant="ghost"
      pos="fixed"
      top={[16,4]}
      right={4}
      color="current"
      onClick={toggleColorMode} // Note the corrected onClick spelling
      icon={<SwitchIcon />}
      {...props}
      opacity={'0.5'}
      zIndex={10} // Remove the extra 'i' character
    />
  );
};

export default ColorModeSwitcher;
