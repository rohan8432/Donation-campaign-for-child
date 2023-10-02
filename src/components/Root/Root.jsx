import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const Root = () => {
    return (
        <div className="mx-16 py-6">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;