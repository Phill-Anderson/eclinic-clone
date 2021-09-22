import React from 'react'
import Head from 'next/head'
import Header from "./Header"
import Menu from "./Menu"
import Footer from './Footer'
const Layout = (props) => {
    return (
        <div className="">
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
        </div>
    )
}

export default Layout
