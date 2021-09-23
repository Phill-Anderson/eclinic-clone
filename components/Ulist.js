import React from 'react'
import { motion } from 'framer-motion'
const Ulist = ({ title, links }) => {
    return (
        <>
            <h3 className="text-lg font-bold">{title}</h3>
            <ul className="pt-5" style={{ listStyle: 'disc' }}>
                {
                    links.map(el => (
                        <motion.li key={el} whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }} className="p-1 text-white text-opacity-60 font-semibold hover:text-white"><a href="#">{el}</a></motion.li>
                    ))
                }
            </ul>
        </>
    )
}

export default Ulist
