import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, Friend!";
const bio1 = "Hacker by Choice.";
const bio2 = "Specialised in Everything";

const LandingSection = () => {
  return (
    <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
    <Avatar name="Aiden Pierce" src='https://i.pravatar.cc/150?img=2' bg='teal.500' size='2xl'/>
    <Heading size='md' marginBottom='25px'>{greeting}</Heading>
    <Heading size='2xl'>{bio1}</Heading>
    <Heading size='lg'>{bio2}</Heading>
    </VStack>
  </FullScreenSection>
  );
};

export default LandingSection;