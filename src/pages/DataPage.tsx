import Nav from "../utils/Nav";
import Background from "../utils/Background";
import UserData from "../data/UserData";

export default function DataPage() {
  return (
    <>
      <div className="">
        <Background />
        <Nav />
        <div className="min-h-screen flex flex-col justify-center pt-20 sm:pt-36 p-8 sm:p-20 ">
          <header>
            <h1 className="text-4xl font-bold text-pearl-50  mb-8 sm:mb-16">
              Data
            </h1>
          </header>
          <UserData />
        </div>
      </div>
    </>
  );
}
