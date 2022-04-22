import { Box, Button, Text } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllCars, DeleteCar } from 'redux/cars';

function RemoveCar() {
  const Cars = useSelector((state) => state.CarsReducer);
  const [loading, setloading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (Cars.length === 0) {
      dispatch(getAllCars());
    }
  }, []);

  const hundleSubmit = async (id) => {
    await setloading(true);
    await DeleteCar(id);
    await setloading(false);
    dispatch(getAllCars());
  };

  return (
    <Box className="px-6">
      <Text className="font-semibold text-4xl md:text-center pb-4" as="h2">
        Remove A car
      </Text>
      <Text className="py-4" as="p">
        In this section, you can Remove any car you want.
      </Text>
      <Box className="flex flex-wrap">
        {Cars.map((item) => (
          <Box className="border p-2 flex flex-col items-center justify-center" key={item.id}>
            <Text>
              {item.model}
            </Text>
            <img className="w-44" src={item.image_link} alt={item.model} />
            <Button onClick={() => { hundleSubmit(item.id); }} isLoading={loading} variant="solid">Delete</Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default RemoveCar;
