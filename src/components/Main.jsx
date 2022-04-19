import { Box } from '@chakra-ui/react';
import logo from 'Assets/logo.png';
import NavigationPanel from 'layout/NavigationPanel';
import { useSelector } from 'react-redux';
import Carousel from './Carousel';
import Login from './Login';

export default function Main() {
  const login = useSelector((state) => state.AuthReducer);
  return (
    <>
      <Box className="flex">
        <Box className="w-3/12 h-screen">
          <img src={logo} className="w-40 pl-8" alt="logo" />
          <NavigationPanel />
        </Box>
        {login ? (
          <Box className="w-9/12 flex items-center h-screen">
            <Carousel />
          </Box>
        )
          : (
            <Box className="w-9/12  h-screen">
              <Login />
            </Box>
          )}
      </Box>
    </>
  );
}
