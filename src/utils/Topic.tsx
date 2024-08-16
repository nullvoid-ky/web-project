type TopicProp = {
  text: string;
};

export default function Topic({ text }: TopicProp) {
  return (
    <ul className="text-[8px] sm:text-xs text-pearl-500 bg-orange-500 px-2 sm:px-4 rounded-xl flex-shrink-0 mb-2 mr-1 sm:mr-2">
      {text}
    </ul>
  );
}
