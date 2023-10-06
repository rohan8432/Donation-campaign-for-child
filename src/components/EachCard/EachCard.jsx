import { Link } from "react-router-dom";


const EachCard = ({ donation }) => {

    const { ID, Title, Picture, Description, Price, Category, Text_and_Button_bg_Color, Category_bg_Color, Card_bg_Color } = donation;

    const titleStyle = {
        color: Text_and_Button_bg_Color,
    }

    const btnStyle = {
        backgroundColor: Category_bg_Color,
    }

    const cardStyle = {
        backgroundColor: Card_bg_Color,
    };

    return (
        <div className="grid grid-cols-2 gap-5 p-5">
            <div className="grid grid-cols-2 w-[530px] card bg-base-100 shadow-xl" style={cardStyle}>
                <figure><img src={Picture} alt="" /></figure>
                <div className="card-body">
                    <p className="card-title">
                        <button className="text-sm px-1 rounded-sm" style={btnStyle}>{Category}</button>
                    </p>
                    <p style={titleStyle} className="font-semibold">{Title}</p>
                    <p className="font-bold">{Price}</p>
                    <Link className="text-sm bg-blue-600 flex justify-center text-white font-semibold py-2 rounded-md" to={`/donate/${ID}`}>
                        <button >View Details</button>
                    </Link>
                </div>

            </div>

        </div>

    );
};

export default EachCard;

