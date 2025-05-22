import FeaturedSection from "../FeaturedSection/FeaturedSection";
import Hero from "../Hero/Hero";
import Plans from "../Plans/Plans";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <FeaturedSection></FeaturedSection>
      <Services></Services>
      <Plans></Plans>
      <Testimonials></Testimonials>
    </>
  );
}
