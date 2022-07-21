import React from 'react';

const NavLink = () => {
    const links =[ {name:'Men', submenu:true,sublink:[
        
    ]},{name:'Women'},{name:'Kids'}, ];
 

    return (
        <>
        {
            links.map(link =>(
                <div>
                    <div className='px-3 text-left md:cursor-pointer'>
                        <h1 className='py-7'>  {link.name} </h1>
                    </div>
                </div>
            ))
        }
            
        </>
    );
};

export default NavLink;