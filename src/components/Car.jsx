import { Box, Text } from '@chakra-ui/react';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Car(props) {
  return (
    <>
      <Box className="flex items-center justify-center pt-16 gap-10">
        <Box className="flex">
          <Link to="../">
            <Text className="text-3xl font-semobold">Go Back</Text>
            <BsFillArrowLeftCircleFill className="text-4xl" />
          </Link>
        </Box>
        <Box className="flex flex-col items-center justify-center">
          <Text className="text-4xl py-4 font-semibold">{props.props.model}</Text>
          <img src={props.props.image_link} alt={props.props.id} />
        </Box>
      </Box>
    </>
  );
}
