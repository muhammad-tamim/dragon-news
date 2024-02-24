import Marquee from "react-fast-marquee";


const BrakingNews = () => {
    return (
        <div>
            <button className="btn btn-secondary"> Braking News</button>
            <Marquee speed={100}>
                Match Highlights: Germany vs Spain — as it happened  !  Match Highlights: Germany vs Spain as...
            </Marquee>
        </div>
    );
};

export default BrakingNews;