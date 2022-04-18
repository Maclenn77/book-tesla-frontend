import { Box, ListItem, UnorderedList } from '@chakra-ui/react';

function NavigationPanel() {
  return (
    <Box>
      <UnorderedList listStyleType="none">
        <ListItem className="cursor-pointer select-none py-6 pl-6 text-3xl font-semibold">Home</ListItem>
        <ListItem className="cursor-pointer select-none py-6 pl-6 text-3xl font-semibold">Reserve</ListItem>
        <ListItem className="cursor-pointer select-none py-6 pl-6 text-3xl font-semibold">Reservations</ListItem>
      </UnorderedList>
    </Box>
  );
}

export default NavigationPanel;
