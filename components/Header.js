import React from 'react'
const Header = () => {
    return (

        <div className=" bg-white bg-opacity-10 border-b border-white border-opacity-10" >
            <div className="wrapper flex justify-end">
                <div className="flex items-center justify-center h-10 px-5 text-sm border-l  border-r border-opacity-10 hover:bg-blue-800 transition-all duration-500 cursor-pointer">
                    <i><img src="/images/icons/login.svg" alt={'headerIcon'} /></i><a href="#" className="ml-2">Нэвтрэх</a>
                </div>
                <div className="flex items-center justify-center h-10 px-5 text-sm border-r border-opacity-10 hover:bg-blue-800 transition-all duration-500 cursor-pointer">
                    <i><img src="/images/icons/app.svg" alt={'headerIcon'} /></i><a href="#" className="ml-2">Шинжилгээний хариу</a>
                </div>
            </div>
        </div>
    )
}

export default Header
