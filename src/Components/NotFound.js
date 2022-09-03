import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>Opps!</h1>
            <p>Page not found</p>
            <Link to={'/'}>Go back to home Page</Link>
        </div>
     );
}
 
export default NotFound;