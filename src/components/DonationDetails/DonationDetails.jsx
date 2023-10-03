import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationCard from "../DonationCard/DonationCard";



const DonationDetails = () => {

    const [donation, setDonation] = useState({});

    const { ID } = useParams();
    console.log(ID);

    const donations = useLoaderData();
    console.log(donations);

    useEffect(() => {

        const findDonations = donations.find(donation => donation.ID == ID);

        setDonation(findDonations);
    }, [ID, donations]);

    

    return (
        <div>
            <DonationCard  donation={donation}></DonationCard>
        </div>
    );
};

export default DonationDetails;