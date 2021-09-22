import React from 'react'
import NextImage from 'next/image'
import { motion } from 'framer-motion'

import { ImLab } from 'react-icons/im'
import { GiDuration } from 'react-icons/gi'
import { BsBuilding } from 'react-icons/bs'
import { BiPhoneCall } from 'react-icons/bi'
import { RiHealthBookLine } from 'react-icons/ri'
import { slideUp, fadeVariants } from '../framer/animate'

import SliderBottomIcons from './SliderBottomIcons'

const iconVariants = {
    visible: (i) => ({
        opacity: 1,
        transition: {
            delay: i * 0.6
        }
    }),
    hidden: {
        opacity: 0
    }
}
const Slider = () => {
    const bottomIconText = [
        { id: 1, text: 'Лабораторийн жагсаалт', icon: <ImLab className="text-white text-opacity-60 text-[24px]" /> },
        { id: 2, text: 'Эмнэлгүүдийн  жагсаалт', icon: <GiDuration className="text-white text-opacity-60 text-[24px]" /> },
        { id: 3, text: 'Шүдний  эмнэлэгүүд', icon: <BsBuilding className="text-white text-opacity-60 text-[24px]" /> },
        { id: 4, text: 'Эмч нарын  жагсаалт', icon: <BiPhoneCall className="text-white text-opacity-60 text-[24px]" /> },
        { id: 5, text: 'Зөвлөмж  мэдээ', icon: <RiHealthBookLine className="text-white text-opacity-60 text-[24px]" /> }
    ];
    return (
        <>
            <div className="wrapper text-center pt-[160px]">
                <motion.h1
                    className="text-4xl leading-10 tracking-normal font-semibold mb-8"
                    initial={{ x: '-100%' }}
                    animate={{ x: '0%' }}
                    transition={{ delay: 0.1, type: 'spring', stiffness: 120 }}>Эрүүл мэндийн онлайн платформ</motion.h1>
                <motion.p
                    className="max-w-[630px] mx-auto text-md text-white text-opacity-70 font-semibold"
                    variants={fadeVariants}
                    initial="start"
                    animate="animate"
                >
                    Та байгаа газраасаа шинжилгээ өгөх, мөн шинжилгээний хариуг онлайнаар эсвэл гар утсаараа авах боломжтой.
                </motion.p>
                <motion.div
                    className="max-w-6xl my-10 border-8 border-black border-opacity-10"
                    variants={slideUp}
                    initial="start"
                    animate="animate"
                >
                    <form className="">
                        <div className="flex">
                            <div className="flex-1 border-r ">
                                <input className="h-[60px] w-full pl-5 font-semibold text-sm  text-gray-500 leading-[58px] border-none rounded-none border-r cursor-pointer active:border-none focus:border-none focuse:outline-none" placeholder="Эмнэлэг, лаборатори, эмч г.м" />
                            </div>
                            <div className="flex-1">
                                <select className="h-[60px] w-full pl-5 font-semibold text-sm  text-gray-500 leading-[58px] border-none rounded-none border-r cursor-pointer">
                                    <option>Байршил</option>
                                    <option>Улаанбаатар</option>
                                    <option>Сүхбаатар</option>
                                    <option>Баянзүрх</option>
                                    <option>Баянгол</option>
                                    <option>Хан-Уул</option>
                                    <option>Сонгино Хайрхан</option>
                                </select>
                            </div>
                            <div className="flex-1 bg-white px-3 pt-[10px]">
                                <button className="w-full h-10 text-white text-sm font-bold bg-blue-400 border-none rounded">Хайлт</button>
                            </div>
                        </div>
                    </form>
                </motion.div>

                <motion.div
                    className="pl-4 text-left text-white text-opacity-60 font-semibold"
                    initial={{ opacity: 0, }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3, type: 'spring', stiffness: 120 }}
                >
                    Нийтлэг хайлт: {' '}
                    <a className="mr-4 hover:text-white" href="#">Эмэгтэйчүүд</a>
                    <a className="mr-4 hover:text-white" href="#">Зүрх судас</a>
                    <a className="mr-4 hover:text-white" href="#">Хүүхэд</a>
                    <a className="mr-4 hover:text-white" href="#">Тархи мэдрэл</a>
                    <a className="mr-4 hover:text-white" href="#">Бусад</a>
                </motion.div>
            </div>

            <div className="bg-black bg-opacity-10 py-10 mt-40">
                <div className="wrapper">
                    <div className="flex flex-col md:flex-row justify-center">
                        {/*   {bottomIconText.map(el => {
                            const { id, text, icon } = el
                            return <SliderBottomIcons key={id} text={text} icon={icon} variants={iconVariants} initial="hidden" animate="visible" />
                        })} */}
                        <motion.div className="flex flex-1 items-center" variants={iconVariants} custom="1" initial="hidden" animate="visible">
                            <div className="item-logo"><ImLab className="text-white text-opacity-60 text-[24px]" /></div>
                            <div className="item-title">Лабораторийн<br /> жагсаалт</div>
                        </motion.div>
                        <motion.div className="flex flex-1 items-center" variants={iconVariants} custom="2" initial="hidden" animate="visible">
                            <div className="item-logo"><GiDuration className="text-white text-opacity-60 text-[24px]" /></div>
                            <div className="item-title">Эмнэлгүүдийн <br /> жагсаалт</div>
                        </motion.div>
                        <motion.div className="flex flex-1 items-center" variants={iconVariants} custom="3" initial="hidden" animate="visible">
                            <div className="item-logo"><BsBuilding className="text-white text-opacity-60 text-[24px]" /></div>
                            <div className="item-title"> Шүдний <br /> эмнэлэгүүд</div>
                        </motion.div>
                        <motion.div className="flex flex-1 items-center" variants={iconVariants} custom="4" initial="hidden" animate="visible">
                            <div className="item-logo"><BiPhoneCall className="text-white text-opacity-60 text-[24px]" /></div>
                            <div className="item-title">Эмч нарын <br /> жагсаалт</div>
                        </motion.div>
                        <motion.div className="flex flex-1 items-center" variants={iconVariants} custom="5" initial="hidden" animate="visible">
                            <div className="item-logo"><RiHealthBookLine className="text-white text-opacity-60 text-[24px]" /></div>
                            <div className="text-white text-opacity-50 text-sm font-bold text-left  pl-4 pr-8 ">Зөвлөмж <br /> мэдээ</div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slider
