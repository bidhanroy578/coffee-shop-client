import { useLoaderData } from "react-router";
import Feature from "./Feature";
import FollowUs from "./FollowUs";
import Hero from "./Hero";
import PopularProducts from "./PopularProducts";

const Home = () => {
    const coffees = useLoaderData()
    return (
        <div>
            <Hero></Hero>
            <Feature ></Feature>
            <PopularProducts coffees={coffees}></PopularProducts>
            <FollowUs></FollowUs>
        </div>
    );
};

export default Home;