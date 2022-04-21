import { Box, ListItem, UnorderedList } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { ViewMethod } from 'redux/view';

function NavigationPanel() {
  const dispatch = useDispatch();

  const changeView = (view) => {
    dispatch(ViewMethod(view));
  };

  return (
    <Box>
      <UnorderedList listStyleType="none">
        <ListItem onClick={() => { changeView('home'); }} className="cursor-pointer select-none py-6 pl-6 text-3xl font-semibold">
          Home
        </ListItem>
        <ListItem onClick={() => { changeView('reserve'); }} className="cursor-pointer select-none py-6 pl-6 text-3xl font-semibold">
          Reserve
        </ListItem>
        <ListItem className="cursor-pointer select-none py-6 pl-6 text-3xl font-semibold">
          Reservations
        </ListItem>
      </UnorderedList>
    </Box>
  );
}

export default NavigationPanel;
