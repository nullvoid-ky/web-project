type RoomMiniType = {
  name: string;
};
export default function RoomMini({ name }: RoomMiniType) {
  return (
    <>
      <div className="">
        <h1>{name}</h1>
        <div>??/??</div>
      </div>
    </>
  );
}
