

const DonationCard = ({donation}) => {



    const overlayStyle = {
        position: 'absolute', 
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1, 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      };
      

    const {Title, image, Description, Price} = donation;
    return (
        <div className="my-7">
           <img src={image}  width="1152px" alt="" srcset="" />
            <div className="h-40 absolute w-[1152px] bottom-[-37rem]" style={overlayStyle}>
               
                <button className="bg-red-600 absolute rounded-md left-10 text-white text-3xl font-bold p-5">Donate {Price}</button>
            </div>
            <div className="my-3">
                <h3 className="text-4xl font-bold">{Title}</h3>
                <p className="my-3">{Description}</p>
            </div>
        </div>
    );
};

export default DonationCard;