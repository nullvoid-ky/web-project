import ScrollContent from "../components/home/ScrollContent";
import Banner from "../components/home/Banner";
import Nav from "../utils/Nav";
import Footer from "../utils/Footer";
export default function HomePage() {
  return (
    <div className="">
      <Nav/>
      <div className="flex flex-col justify-center pt-32 sm:pt-48 p-2 sm:p-20">
        <Banner/>
        <ScrollContent />
        <ScrollContent />
        <ScrollContent />
        <ScrollContent />
      </div>
      <Footer></Footer>
    </div>

  );
}
