import * as CSS from "csstype";

type Props = {
  title: String;
};

const styles: CSS.Properties = {
  backgroundColor: "#416788",
  color: "white",
  padding: "20px 0",
  textAlign: "center",
  fontSize: "32px",
  letterSpacing: "0.175rem",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25",
};

const Header = ({ title }: Props) => {
  return <header style={styles}>{title}</header>;
};

export default Header;
