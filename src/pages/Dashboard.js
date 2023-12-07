import "./Dashboard.css";
import Header from '../components/header/Header';
import Sidedrawer from "../components/sidebar/Sidedrawer";
import { useState } from "react";
import Bodycontent from "../components/bodycontent/Bodycontent";

const Dashboard = (props) => {
    const [hamburgerstate, setHamburgerState] = useState(false);
    const HamburgerClickHandler = () => {
        setHamburgerState(!hamburgerstate);
    };
    return (
        <>
            <Header hamburgerClick={HamburgerClickHandler}/>
            <Sidedrawer hamburgerstate={hamburgerstate}/>
            <Bodycontent/>
        </>
    );
}
export default Dashboard;