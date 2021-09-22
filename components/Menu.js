import React from 'react'
import NextImage from 'next/image'
import NextLink from 'next/link'
import { FaAngleDown } from 'react-icons/fa'
const Menu = () => {
    return (
        <div className="wrapper relative flex justify-between items-center py-3">
            <div className="absolute top-5">
                <NextLink href="/" passHref>
                    <a className="">
                        <NextImage className="inline-block" src="/images/icons/eclinic25.svg" alt="logo" width="50" height="50" />
                        <span className="absolute left-14 top-1 text-2xl">eclinic</span>
                    </a>
                </NextLink>
            </div>
            <div className="hidden md:block ml-[300px] mt-5">
                <a className="menuItem" href="#">Шинжилгээ</a>
                <a className="menuItem" href="#">Онлайн зөвлөгөө</a>
                <a className="menuItem" href="#">Цаг авах</a>
                <a className="menuItem" href="#">Дуудлага</a>
                <a className="menuItem" href="#">Асуулт хариулт</a>
            </div>
            <div className="absolute right-4 top-6">
                <button className="py-2 px-6 text-sm text-white bg-white bg-opacity-20 rounded hover:bg-none">Байгууллагуудад <FaAngleDown className="inline-block" /></button>
            </div>
        </div>
    )
}

export default Menu
