import { useLoaderData } from "react-router-dom";
import Donate from "../Donate/Donate";



const Donates = () => {
  
    const donates = useLoaderData();
    

    return (
        <div>
            
            <div className="grid grid-cols-4 gap-5">
                {
                    donates.map(donate =>  <Donate key={donate.id} donate={donate}></Donate>)
                }
            </div>
        </div>
    );
};

export default Donates;