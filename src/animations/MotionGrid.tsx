import {
  chakra,
  Grid,
  useBreakpointValue,
  type GridProps,
} from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import type { ReactNode } from "react";

const MotionBox = chakra(motion(Grid), {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || typeof prop === "string",
});

type MotionGridProps = {
  children: ReactNode;
} & GridProps;

const gridVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const MotionGrid = ({ children, ...props }: MotionGridProps) => {
  const viewportAmount = useBreakpointValue({ base: 0.1, md: 0.2 });
  return (
    <MotionBox
      variants={gridVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: viewportAmount }}
      {...props}
    >
      {children}
    </MotionBox>
  );
};

export default MotionGrid;
