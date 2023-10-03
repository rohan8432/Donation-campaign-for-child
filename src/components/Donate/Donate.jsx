import { Link } from "react-router-dom";


const Donate = ({ donate }) => {
    const { ID,Title, Picture, Category, Card_bg_Color, Category_bg_Color, Text_and_Button_bg_Color } = donate;
 
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
     <Link to={`/donate/${ID}`}>
        <div>
            <div className="card bg-base-100 shadow-xl" style={cardStyle}>
                <figure><img src={Picture} alt="" /></figure>
                <div className="card-body">
                    <p className="card-title">
                        <button className="text-sm px-1 rounded-sm" style={btnStyle}>{Category}</button>
                    </p>
                    <p style={titleStyle} className="font-semibold">{Title}</p>
                </div>
            </div>
        </div>
     </Link>
    );
};

export default Donate;