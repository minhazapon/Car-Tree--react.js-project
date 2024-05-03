import About from "./About";
import Banner from "./Banner";
import Information from "./Information";
import Service from "./Service";


const Home = () => {
    return (
        <div className=" mt-10 mb-10">
            
          <Banner></Banner>
          <About></About>
          <Service></Service>
          <Information></Information>
            
        </div>
    );
};

export default Home;