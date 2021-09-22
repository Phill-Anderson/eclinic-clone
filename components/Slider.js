import React from 'react'
import NextImage from 'next/image'

import { ImLab } from 'react-icons/im'
import { GiDuration } from 'react-icons/gi'
import { BsBuilding } from 'react-icons/bs'
import { BiPhoneCall } from 'react-icons/bi'
import { RiHealthBookLine } from 'react-icons/ri'
const Slider = () => {
    return (
        <>
            <div className="wrapper text-center pt-[160px]">
                <h1 className="text-4xl leading-10 tracking-normal font-semibold mb-8">Эрүүл мэндийн онлайн платформ</h1>
                <p className="max-w-[630px] mx-auto text-md text-white text-opacity-70 font-semibold">Та байгаа газраасаа шинжилгээ өгөх, мөн шинжилгээний хариуг онлайнаар эсвэл гар утсаараа авах боломжтой.</p>
                <div className="max-w-6xl my-10 border-8 border-black border-opacity-10">
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
                </div>

                <div className="pl-4 text-left text-white text-opacity-60 font-semibold">
                    Нийтлэг хайлт:
                    <a className="mr-4 hover:text-white" href="#">Эмэгтэйчүүд</a>
                    <a className="mr-4 hover:text-white" href="#">Зүрх судас</a>
                    <a className="mr-4 hover:text-white" href="#">Хүүхэд</a>
                    <a className="mr-4 hover:text-white" href="#">Тархи мэдрэл</a>
                    <a className="mr-4 hover:text-white" href="#">Бусад</a>
                </div>
            </div>

            <div className="bg-black bg-opacity-10 py-10 mt-40">
                <div className="wrapper">
                    <div className="flex flex-col md:flex-row justify-center">
                        <div className="flex flex-1 items-center">
                            <div className="item-logo"><ImLab className="text-white text-opacity-60 text-[24px]" /></div>
                            <div className="item-title">Лабораторийн<br /> жагсаалт</div>
                        </div>
                        <div className="flex flex-1 items-center">
                            <div className="item-logo"><GiDuration className="text-white text-opacity-60 text-[24px]" /></div>
                            <div className="item-title">Эмнэлгүүдийн <br /> жагсаалт</div>
                        </div>
                        <div className="flex flex-1 items-center">
                            <div className="item-logo"><BsBuilding className="text-white text-opacity-60 text-[24px]" /></div>
                            <div className="item-title"> Шүдний <br /> эмнэлэгүүд</div>
                        </div>
                        <div className="flex flex-1 items-center">
                            <div className="item-logo"><BiPhoneCall className="text-white text-opacity-60 text-[24px]" /></div>
                            <div className="item-title">Эмч нарын <br /> жагсаалт</div>
                        </div>
                        <div className="flex flex-1 items-center">
                            <div className="item-logo"><RiHealthBookLine className="text-white text-opacity-60 text-[24px]" /></div>
                            <div className="text-white text-opacity-50 text-sm font-bold text-left  pl-4 pr-8 ">Зөвлөмж <br /> мэдээ</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slider
