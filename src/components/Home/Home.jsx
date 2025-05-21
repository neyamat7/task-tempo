import { useTheme } from "../../context/ThemeProvider/ThemProvider";
import FeaturedSection from "../FeaturedSection/FeaturedSection";
import Hero from "../Hero/Hero";
import Plans from "../Plans/Plans";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

export default function Home() {
  const { darkMode } = useTheme();

  console.log(darkMode);

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
