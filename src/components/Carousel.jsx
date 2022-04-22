import { Badge, Box, Image } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCars } from 'redux/cars';
import { Link } from 'react-router-dom';

SwiperCore.use([Navigation]);
export default function Carousel() {
  const Cars = useSelector((state) => state.CarsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars());
  }, []);

  return (
    <>
      <Swiper
        navigation
        className="mySwiper mt-24"
        slidesPerView="2"
      >
        {Cars?.map((item) => (
          <SwiperSlide key={item.id}>
            <Link to={`../${item.id}`}>
              <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image src={item.image_link} alt={item.imageAlt} />
                <Box p="6">
                  <Box display="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                      New
                    </Badge>
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="xs"
                      textTransform="uppercase"
                      ml="2"
                    >
                      76cu ft
                      {' '}
                      Cargo Space
                      &bull;
                      {' '}
                      330 mi
                      {' '}
                      Speed
                    </Box>
                  </Box>
                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    {item.model}
                  </Box>

                  <Box>
                    $41,940.00
                    <Box as="span" color="gray.600" fontSize="sm">
                      / wk
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Link>
          </SwiperSlide>
        ))}

      </Swiper>

    </>
  );
}
