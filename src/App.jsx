import { Box } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllCars } from 'redux/cars';
import Car from 'components/Car';
import Main from './components/Main';

function App() {
  const Cars = useSelector((state) => state.CarsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (Cars.length === 0) {
      dispatch(getAllCars());
    }
  }, []);

  return (
    <Box>
      <Routes>
        <Route path="/" element={<Main />} />
        {Cars?.map((item) => (
          <Route key={item.id} path={`/${item.id}`} element={<Car props={item} />} />
        ))}
      </Routes>
    </Box>
  );
}

export default App;
