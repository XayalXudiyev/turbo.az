import Advertisement from "../../components/advertisement";
import Filters from "../../components/filter";


const Main = () => {

    return (
        <div className="container mx-auto max-w-6xl">
            <div className="" >
                <Filters />
            </div>
            <div>
                <Advertisement />
            </div>
        </div>
    );
};

export default Main;
