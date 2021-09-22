import React from 'react'
const Ulist = ({ title, links }) => {
    return (
        <>
            <h3 className="text-lg font-bold">{title}</h3>
            <ul className="pt-5" style={{ listStyle: 'disc' }}>
                {
                    links.map(el => (
                        <li key={el} className="p-1 text-white text-opacity-60 font-semibold hover:text-white"><a href="#">{el}</a></li>
                    ))
                }
            </ul>
        </>
    )
}

export default Ulist
