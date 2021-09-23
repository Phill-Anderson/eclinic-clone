import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import { motion, useElementScroll, useTransform } from 'framer-motion'
import Header from "./Header"
import Menu from "./Menu"
import Footer from './Footer'
const Layout = (props) => {
    /*  const [shouldShowActions, setShouldShowActions] = useState(false)
     const [lastYPos, setLastYPos] = useState(0)
 
     useEffect(() => {
         function handleScroll() {
             const yPos = window.scrollY
             const isScrollingUp = yPos < lastYPos
             setShouldShowActions(isScrollingUp)
             setLastYPos(yPos)
             if (isScrollingUp) console.log(`bollo`)
         }
         window.addEventListener("scroll", handleScroll)
         return () => {
             window.removeEventListener("scroll", handleScroll)
         }
     }, [lastYPos]) */
    return (
        <motion.div className="" >
            <Head>
                <title>{props.title}</title>
                <meta name="description" content="онлайн эмчийн зөвлөгөө" />
                <link rel="icon" href="/images/icons/eclinic25.svg" />
            </Head>
            <div className="bg-slider-image">
                <Header />
                <Menu />
            </div>
            {props.children}
            <Footer />
        </motion.div>
    )
}

export default Layout
