import FAQ from "@/components/HomePage/FAQ/FAQ";
import HeroSection from "@/components/HomePage/HeroSection/HeroSection";
import LatestBlogs from "@/components/HomePage/LatestBlogs.js/LatestBlogs";
import OurClients from "@/components/HomePage/OurClients/OurClients";
import UserReviews from "@/components/HomePage/UserReviews/UserReviews";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <OurClients></OurClients>
      <LatestBlogs></LatestBlogs>
      <UserReviews></UserReviews>
      <FAQ></FAQ>
    </div>
  );
}
