import { useAnimation, motion, easeIn } from "framer-motion";

const animationVariants = {
    hiddenright: { transform: "translateX(25%)", opacity: 0 },
    hiddenleft: { transform: "translateX(-25%)", opacity: 0 },
    hiddenup: { transform: "translateY(-25%)", opacity: 0 },
    hiddendown: { transform: "translateY(25%)", opacity: 0 },
    hidden: { opacity: 0 },
    visible: { transform: "translateX(0%)", opacity: 1, transition: { duration: 0.5, ease: [0.5, 1, 0.89, 1] }},    
}

export default animationVariants