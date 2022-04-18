import {
  Box,
  Button,
  Center, Checkbox, Heading, Image, Input, Stack, Text,
} from '@chakra-ui/react';
import { ErrorMessage, Form, Formik } from 'formik';
import logo from 'Assets/logo.png';
import { loginSchema } from 'configs/formsSchemas';

const Login = () => (
  <Center h="100vh" bg="#98bf11">
    <Stack className="w-1/2" boxShadow="md" bg="whiteAlpha.900" p="20" rounded="md">
      <Image src={logo} maxW="150px" mx="auto" />
      <Heading as="h1">Log in</Heading>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={() => {
          null;
        }}
        validationSchema={loginSchema}
      >
        {({ handleChange, handleSubmit, values }) => (
          <Form className="w-full" onSubmit={handleSubmit}>
            <Box className="py-4">
              <Text
                variant="p"
                className="text-dark-gray font-medium text-md"
              >
                Email
              </Text>
              <Input
                type="email"
                name="email"
                className="font-medium py-4"
                variant="filled"
                placeholder="Email"
                onChange={handleChange}
                value={values.email}
              />
              <ErrorMessage
                className="mt-2 rounded-lg py-2 px-5 text-red-800"
                name="email"
                component="div"
              />
            </Box>
            <Box className="flex justify-between">
              <Checkbox colorScheme="gray">Remeber Me</Checkbox>
              <Text
                variant="p"
                className="text-dark-gray font-medium text-md"
              >
                Forgot Password?
              </Text>
            </Box>
            <Box className="flex justify-between pt-12">
              <Button justifyContent="center" variant="outline" type="submit">
                Login
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Stack>
  </Center>
);
export default Login;
