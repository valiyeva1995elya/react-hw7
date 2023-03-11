
import { Link, Outlet } from "react-router-dom";

const GeneralPage = () => {
    
  return (
    <>
        <header>
            <Link to="/main">Main Page</Link> <br />
            <Link to="/login">Login Page</Link> <br />
            <Link to="/help">Help Page</Link> <br />
        </header>
      <div>
        <Outlet/>
      </div>
    </>
  );
};

export default GeneralPage;
