import React, { useEffect, useState, useRef } from "react";
import {
  FontAwesomeIcon,
} from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./Style.css";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto:umairkhan.2102@gmail.com",
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
  const [scrolled, setScrolled] = useState(false);
  const prevScrollY = useRef(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
    
    if (currentScrollY > prevScrollY.current) {
      prevScrollY.current = currentScrollY;
      headerRef.current.style.transform = "translateY(-200px)";
    } else {
      prevScrollY.current = currentScrollY;
      headerRef.current.style.transform = "translateY(0)";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const socialLinks = socials.map((social, index) => {
    return (
      <Link to={social.url} className="links" target="_blank" key={index}>
        <FontAwesomeIcon icon={social.icon} size="2x" />
      </Link>
    );
  });

  const headerRef = useRef(null);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      ref={headerRef}
      transition="transform 0.3s ease-in-out"
      background="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <nav>{socialLinks}</nav>
          <nav>
            <HStack spacing={8}>
              <Link to="/#projects" onClick={handleClick("projects")}>
                Projects
              </Link>
              <Link to="/#contact-me" onClick={handleClick("contactme")}>
                Contact
              </Link>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
