import { Outlet } from "react-router-dom";

export default function AboutPage (){
    return(
        <div>
            <h1>About the App</h1>

            <Outlet />
        </div>
    )
}