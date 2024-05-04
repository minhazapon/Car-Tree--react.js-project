import About from "./About";
import Banner from "./Banner";
import Information from "./Information";
import Products from "./Products";
import Service from "./Service";
import Team from "./Team";
import Customers from "./why/Customers";
import Why from "./why/Why";


const Home = () => {
    return (
        <div className=" mt-10 mb-10">
            
          <Banner></Banner>
          <About></About>
          <Service></Service>
          <Information></Information>
          <Products></Products>
          <Team></Team>
          <Why></Why>
          <Customers></Customers>
            
        </div>
    );
};

export default Home;