import { Box, Button, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Input } from 'rsuite';
import { AddNewCar } from 'redux/cars';

function AddCar() {
  const [model, setmodel] = useState('');
  const [imgCar, setImgCar] = useState('');
  const [loading, setloading] = useState(false);

  const SubmitCar = async (model, imgCar) => {
    if (model !== '' && imgCar !== '') {
      const data = { model, imgCar };
      await setloading(true);
      await AddNewCar(data);
      await setloading(false);
    }
  };

  return (
    <Box className="px-6">
      <Text className="font-semibold text-4xl md:text-center pb-4" as="h2">
        Add A car
      </Text>
      <Text className="py-4" as="p">
        In this section, you can create a new Car.
      </Text>

      <Box>
        <Box className="py-4 border-b">
          <Text>Car Model</Text>
          <Input
            onChange={(e) => {
              setmodel(e);
            }}
            placeholder="Car Model"
          />
        </Box>
        <Box className="py-4 border-b">
          <Text>Car Image Link</Text>
          <Input
            onChange={(e) => {
              setImgCar(e);
            }}
            placeholder="Car Image Link"
          />
        </Box>

        <Button
          bgColor="#98bf11"
          color="white"
          className="my-4"
          variant="solid"
          isLoading={loading}
          onClick={() => { SubmitCar(model, imgCar); }}
        >
          Add A Car
        </Button>
      </Box>
    </Box>
  );
}

export default AddCar;
