import { motion } from "framer-motion";

const BtnRigt = () => {
  return (
    <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 26">
      <polygon
        points="87.75 8.25 70.49 25.35 6.31 25.35 2.25 20.77 2.25 8.31 45.92 8.31 53.66 .65 80.07 .65 87.75 8.25"
        fill="#f5f5f5"
        stroke="#000"
        strokeWidth=".25"
      />
      <polygon
        points="84.71 11.27 72.47 23.37 72.47 20.09 81.57 11.16 84.71 11.27"
        fill="#db2777"
        stroke="#000"
        strokeWidth=".25"
      />
      <polyline
        points="80.07 .65 77.93 2.79 57.48 2.79"
        fill="none"
        stroke="#000"
        strokeWidth=".25"
      />
      <polyline
        points="2.25 13.95 10.21 21.91 58.45 21.91 61.84 25.31"
        fill="none"
        stroke="#000"
        strokeWidth=".25"
      />
    </motion.svg>
  );
};

export default BtnRigt;
