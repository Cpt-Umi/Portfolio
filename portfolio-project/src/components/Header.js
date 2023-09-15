import React from "react";
import {
  FontAwesomeIcon,
//   fontAwesomeIcon,
} from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
//   faMedium,
//   faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./Style.css";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: umairkhan.2102@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/Cpt-Umi",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/uk305/",
  },
];

const Header = () => {
  const social = socials.map((socials) => {
    return (
      <Link to={socials.url} className="links" target="_blank">
        <FontAwesomeIcon icon={socials.icon}  size="lg"/>
      </Link>
    );
  });

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3"
      transitionTimingFunction="ease-in-out"
      background="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <nav>{social}</nav>
          <nav>
            <HStack spacing={8}>{/* {Projects and contact me} */}</HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
