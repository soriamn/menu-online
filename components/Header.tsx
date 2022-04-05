import { Box } from "@chakra-ui/react";
import theme from "../constants/theme";

type Props = {
  title: String;
};

const Header = ({ title }: Props) => {
  return (
    <Box
      bgColor={theme.colors.DarkBlue}
      color={theme.colors.White}
      textAlign="center"
      fontSize="3xl"
      paddingBottom="4"
      paddingTop="4"
      boxShadow="lg"
      letterSpacing="0.175rem"
      as="header"
    >
      {title}
    </Box>
  );
};

export default Header;
