import React from 'react';
import './style.css';
import Menu from './menuApi';
import MenuCard from './MenuCard';

const Restaurent = () => {
    const[menuData,setMenuData]= React.useState(Menu)
    return (
        <>
           <MenuCard menuData={menuData}/>
        </>
    );
}

export default Restaurent
