import { Badge, Box, Image } from '@chakra-ui/react';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

SwiperCore.use([Navigation]);

const property = {
  imageUrl: 'https://bit.ly/2Z4KKcF',
  imageAlt: 'Rear view of modern home with pool',
  beds: 3,
  baths: 2,
  title: 'Modern home in city center in the heart of historic Los Angeles',
  formattedPrice: '$1,900.00',
  reviewCount: 34,
  rating: 4,
};

export default function Carousel() {
  return (
    <>
      <Swiper
        navigation
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 1,
          },
          1500: {
            slidesPerView: 2,
            spaceBetween: 1,
          },
        }}
      >

        <>
          <SwiperSlide>
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={property.imageUrl} alt={property.imageAlt} />

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
                    {property.beds}
                    {' '}
                    beds &bull;
                    {' '}
                    {property.baths}
                    {' '}
                    baths
                  </Box>
                </Box>

                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >
                  {property.title}
                </Box>

                <Box>
                  {property.formattedPrice}
                  <Box as="span" color="gray.600" fontSize="sm">
                    / wk
                  </Box>
                </Box>

                <Box display="flex" mt="2" alignItems="center">
                  <Box as="span" ml="2" color="gray.600" fontSize="sm">
                    {property.reviewCount}
                    {' '}
                    reviews
                  </Box>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide
            style={{ display: 'flex', float: 'right', direction: 'ltr' }}
          >
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={property.imageUrl} alt={property.imageAlt} />

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
                    {property.beds}
                    {' '}
                    beds &bull;
                    {' '}
                    {property.baths}
                    {' '}
                    baths
                  </Box>
                </Box>

                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >
                  {property.title}
                </Box>

                <Box>
                  {property.formattedPrice}
                  <Box as="span" color="gray.600" fontSize="sm">
                    / wk
                  </Box>
                </Box>

                <Box display="flex" mt="2" alignItems="center">
                  <Box as="span" ml="2" color="gray.600" fontSize="sm">
                    {property.reviewCount}
                    {' '}
                    reviews
                  </Box>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide
            style={{ display: 'flex', float: 'right', direction: 'ltr' }}
          >
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={property.imageUrl} alt={property.imageAlt} />

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
                    {property.beds}
                    {' '}
                    beds &bull;
                    {' '}
                    {property.baths}
                    {' '}
                    baths
                  </Box>
                </Box>

                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >
                  {property.title}
                </Box>

                <Box>
                  {property.formattedPrice}
                  <Box as="span" color="gray.600" fontSize="sm">
                    / wk
                  </Box>
                </Box>

                <Box display="flex" mt="2" alignItems="center">
                  <Box as="span" ml="2" color="gray.600" fontSize="sm">
                    {property.reviewCount}
                    {' '}
                    reviews
                  </Box>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide
            style={{ display: 'flex', float: 'right', direction: 'ltr' }}
          >
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={property.imageUrl} alt={property.imageAlt} />

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
                    {property.beds}
                    {' '}
                    beds &bull;
                    {' '}
                    {property.baths}
                    {' '}
                    baths
                  </Box>
                </Box>

                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >
                  {property.title}
                </Box>

                <Box>
                  {property.formattedPrice}
                  <Box as="span" color="gray.600" fontSize="sm">
                    / wk
                  </Box>
                </Box>

                <Box display="flex" mt="2" alignItems="center">
                  <Box as="span" ml="2" color="gray.600" fontSize="sm">
                    {property.reviewCount}
                    {' '}
                    reviews
                  </Box>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide
            style={{ display: 'flex', float: 'right', direction: 'ltr' }}
          >
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={property.imageUrl} alt={property.imageAlt} />

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
                    {property.beds}
                    {' '}
                    beds &bull;
                    {' '}
                    {property.baths}
                    {' '}
                    baths
                  </Box>
                </Box>

                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >
                  {property.title}
                </Box>

                <Box>
                  {property.formattedPrice}
                  <Box as="span" color="gray.600" fontSize="sm">
                    / wk
                  </Box>
                </Box>

                <Box display="flex" mt="2" alignItems="center">
                  <Box as="span" ml="2" color="gray.600" fontSize="sm">
                    {property.reviewCount}
                    {' '}
                    reviews
                  </Box>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide
            style={{ display: 'flex', float: 'right', direction: 'ltr' }}
          >
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={property.imageUrl} alt={property.imageAlt} />

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
                    {property.beds}
                    {' '}
                    beds &bull;
                    {' '}
                    {property.baths}
                    {' '}
                    baths
                  </Box>
                </Box>

                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >
                  {property.title}
                </Box>

                <Box>
                  {property.formattedPrice}
                  <Box as="span" color="gray.600" fontSize="sm">
                    / wk
                  </Box>
                </Box>

                <Box display="flex" mt="2" alignItems="center">
                  <Box as="span" ml="2" color="gray.600" fontSize="sm">
                    {property.reviewCount}
                    {' '}
                    reviews
                  </Box>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        </>
      </Swiper>

    </>
  );
}
