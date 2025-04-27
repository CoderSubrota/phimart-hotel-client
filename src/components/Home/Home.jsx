import React, { useContext }  from "react";
import HeroSection from "./FirstSection";
import PopularHotels from "./PopularHotels";
import DealsSection from "./DealsSection";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "./Testimonials";
import NewsletterSection from "./HomePageSaventhSection";
import HotelSearch from "./SearchSection";
import FeaturedAmenities from "./FeaturedAmenities";
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
        return null; // Return null if user data is not available or invalid
      };

     const role =  getUserRole() ;
     console.log(role) ;
     
    return (
        <React.Fragment>
            <HeroSection></HeroSection>
            <HotelSearch></HotelSearch>
            <PopularHotels></PopularHotels>
            <FeaturedAmenities></FeaturedAmenities>
            <DealsSection></DealsSection>
            <WhyChooseUs></WhyChooseUs>
            <Testimonials></Testimonials>
            <NewsletterSection></NewsletterSection>

        </React.Fragment>
    )
}

export default Home;

