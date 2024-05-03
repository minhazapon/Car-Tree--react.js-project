import About from "./About";
import Banner from "./Banner";
import Information from "./Information";
import Products from "./Products";
import Service from "./Service";
import Team from "./Team";


const Home = () => {
    return (
        <div className=" mt-10 mb-10">
            
          <Banner></Banner>
          <About></About>
          <Service></Service>
          <Information></Information>
          <Products></Products>
          <Team></Team>
            
        </div>
    );
};

export default Home;