import React from 'react';
import {NavLink} from 'react-router-dom'


//emojis with cmd + i

const links = [
    { url: '/search', text: '🔎 All'},
    { url: '/news', text: '📰 News'},
    { url: '/image', text: '📸 Images'},
    { url: '/videos', text: '🎦 Videos'},
]

export const Links = () => {
    return (
        <div className="flex sm:justify-around justify-between items-center mt-4">
            {links.map(({url, text}, index)=> (
                <NavLink key={index} to={url} className='m-3 mb-0' activeClassName='text-blue-700 border-b-2 dark_text:text-blue-300 border-blue-700 pb-2'>
                    {text}
                    </NavLink>
            ))}
        </div>
    )
}
