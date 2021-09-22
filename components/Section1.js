import React from 'react'
import NextImage from 'next/image'
import { GiBlockHouse } from 'react-icons/gi'
import { GiEyeShield } from 'react-icons/gi'
import { AiOutlineBlock } from 'react-icons/ai'
import { GiWireframeGlobe } from 'react-icons/gi'
import { AiOutlineCheck } from 'react-icons/ai'
import { AiOutlineApple } from 'react-icons/ai'
import { RiPlayLine } from 'react-icons/ri'
const Section1 = () => {
    return (
        <div className="wrapper pt-80">
            <div className="flex flex-col md:flex-row">
                <div className="pt-2">
                    <h1 className="section-title">Шинжилгээний түүх болон<br /> бусад мэдээллийг найдвартай аюулгүй хадгална </h1>
                    <ul className="text-gray-500 text-md font-semibold py-10">
                        <li><AiOutlineCheck className="inline-block pr-2 text-2xl" />Хамгаалалтын давхар түвшний шалгалт</li>
                        <li><AiOutlineCheck className="inline-block pr-2 text-2xl" />Мэдээллийн сангийн тогтмол нөөцлөлт</li>
                        <li><AiOutlineCheck className="inline-block pr-2 text-2xl" />Хувийн нууцыг хадгалах хатуу нөхцөлтэй</li>
                    </ul>
                </div>
                <div className="flex flex-col md:flex-row">
                    <div className="box bg-[#1cbfe5]">
                        <div className="flex flex-col">
                            <div className="box-icon"><GiBlockHouse className="text-[60px]" /></div>
                            <h2 className="box-title">Блокчейн технологид суурилсан</h2>
                        </div>
                        <p className="box-number">01</p>
                    </div>
                    <div className="box bg-[#8781bd]">
                        <div className="flex flex-col">
                            <div className="box-icon"><GiEyeShield className="text-[60px]" /></div>
                            <h2 className="box-title">ISO 20008 стандаотаар баталгаажсан</h2>
                        </div>
                        <p className="box-number">02</p>
                    </div>
                    <div className="box bg-[#7cc576]">
                        <div className="flex flex-col">
                            <div className="box-icon"><AiOutlineBlock className="text-[60px]" /></div>
                            <h2 className="box-title">Мэдээллийг найдвартай хамгаалсан</h2>
                        </div>
                        <p className="box-number">03</p>
                    </div>
                    <div className="box bg-[#ff734d]">
                        <div className="flex flex-col">
                            <div className="box-icon"><GiWireframeGlobe className="text-[60px]" /></div>
                            <h2 className="box-title">Бүх төрлийн төхөөрөмжөөс хандах</h2>
                        </div>
                        <p className="box-number">04</p>
                    </div>
                </div>
            </div>
            <div className="flex pt-32">
                <div className="flex-1">
                    <NextImage src="/images/half-phone.png" layout="responsive" width="680px" height="500px" />
                </div>
                <div className="flex-1 pt-60">
                    <h1 className="section-title">Та смарт гар утсанд зориулсан апп <br /> татаж аваарай</h1>
                    <div className="flex">
                        <button className="flex w-[250px] mr-2 bg-[#1cbfe5] rounded">
                            <div className="flex justify-center items-center w-[25%] text-2xl"><RiPlayLine /></div>
                            <div className="w-[75%] py-2 bg-black bg-opacity-10"><span className="text-sm font-semibold">татаж авах</span><br /><span className="text-lg font-bold">Google Play</span></div>
                        </button>
                        <button className="flex w-[250px] bg-[#7cc576] rounded">
                            <div className="flex justify-center items-center w-[25%] text-2xl"><AiOutlineApple /></div>
                            <div className="w-[75%] py-2 bg-black bg-opacity-10"><span className="text-sm font-semibold">татаж авах</span><br /><span className="text-lg font-bold">App store</span></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1
