import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Cunia';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('./fonts/Cunia.ttf');
      }
      `}
  />
);

export default Fonts;
