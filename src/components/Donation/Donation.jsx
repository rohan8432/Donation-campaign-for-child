import { useEffect, useState } from "react";
import EachCard from "../EachCard/EachCard";



const Donation = () => {

    const [donations, setDonations] = useState([]);

    const [noItem, setNoItem] = useState(false);

    const [isShow, setIsShow] = useState(false);

    useEffect(() => {


        const getDonatioData = JSON.parse(localStorage.getItem('donate',));
        if (getDonatioData) {
            setDonations(getDonatioData);
        }
        else {
            setNoItem("No data found")
        }
    }, [])
    console.log(donations);


    return (
        <div>
            {
                noItem ? <p className="flex text-7xl font-bold justify-center items-center pt-32">{noItem}</p> :

                    <div>
                        <div className="grid grid-cols-2">
                            {
                                isShow ? donations.map(donation => <EachCard key={donation.id} donation={donation}></EachCard>) :
                                donations.slice(0, 4).map(donation => <EachCard key={donation.id} donation={donation}></EachCard>)
                            }

                        </div>
                        <div className="flex justify-center">
                            <button onClick={()=>setIsShow(!isShow)} className="flex py-1 px-3 rounded-md bg-green-600 text-white font-semibold">
                            
                            {
                                isShow ? "See less" : "See All"
                            }
                            </button>
                         
                        </div>

                    </div>
            }
        </div>
    );
};

export default Donation;