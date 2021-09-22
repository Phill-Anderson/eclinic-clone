import React from 'react'
import Ulist from './Ulist'
import NextImage from 'next/image'
import { RiFacebookFill } from 'react-icons/ri'
import { TiSocialTwitter } from 'react-icons/ti'
import { CgYoutube } from 'react-icons/cg'
import { SiMinutemailer } from 'react-icons/si'
import { BiPhoneCall } from 'react-icons/bi'
const Footer = () => {
    return (
        <footer className="pt-20 pb-8 bg-[#2b4399]">
            <div className="wrapper">
                <div className="flex flex-col md:flex-row">
                    <div className="flex-1">
                        <Ulist title={'Eclinic'} links={['Бидний тухай', 'Үйлчилгээний нөхцөл', 'Нууцлалын бодлого', 'Нийтлэл', 'Холбоо барих']} />
                    </div>
                    <div className="flex-1">
                        <Ulist title={'Харилцагчдад'} links={['Асуулт, хариулт', 'Эмч хайх', 'Эмнэлэг хайх', 'Лаборатори хайх', 'Зөвлөмж унших', 'Зөвлөгөө авах', 'Дуудлага өгөх', 'Апп татах']} />
                    </div>
                    <div className="flex-1">
                        <Ulist title={'Эмч нарт'} links={['Зөвлөгөө өгөх', 'Зөвлөмж нийтлэх', 'Профайл бөглөх']} />
                    </div>
                    <div className="flex-1">
                        <Ulist title={'Байгууллагуудад'} links={['Системийн демо татах', 'Систем татах']} />
                    </div>
                    <div className="flex-1">
                        <h3 className="mb-6 text-lg font-bold">Бидэнтэй нэгдээрэй</h3>
                        <div className="flex pb-4">
                            <span className="footer-social"><RiFacebookFill /></span>
                            <span className="footer-social"><TiSocialTwitter /></span>
                            <span className="footer-social"><CgYoutube /></span>
                        </div>
                        <div className="flex py-2 relative"><span className="mr-2"><SiMinutemailer /></span> info@eclinic.mn</div>
                        <div className="flex py-2 relative"><span className="mr-2"><BiPhoneCall /></span> 89898989</div>
                    </div>
                </div>
                <div className="flex justify-between pt-5 mt-10 border-t border-white border-opacity-10">
                    <div className="flex text-sm text-white text-opacity-60 "><NextImage src="/images/icons/eclinic25.svg" width="20" height="20" /> <span className="ml-3">Eclinic LLC хөгжүүлэв.</span> </div>
                    <p className="text-sm text-white text-opacity-60 ">Бүх эрх хуулиар хамгаалагдсан © 2019 он.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
