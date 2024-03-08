import { useEffect, useState } from "react";
import MENU_API from "../Constants/APIs/ResMenu_API";


const useResMenu = (resId) => {
    
    const [resMenu, setresMenu] = useState(null);

    useEffect(()=>{
        fetchDs();
    },[]);

    const fetchDs = async() => {
        const data = await fetch( MENU_API + resId );
        const json = await data.json();
        setresMenu(json?.data);
    }

    return resMenu;
};

export default useResMenu;