import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <nav>
            <div className="flex justify-between items-center">
                <div>
                    <img src="/Resources/Logo.png" alt="" />
                </div>
                <div className="flex gap-7">
                    <NavLink to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-500 underline font-bold" : ""
                        }
                    >Home</NavLink>
                    <NavLink to="/donation"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-500 underline font-bold" : ""
                        }
                    >Donation</NavLink>
                    <NavLink to="/statistics"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-500 underline font-bold" : ""
                        }
                    >Statistics</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Header;