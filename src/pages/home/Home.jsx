import LeftSideNav from "../LeftSideNav/LeftSideNav";
import RightSideNav from "../RightSideNav/RightSideNav";
import Header from "../shared/header/Header";
import Nav from "../shared/nav/Nav";
import BrakingNews from "./BrakingNews";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Nav></Nav>
            <BrakingNews></BrakingNews>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                <div className=" border-2">
                    <RightSideNav></RightSideNav>
                </div>
                <div className="md:col-span-2 border-2">News Comming soon</div>
                <div className="border-2">
                    <LeftSideNav></LeftSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;