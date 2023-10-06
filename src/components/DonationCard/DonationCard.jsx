import swal from "sweetalert";


const DonationCard = ({donation}) => {
    const {ID,Title, image, Description, Price} = donation;

    const handleDonation = ()=>{
        console.log(donation);

        const addedItem = [];

        const getDonatioData = JSON.parse(localStorage.getItem('donate',));

        

        if(!getDonatioData){
            addedItem.push(donation);
            localStorage.setItem('donate',JSON.stringify(addedItem));
            swal("Good job!", "You clicked the button!", "success");
           
        }
        else{

           const isExists = getDonatioData.find(donation => donation.ID === ID);

           if(!isExists){
            addedItem.push(...getDonatioData, donation);
            localStorage.setItem('donate', JSON.stringify(addedItem));
            swal("Good job!", "You clicked the button!", "success");
           }
           else{
            swal("Error!", "Already exist", "Error");
           }


         
        }
    }


    const overlayStyle = {
        position: 'absolute', 
        backgroundColor: '#00000080',
        zIndex: 1, 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      };
      

    
    return (
        <div className="my-7">
           <img src={image}  width="1152px" alt="" srcset="" />
            <div className="h-40 absolute w-[1152px] bottom-[-37rem]" style={overlayStyle}>
               
                <button onClick={handleDonation} className="bg-red-600 absolute rounded-md left-10 text-white text-3xl font-bold p-5">Donate {Price}</button>
            </div>
            <div className="my-3">
                <h3 className="text-4xl font-bold">{Title}</h3>
                <p className="my-3">{Description}</p>
            </div>
        </div>
    );
};

export default DonationCard;