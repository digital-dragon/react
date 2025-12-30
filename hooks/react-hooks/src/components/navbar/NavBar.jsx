import { Link } from "react-router-dom";
import './../../css/navbar.css';

export default function NavBar() {
    return <nav className="navbar">
        <div >
            React Hooks Demo
        </div>
        <div className="navbar-links">
            <Link to="" className="nav-link">Use State/Effect/Ref Demo</Link>
            <Link to="/context" className="nav-link">Use Context Demo</Link>
            <Link to="/reducer" className="nav-link">Use Reducer Demo</Link>
            <Link to="/memo" className="nav-link">Use Memo Demo</Link>
            <Link to="/callback" className="nav-link">Use Callback Demo</Link>
            <Link to="" className="nav-link">Back</Link>
        </div>
    </nav>

}