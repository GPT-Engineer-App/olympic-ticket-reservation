import React from "react";
import { Box, Container, Heading, VStack } from "@chakra-ui/react";

const Offers = () => {
  return (
    <Container maxW="container.xl">
      <VStack spacing={8} py={10}>
        <Heading as="h1" size="xl">
          Ticket Offers
        </Heading>
        {/* Placeholder content */}
        <Box>
          <Heading as="h2" size="lg">
            This is the Offers Page
          </Heading>
        </Box>
      </VStack>
    </Container>
  );
};

export default Offers;
