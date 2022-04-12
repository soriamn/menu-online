import { Badge, Text } from "@chakra-ui/react";

type Props = {
  text: string;
  active?: boolean;
};

const FilterItem = (props: Props) => (
  <Badge
    variant={props.active ? "solid" : "outline"}
    backgroundColor={props.active ? "DarkBlue" : "white"}
    color={props.active ? "white" : "DarkBlue"}
    padding="2"
    borderRadius="50px"
    boxShadow="inset 0 0 0px 1px #416788"
  >
    <Text letterSpacing="0.175rem" fontSize="sm">
      {props.text}
    </Text>
  </Badge>
);

export default FilterItem;
