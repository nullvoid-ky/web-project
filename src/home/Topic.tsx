type TopicProp = {
  text: string;
};

export default function Topic({ text }: TopicProp) {
  return (
    <ul className="text-xs sm:text-sm text-white bg-[#F02038] px-2 sm:px-4 rounded-xl flex-shrink-0 mb-2 mr-2">
      {text}
    </ul>
  );
}
