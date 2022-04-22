import { Box } from '@chakra-ui/react';
import logo from 'Assets/logo.png';
import NavigationPanel from 'layout/NavigationPanel';
import { useSelector } from 'react-redux';
import AddCar from './AddCar';
import Carousel from './Carousel';
import Login from './Login';
import MobileMenu from './MobileMenu';
import RemoveCar from './RemoveCar';
import RentalCars from './RentalCars';
import RentCar from './RentCar';

export default function Main() {
  const login = useSelector((state) => state.AuthReducer);
  const view = useSelector((state) => state.ViewReducer);

  return (
    <>
      <Box className="flex md:flex-col">
        <Box className="w-3/12 md:w-full h-screen md:h-full border-r drop-shadow-lg">
          <img src={logo} className="w-40 pl-8 md:hidden" alt="logo" />
          <Box className="hidden absolute md:block">
            <MobileMenu />
          </Box>
          <NavigationPanel />
        </Box>
        {login && (
          <Box className="w-9/12 md:w-full h-screen md:h-min flex items-center h-screen">
            {view === 'reserve' && <RentCar />}
            {view === 'home' && <Carousel />}
            {view === 'reservation' && <RentalCars />}
            {view === 'add' && <AddCar />}
            {view === 'remove' && <RemoveCar />}
          </Box>
        )}
        {!login && (
          <Box className="w-9/12 md:w-full h-screen">
            <Login />
          </Box>
        )}
      </Box>
    </>
  );
}
