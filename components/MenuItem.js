import React from 'react'
import { motion } from 'framer-motion'
import { scaleButton } from '../framer/animate'
const MenuItem = ({ text, extraText }) => {
    return (
        <motion.div whileTap={{ scale: 0.8 }} style={{ display: 'inline-block' }}>
            <a href="#" className="menuItem" >
                {text}
                {extraText &&
                    <span
                        className="absolute top-[-20px] 
                    right-0 bg-[#1cbfe5] bg-opacity-30 
                    rounded-md text-[#1cbfe5;] text-[10px] 
                    tracking-wider py-0 px-2 
                    hover:text-current"
                    >
                        {extraText}
                    </span>}
            </a>
        </motion.div>

    )
}

export default MenuItem
