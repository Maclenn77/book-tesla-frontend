import { Box } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import Login from 'components/Login';
import Main from './components/Main';

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Box>
  );
}

export default App;
