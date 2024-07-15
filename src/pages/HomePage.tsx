import Nav from "../utils/Nav";
import Footer from "../utils/Footer";
import Background from "../utils/Background";
import Banner from "../home/Banner";
import ScrollContent from "../home/ScrollContent";
import SearchBar from "../boardgame/SearchBar";
export default function HomePage() {
  
  return (
    <>
      <div className="">
        <Background></Background>
        <Nav />
        <div className=" min-h-screen  flex flex-col justify-center pt-12 sm:pt-36  p-0 sm:p-20 ">
          <Banner />
          <SearchBar/>
          <div className="flex p-4 flex-col justify-center sm:space-y-8">
            <ScrollContent Category="Psychology"/>
            <ScrollContent Category="Hide n Seek"/>
            <ScrollContent Category="Co-operative"/>
            <ScrollContent Category="Mind Game"/>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
