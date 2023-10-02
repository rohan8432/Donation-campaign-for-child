import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2>Oops sorry</h2>
            <Link to="/">Go back</Link>
        </div>
    );
};

export default ErrorPage;