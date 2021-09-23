import React, { useCallback, useState, useEffect } from 'react'
import NextImage from 'next/image'
import { GiBlockHouse } from 'react-icons/gi'
import { GiEyeShield } from 'react-icons/gi'
import { AiOutlineBlock } from 'react-icons/ai'
import { GiWireframeGlobe } from 'react-icons/gi'
import { AiOutlineCheck } from 'react-icons/ai'
import { AiOutlineApple } from 'react-icons/ai'
import { RiPlayLine } from 'react-icons/ri'
import { motion } from 'framer-motion'
import { iconVariants, delaySlideUpVariants } from '../framer/animate'
const Section1 = () => {
    const [showAnimation, setShowAnimation] = useState(false)
    const [yScrollPos, setYscrollPos] = useState(0)
    const [offsetTop, setOffsetTop] = useState(0)
    const callBackRef = useCallback(domNode => {
        if (domNode) {
            // setDimensions(domNode.getBoundingClientRect())
            setOffsetTop(domNode.offsetTop)
        }
    }, [])
    useEffect(() => {
        console.log(offsetTop)
        function handleScroll() {
            const yScroll = window.scrollY
            yScroll > offsetTop - 500 && setShowAnimation(true)
            yScroll < offsetTop - 500 && setShowAnimation(false)
            setYscrollPos(yScroll)
            console.log(showAnimation)
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [yScrollPos])
    return (
        <div className="wrapper pt-80" ref={callBackRef}>
            <div className="flex flex-col md:flex-row">
                <div className="pt-2">
                    <motion.h1
                        className="section-title"
                        animate={{ opacity: showAnimation ? 1 : 0 }}
                        initial={{ opacity: 0 }}
                        transition={{ opacity: { duration: .6 } }}
                    >Шинжилгээний түүх болон<br /> бусад мэдээллийг найдвартай аюулгүй хадгална
                    </motion.h1>
                    <ul className="text-gray-500 text-md font-semibold py-10">
                        <motion.li variants={iconVariants} custom="1" initial="hidden" animate={showAnimation ? "visible" : "hidden"}><AiOutlineCheck className="inline-block pr-2 text-2xl" />Хамгаалалтын давхар түвшний шалгалт</motion.li>
                        <motion.li variants={iconVariants} custom="2" initial="hidden" animate={showAnimation ? "visible" : "hidden"}><AiOutlineCheck className="inline-block pr-2 text-2xl" />Мэдээллийн сангийн тогтмол нөөцлөлт</motion.li>
                        <motion.li variants={iconVariants} custom="3" initial="hidden" animate={showAnimation ? "visible" : "hidden"}><AiOutlineCheck className="inline-block pr-2 text-2xl" />Хувийн нууцыг хадгалах хатуу нөхцөлтэй</motion.li>
                    </ul>
                </div>
                <div className="flex flex-col md:flex-row">
                    <motion.div variants={delaySlideUpVariants} custom="1" initial="hidden" animate={showAnimation ? "visible" : "hidden"} className="box bg-[#1cbfe5]">
                        <div className="flex flex-col">
                            <div className="box-icon"><GiBlockHouse className="text-[60px]" /></div>
                            <h2 className="box-title">Блокчейн технологид суурилсан</h2>
                        </div>
                        <p className="box-number">01</p>
                    </motion.div>
                    <motion.div variants={delaySlideUpVariants} custom="2" initial="hidden" animate={showAnimation ? "visible" : "hidden"} className="box bg-[#8781bd]">
                        <div className="flex flex-col">
                            <div className="box-icon"><GiEyeShield className="text-[60px]" /></div>
                            <h2 className="box-title">ISO 20008 стандаотаар баталгаажсан</h2>
                        </div>
                        <p className="box-number">02</p>
                    </motion.div>
                    <motion.div variants={delaySlideUpVariants} custom="3" initial="hidden" animate={showAnimation ? "visible" : "hidden"} className="box bg-[#7cc576]">
                        <div className="flex flex-col">
                            <div className="box-icon"><AiOutlineBlock className="text-[60px]" /></div>
                            <h2 className="box-title">Мэдээллийг найдвартай хамгаалсан</h2>
                        </div>
                        <p className="box-number">03</p>
                    </motion.div>
                    <motion.div variants={delaySlideUpVariants} custom="4" initial="hidden" animate={showAnimation ? "visible" : "hidden"} className="box bg-[#ff734d]">
                        <div className="flex flex-col">
                            <div className="box-icon"><GiWireframeGlobe className="text-[60px]" /></div>
                            <h2 className="box-title">Бүх төрлийн төхөөрөмжөөс хандах</h2>
                        </div>
                        <p className="box-number">04</p>
                    </motion.div>
                </div>
            </div>
            <div className="flex pt-32">
                <div className="flex-1">
                    <NextImage src="/images/half-phone.png" layout="responsive" width="680px" height="500px" />
                </div>
                <motion.div className="flex-1 pt-60" variants={delaySlideUpVariants} custom="5" initial="hidden" animate={showAnimation ? "visible" : "hidden"}>
                    <h1 className="section-title">Та смарт гар утсанд зориулсан апп <br /> татаж аваарай</h1>
                    <div className="flex" >
                        <button className="flex w-[250px] mr-2 bg-[#1cbfe5] rounded">
                            <div className="flex justify-center pt-5 w-[25%] text-3xl"><RiPlayLine /></div>
                            <div className="w-[75%] py-2 bg-black bg-opacity-10"><span className="text-sm font-semibold">татаж авах</span><br /><span className="text-lg font-bold">Google Play</span></div>
                        </button>
                        <button className="flex w-[250px] bg-[#7cc576] rounded">
                            <div className="flex justify-center pt-5 w-[25%] text-3xl"><AiOutlineApple /></div>
                            <div className="w-[75%] py-2 bg-black bg-opacity-10"><span className="text-sm font-semibold">татаж авах</span><br /><span className="text-lg font-bold">App store</span></div>
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Section1
