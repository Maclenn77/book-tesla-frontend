import { Box, ListItem, UnorderedList } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { ViewMethod } from 'redux/view';

function NavigationPanel() {
  const dispatch = useDispatch();
  const view = useSelector((state) => state.ViewReducer);
  const login = localStorage.getItem('user_id');
  const changeView = (view) => {
    dispatch(ViewMethod(view));
  };

  const CurrentTab = (title) => {
    if (title === view) return true;
  };

  return (
    <Box className="md:hidden">
      <UnorderedList listStyleType="none">
        {CurrentTab('home') ? (
          <ListItem
            onClick={() => {
              changeView('home');
            }}
            className="cursor-pointer bg-[#98bf11] text-white rounded-lg mx-4 select-none py-6 pl-6 text-3xl font-semibold"
          >
            Home
          </ListItem>
        ) : (
          <ListItem
            onClick={() => {
              changeView('home');
            }}
            className="cursor-pointer select-none py-6 pl-6 text-3xl font-semibold"
          >
            Home
          </ListItem>
        )}
        {CurrentTab('reserve') ? (
          <ListItem
            onClick={() => {
              changeView('reserve');
            }}
            className="cursor-pointer bg-[#98bf11] text-white rounded-lg mx-4 select-none py-6 pl-6 text-3xl font-semibold"
          >
            Rent A car
          </ListItem>
        ) : (
          <ListItem
            onClick={() => {
              changeView('reserve');
            }}
            className="cursor-pointer select-none py-6 pl-6 text-3xl font-semibold"
          >
            Rent A car
          </ListItem>
        )}
        {CurrentTab('reservation') ? (
          <ListItem
            onClick={() => {
              changeView('reservation');
            }}
            className="cursor-pointer bg-[#98bf11] text-white rounded-lg mx-4 select-none py-6 pl-6 text-3xl font-semibold"
          >
            Reservations
          </ListItem>
        ) : (
          <ListItem
            onClick={() => {
              changeView('reservation');
            }}
            className="cursor-pointer select-none py-6 pl-6 text-3xl font-semibold"
          >
            Reservations
          </ListItem>
        )}
        {CurrentTab('add') ? (
          <ListItem
            onClick={() => {
              changeView('add');
            }}
            className="cursor-pointer bg-[#98bf11] text-white rounded-lg mx-4 select-none py-6 pl-6 text-3xl font-semibold"
          >
            Add A Car
          </ListItem>
        ) : (
          <ListItem
            onClick={() => {
              changeView('add');
            }}
            className="cursor-pointer  select-none py-6 pl-6 text-3xl font-semibold"
          >
            Add A Car
          </ListItem>
        )}
        {CurrentTab('remove') ? (
          <ListItem
            onClick={() => {
              changeView('remove');
            }}
            className="cursor-pointer bg-[#98bf11] text-white rounded-lg mx-4 select-none py-6 pl-6 text-3xl font-semibold"
          >
            Remove Car
          </ListItem>
        ) : (
          <ListItem
            onClick={() => {
              changeView('remove');
            }}
            className="cursor-pointer select-none py-6 pl-6 text-3xl font-semibold"
          >
            Remove Car
          </ListItem>
        )}
        {login && (
          <ListItem
            onClick={() => {
              localStorage.removeItem('user_id');
              window.location.reload();
            }}
            className="cursor-pointer text-red-500 select-none py-6 pl-6 text-3xl font-semibold"
          >
            LogOut
          </ListItem>
        )}
      </UnorderedList>
    </Box>
  );
}

export default NavigationPanel;
