import { FaGoogle, FaGithub } from 'react-icons/fa';


const RightSideNav = () => {
    return (
        <div>
            <h1 className="font-semibold text-3xl text-stone-600">Login With</h1>
            <button className="btn btn-outline w-full 3/4 mx-auto btn-info mt-2">
                <FaGoogle></FaGoogle>
                Login With Google</button>
            <button className="btn btn-outline w-full mx-auto mt-1">
                <FaGithub></FaGithub>
                Login With Github</button>
        </div>
    );
};

export default RightSideNav;