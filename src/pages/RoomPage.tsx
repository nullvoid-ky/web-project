import Nav from "../utils/Nav";
import Footer from "../utils/Footer";
import Background from "../utils/Background";
import Room from "../room/Room";
export default function RoomPage() {
  return (
    <>
      <div className="">
        <Background></Background>
        <Nav />
        <div className="flex flex-col justify-center pt-20 sm:pt-36 p-4 sm:p-20 ">
        <header>
          <h1 className="text-4xl font-bold text-slate-700 mb-8 sm:mb-16">Room</h1>
        </header>
          <Room name="A" />
          <Room name="B" />
          <Room name="C" />
          <Room name="D" />
          <Room name="E" />
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
