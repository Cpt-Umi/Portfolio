import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
    return (
        <VStack bg='white' color='blackAlpha.800' borderRadius={10} alignItems='left'>
            <Image
            src={imageSrc}
            alt="Project Image"
            borderRadius='25px'
            p={15}/>
            <Heading size='md' mb={2} ml={2}>{title}</Heading>
            <Text fontSize='md' ml={2}>{description}</Text>
            <Text ml={2} mb={2}><a href="/#">See more <FontAwesomeIcon icon={faArrowRight} size="1x"></FontAwesomeIcon></a></Text>
        </VStack>
    );
}

export default Card;