import { Card, chakra, type CardProps } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import type { ReactNode } from "react";

const MotionBox = chakra(motion(Card), {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || typeof prop === "string",
});

type CardGridProps = {
  children: ReactNode;
} & CardProps;

const CardVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const MotionCard = ({ children, ...props }: CardGridProps) => {
  return (
    <MotionBox variants={CardVariants} {...props}>
      {children}
    </MotionBox>
  );
};

export default MotionCard;
