import { chakra, type BoxProps } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import type { ReactNode } from "react";

const MotionBox = chakra(motion.div, {
    shouldForwardProp: (prop) =>
        isValidMotionProp(prop) || typeof prop === "string"
});

type AnimationBoxProps = {
    children: ReactNode;
} & BoxProps;

export const AnimationBox = ({children, ...props}: AnimationBoxProps) => {
    return (
        <>
            <MotionBox
                initial={{ opacity: 0, y: 100}}
                whileInView={{ opacity:1, y: 0}}
                viewport={{ once: true}}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 } as object}
                {...props}
            >
            {children}
            </MotionBox>  
        </>
    )
};