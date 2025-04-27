import React, { useContext } from "react";
import HeroSection from "./FirstSection";
import PopularHotels from "./PopularHotels";
import DealsSection from "./DealsSection";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "./Testimonials";
import NewsletterSection from "./HomePageSaventhSection";
import HotelSearch from "./SearchSection";
import FeaturedAmenities from "./FeaturedAmenities";
import { Helmet } from "react-helmet";
const Home = () => {
  const getUserRole = () => {
    // Safely retrieve user data from local storage
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        const user = JSON.parse(userData);
        return user.role;
      } catch (error) {
        console.error("Failed to parse user data:", error);
      }
    }
    return null;
  };

  const role = getUserRole();

  return (
    <React.Fragment>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <HeroSection></HeroSection>
      <HotelSearch></HotelSearch>
      <PopularHotels></PopularHotels>
      <FeaturedAmenities></FeaturedAmenities>
      <DealsSection></DealsSection>
      <WhyChooseUs></WhyChooseUs>
      <Testimonials></Testimonials>
      <NewsletterSection></NewsletterSection>
    </React.Fragment>
  );
};

export default Home;
