import { Box } from '@chakra-ui/react';
import logo from 'Assets/logo.png';
import NavigationPanel from 'layout/NavigationPanel';
import { useSelector } from 'react-redux';
import Carousel from './Carousel';
import Login from './Login';
import RentCar from './RentCar';

export default function Main() {
  const login = useSelector((state) => state.AuthReducer);
  const view = useSelector((state) => state.ViewReducer);

  return (
    <>
      <Box className="flex">
        <Box className="w-3/12 h-screen border-r drop-shadow-lg">
          <img src={logo} className="w-40 pl-8" alt="logo" />
          <NavigationPanel />
        </Box>
        {login ? (
          <Box className="w-9/12 h-screen flex items-center h-screen">
            {view === 'reserve' && <RentCar />}
            {view === 'home' && <Carousel />}
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
