import {
  Box, Text,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRentals } from 'redux/rent';
import { getAllCars } from 'redux/cars';

function RentalCars() {
  const rentalCars = useSelector((state) => state.RentalCars);
  const Cars = useSelector((state) => state.CarsReducer);
  const [loading, setloading] = useState(false);
  const [filterdCars, setfilterdCars] = useState([]);

  const selectCar = (id) => Cars.filter((item) => item.id === id);

  const fillCars = (id) => {
    let carsArr = [];
    carsArr = filterdCars;
    const selectedCar = selectCar(id);
    carsArr.push(selectedCar[0]);
    setfilterdCars(carsArr);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRentals());
    dispatch(getAllCars());
  }, []);

  useEffect(() => {
    if (rentalCars.length !== 0 && Cars.length !== 0 && !loading) {
      rentalCars.map((item) => {
        fillCars(item.car_id);
      });
      setloading(true);
    }
  }, [rentalCars, Cars]);

  return (
    <Box className="pl-4 ">
      <Text className="font-semibold text-3xl md:text-center">Current Cars</Text>
      <Box className="flex gap-3">
        <Box className="flex flex-wrap md:justify-center">
          {filterdCars?.map((item) => (
            <Box className="py-4 border p-4 flex flex-col p-4 items-center justify-center" key={item.id}>
              <Text as="p">
                Model :
                {' '}
                {item.model}
              </Text>
              <img className="w-44" src={item.image_link} alt={item.model} />
              <Text as="p">
                Rental Date :
                {' '}
                {item.created_at}
              </Text>

            </Box>
          ))}
        </Box>

      </Box>
    </Box>
  );
}

export default RentalCars;
