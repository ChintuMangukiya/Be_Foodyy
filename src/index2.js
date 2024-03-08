import React, { Suspense, lazy, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { unmountComponentAtNode } from "react-dom";
import HeaderComponent from "./Components/HeaderComponent";
import BodyComponent from "./Components/BodyComponent.js";
import { createBrowserRouter, Outlet, RouterProvider, useSearchParams } from "react-router-dom"; 
 import About from "./Components/About.js";
// import Contact from "./Components/Contact.js";
import Error from "./Components/Error.js";
import RastaurantMenu from "./Components/RastaurantMenu";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import CartComponent from "./Components/CartComponent.js";

const Contact = lazy(()=>import("./Components/Contact.js"));

const AppComponent = () =>{


    const [ cartPrice, setCartPrice ] = useState();


    useEffect(()=>{
        const data = {
            price : 0,
        }
        setCartPrice(data.price);
    },[]);




    return(
        <Provider store={appStore}>
        <UserContext.Provider value={{totalAmount : cartPrice,  setCartPrice}}>
        <div className="App">

            <HeaderComponent></HeaderComponent>
            <div className="fixing"></div>
            <Outlet id="outlet" />
        </div>
        </UserContext.Provider>
        </Provider>
    );
};


const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppComponent />,
        children:[
            {
                path: "/",
                element: <BodyComponent></BodyComponent>,
            },
            {
                path : "/about",
                element : <About />,
            },
            {
                path: "/contact",
                element: (
                    <Suspense fallback={<h1>Loading...</h1>}>
                          <Contact />
                    </Suspense>
                ),
            },
            {
                 path : "/rastaurants/:resId",
                 element : <RastaurantMenu />,
            },
            {
                path : "/cartcomponent",
                element : <CartComponent />
            }
        ],
        errorElement: <Error />,
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);