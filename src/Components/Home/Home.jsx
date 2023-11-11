import Banner from "./Banner/Banner";
import Brands from "./Brands/Brands";
import Details from "./Details/Details";
import Facilities from "./Facilities/Facilities";
import ViewMore from "./ViewMore/ViewMore";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Facilities></Facilities>
            <Brands></Brands>
            <ViewMore></ViewMore>
            <Details></Details>
        </div>
    );
};

export default Home;