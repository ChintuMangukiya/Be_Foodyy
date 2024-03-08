import { useRouteError } from "react-router-dom";

const Error = () =>{

    const err = useRouteError();
    return(
        <div>
        <h1>Oopss!!!! </h1>
        <h3>Error {err.status} : {err.statusText} </h3>
        <h5>You Monkey man reading this error message</h5>
        </div>
    )
}

export default Error;