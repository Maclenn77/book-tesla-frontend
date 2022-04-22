import {
  Box, Button, Center, Select, Stack, Text,
} from '@chakra-ui/react';
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllCars } from 'redux/cars';
import { AddRental } from 'redux/rent';

function RentCar() {
  const [model, setmodel] = useState();
  const [date, setdate] = useState('');
  const [location, setlocation] = useState('');
  const [loading, setloading] = useState(false);

  const Cars = useSelector((state) => state.CarsReducer);
  const login = useSelector((state) => state.AuthReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    if (Cars.length === 0) {
      dispatch(getAllCars());
    }
  }, []);

  const hundleSubmit = async (model, location, date, userId) => {
    const data = {
      model, location, date, userId,
    };
    if (model !== '' && location !== '' && date !== '') {
      await setloading(true);
      await AddRental(data);
      await setloading(false);
    }
  };

  return (
    <Center w="full" h="100vh" bg="#98bf11">
      <Stack
        className="w-1/2 md:w-10/12"
        boxShadow="md"
        bg="whiteAlpha.900"
        p="20"
        rounded="md"
      >
        <Box className="flex flex-col items-center">
          <Box className="flex flex-col items-center">
            <Text className="font-semibold text-3xl py-4" as="h2">
              Rent A Tesla Car
            </Text>
            <Text className="py-4" as="p">
              In this section you can rent a car Please Select car type from the list
              below and choose the rental period.
            </Text>
            <Select onChange={(e) => { setmodel(e.target.value); }} className="py-4">
              {Cars?.map((el) => (
                <option value={el.id} key={el.model}>{el.model}</option>
              ))}
            </Select>

            <Text className="py-4" as="p">
              Please Also Select a location for the rental car
            </Text>
            <Select onChange={(e) => { setlocation(e.target.value); }} className="py-4">
              <option>New York</option>
              <option>San Francisco</option>
              <option>Los Angeles</option>
              <option>Chicago</option>
              <option>Florida</option>
            </Select>
            <Text className="py-4">
              Please select the Check-in date and the Check-out date to reserve your
              room.
            </Text>
            <Text className="font-semibold py-4">Rent date</Text>
            <DateRangePicker
              className="py-2"
              placeholder="Select Date Range..."
              format="dd/MM/yyyy HH:mm"
              onChange={(e) => { setdate(e[0]); }}
            />
            <Button isLoading={loading} onClick={() => { hundleSubmit(model, date, location, login); }} className="py-4" variant="solid">
              Rent Now
            </Button>
          </Box>
        </Box>
      </Stack>
    </Center>
  );
}

export default RentCar;
