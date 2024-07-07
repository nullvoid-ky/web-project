import Nav from "../utils/Nav";
import Footer from "../utils/Footer";
import Background from "../utils/Background";
import Room from "../room/Room";
import RoomMini from "../room/RoomMini";
import { Link } from "react-router-dom";
export default function RoomPage() {
  return (
    <>
      <div className="">
        <Background></Background>
        <Nav />
        <div className="min-h-screen flex flex-col justify-center pt-20 sm:pt-36 p-4 sm:p-20 ">
          <header>
            <h1 className="text-4xl font-bold text-slate-700 mb-8 sm:mb-16">
              Room
            </h1>
          </header>
          <Link to="">
            <RoomMini name="A" />
          </Link>
          <Room name="A" />
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
