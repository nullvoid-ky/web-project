import Nav from "../utils/Nav";
import Footer from "../utils/Footer";
import Background from "../utils/Background";
import Room from "../room/Room";
export default function InsideRoomPage() {
  return (
    <>
      <div className="">
        <Background></Background>
        <Nav />
        <div className="min-h-screen flex flex-col justify-center pt-20 sm:pt-36 p-4 sm:p-20 ">
          <Room name={} />
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
