import { motion } from "framer-motion";

const BtnLeft = () => {
  return (
    <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 26">
      <polygon
        points="2.25 8.25 19.51 25.35 83.69 25.35 87.75 20.77 87.75 8.31 44.08 8.31 36.34 .65 9.93 .65 2.25 8.25"
        fill="#f5f5f5"
        stroke="#000"
        strokeWidth=".25"
      />
      <polygon
        points="5.29 11.27 17.53 23.37 17.53 20.09 8.43 11.16 5.29 11.27"
        fill="#db2777"
        stroke="#000"
        strokeWidth=".25"
      />
      <polyline
        points="9.93 .65 12.07 2.79 32.52 2.79"
        fill="none"
        stroke="#000"
        strokeWidth=".25"
      />
      <polyline
        points="87.75 13.95 79.79 21.91 31.55 21.91 28.16 25.31"
        fill="none"
        stroke="#000"
        strokeWidth=".25"
      />
    </motion.svg>
  );
};

export default BtnLeft;
