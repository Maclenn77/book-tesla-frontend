/* eslint-disable array-callback-return */
import { Badge, Box, Image } from '@chakra-ui/react';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import cars from 'mock/CarouselData';

SwiperCore.use([Navigation]);

export default function Carousel() {
  return (
    <>
      <Swiper
        navigation
        className="mySwiper"
        slidesPerView="2"
      >
        {cars.map((item) => (
          <SwiperSlide key={item.title}>
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={item.imageUrl} alt={item.imageAlt} />
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
                    {item.cargo}
                    {' '}
                    Cargo Space
                    &bull;
                    {' '}
                    {item.speed}
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
                  {item.title}
                </Box>

                <Box>
                  {item.formattedPrice}
                  <Box as="span" color="gray.600" fontSize="sm">
                    / wk
                  </Box>
                </Box>
                <Box display="flex" mt="2" alignItems="center">
                  <Box as="span" ml="2" color="gray.600" fontSize="sm">
                    {item.reviewCount}
                    {' '}
                    reviews
                  </Box>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        ))}

      </Swiper>

    </>
  );
}
