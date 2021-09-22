import React, { useState } from 'react'
import NextImage from 'next/image'
import NextLink from 'next/link'
import { FaAngleDown } from 'react-icons/fa'
import { animate, motion } from 'framer-motion'
import { rotX } from '../framer/animate'
import MenuItem from './MenuItem'

import { ImLab } from 'react-icons/im'
import { GiDuration } from 'react-icons/gi'
import { BsBuilding } from 'react-icons/bs'
import { BiPhoneCall } from 'react-icons/bi'
const logoVariants = {
    whileTap: {
        scale: 0.8,
        /* originX: "100px", originY: "100px" */
    },
    whileHover: {
        rotateZ: 360,
        transition: {
            type: 'tween',
            ease: 'easeOut',
            duration: 2,
        }
    }
}
const subMenuAnimate = {
    show: {
        opacity: 1,
        /*  rotateX: 0, */
        transition: {
            duration: 0.5
        },
        display: "block"
    },
    exit: {
        opacity: 0,
        /*   rotateX: -15, */
        transition: {
            duration: 0.5,
            delay: 0.3
        },
        transitionEnd: {
            display: "none"
        }
    }
}
const menuContainerVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1,
        }
    }
}
const Menu = () => {
    const [showSubMenu, setShowSubmenu] = useState(false);
    const toggleSubMenu = () => {
        setShowSubmenu(previousState => !previousState)
    }

    return (
        <motion.div
            className="wrapper relative flex justify-between items-center py-3"
            variants={menuContainerVariants}
            initial="initial"
            animate="animate"
        >
            <div className="absolute top-5">
                <motion.div
                    variants={logoVariants}
                    whileHover="whileHover"
                    whileTap="whileTap"
                >
                    <NextLink href="/" passHref>
                        <motion.a className="">
                            <NextImage className="inline-block" src="/images/icons/eclinic25.svg" alt="logo" width="50" height="50" />
                        </motion.a>
                    </NextLink>
                </motion.div>
                <motion.span whileTap={{ scale: 0.8 }} className="absolute left-14 top-1 text-2xl cursor-pointer">eclinic</motion.span>
            </div>
            <div className="hidden md:block ml-[300px] mt-5">
                <MenuItem text='Шинжилгээ' extraText='Онцлох' />
                <MenuItem text='Шинжилгээ' />
                <MenuItem text='Онлайн зөвлөгөө' />
                <MenuItem text='Цаг авах' />
                <MenuItem text='Дуудлага' />
                <MenuItem text='Асуулт хариулт' />
            </div>
            <motion.div className="absolute right-4 top-6" onMouseEnter={toggleSubMenu} onMouseLeave={toggleSubMenu}>
                <button className="py-2 px-6 text-sm text-white bg-white bg-opacity-20 rounded hover:bg-none">
                    Байгууллагуудад
                    <FaAngleDown className="inline-block" />
                </button>
                <motion.div className="sub-menu"
                    variants={subMenuAnimate}
                    initial="exit"
                    animate={showSubMenu ? "show" : "exit"}
                >
                    <div className="sub-menu-container">
                        <div className="sub-menu-item"><ImLab className="text-yellow-300 text-opacity-60 text-[24px] mr-2" />Эмнэлгүүд</div>
                        <div className="sub-menu-item"><GiDuration className="text-red-500 text-opacity-60 text-[24px] mr-2" />Лаборатори</div>
                        <div className="sub-menu-item"><BsBuilding className="text-green-500 text-opacity-60 text-[24px] mr-2" />Эмч нар</div>
                        <div className="sub-menu-item"><BiPhoneCall className="text-pink-500 text-opacity-60 text-[24px] mr-2" />Шүдний эмнэлэг</div>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Menu
