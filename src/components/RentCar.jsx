import {
  Box, Button, Center, Select, Stack, Text,
} from '@chakra-ui/react';
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import cars from 'mock/CarouselData';

function RentCar() {
  return (
    <Center w="full" h="100vh" bg="#98bf11">
      <Stack
        className="w-1/2"
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
            <Select className="py-4">
              {cars.map((el) => (
                <option key={el.title}>{el.title}</option>
              ))}
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
              onChange={() => {}}
            />
            <Button className="py-4" variant="solid">
              Rent Now
            </Button>
          </Box>
        </Box>
      </Stack>
    </Center>
  );
}

export default RentCar;
