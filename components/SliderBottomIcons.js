import React from 'react'
import { motion } from 'framer-motion'
const SliderBottomIcons = ({ key, icon, text, variants, initial, animate }) => {

    return (
        <motion.div
            className="flex flex-1 items-center"
            variants={variants}
            custom={key}
            initial={initial}
            animate={animate}
        >
            <div className="item-logo">{icon}</div>
            <div className="item-title">{text}</div>
        </motion.div>

    )
}

export default SliderBottomIcons
