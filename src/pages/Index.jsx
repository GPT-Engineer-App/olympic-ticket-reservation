import React from "react";
import { Box, Button, Container, Heading, SimpleGrid, Text, VStack, Image, useToast, Input, FormControl, FormLabel, IconButton } from "@chakra-ui/react";
import { FaTicketAlt, FaUserCog, FaShoppingCart, FaPlus } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  // Mock function to simulate adding a ticket offer to the cart
  const handleAddToCart = (offerName) => {
    toast({
      title: `Offer "${offerName}" added to cart.`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  // Mock function to simulate user authentication (for demonstration purposes)
  const handleAuthentication = () => {
    toast({
      title: "User authenticated.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl">
      <VStack spacing={8} py={10}>
        <Heading as="h1" size="xl">
          Jeux Olympiques de Paris 2024
        </Heading>
        <Image src="https://images.unsplash.com/photo-1627139853402-a730095065fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvbHltcGljc3xlbnwwfHx8fDE3MDg4MDc2NDl8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
        <Text fontSize="lg">Welcome to the official ticket reservation system for the Paris 2024 Olympic Games. Experience the thrill of the games and be a part of history!</Text>

        <Heading as="h2" size="lg">
          Ticket Offers
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {["Solo", "Duo", "Familiale"].map((offer) => (
            <Box key={offer} p={5} shadow="md" borderWidth="1px">
              <Heading as="h3" size="md">{`${offer} Ticket`}</Heading>
              <Text mt={4}>This offer includes tickets for {offer === "Solo" ? "1 person." : `${offer === "Duo" ? "2 people." : "4 people."}`}</Text>
              <Button leftIcon={<FaPlus />} colorScheme="blue" mt={8} onClick={() => handleAddToCart(offer)}>
                Add to Cart
              </Button>
            </Box>
          ))}
        </SimpleGrid>

        <Heading as="h2" size="lg">
          Administrator Area
        </Heading>
        <VStack align="stretch" spacing={4}>
          <Button leftIcon={<FaUserCog />} colorScheme="teal">
            Manage Offers
          </Button>
          <Button leftIcon={<FaShoppingCart />} colorScheme="teal">
            View Sales
          </Button>
        </VStack>

        <Heading as="h2" size="lg">
          User Authentication
        </Heading>
        <VStack align="stretch" spacing={4}>
          <FormControl id="email">
            <FormLabel>Email Address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Button colorScheme="blue" onClick={handleAuthentication}>
            Authenticate
          </Button>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
