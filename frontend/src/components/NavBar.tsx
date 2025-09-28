import { HStack, Image } from "@chakra-ui/react";

import {ColorModeSwitch} from "./ColorModeSwitch";
import logo from "../assets/React-icon.svg.png";

export const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};