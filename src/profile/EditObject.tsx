import Form from "../utils/Form";

type EditObjectType = {
  isEdit: boolean;
  topic: string;
  value: string;
  type: string;
};
export default function EditObject({
  isEdit,
  topic,
  value,
  type,
}: EditObjectType) {
  return (
    <div className="mb-4">
      <Form
        label={topic}
        subtext=""
        type={type}
        placeholder=">"
        required={false}
        inputClass={`w-4/5 xl:w-96 placeholder:absolute placeholder:left-0 pl-3  focus:outline-none box-border border-b-[1px] bg-transparent placeholder:text-pearl-700 text-[10px] sm:text-xs lg:text-xl  ${
          isEdit ? "flex" : "hidden"
        }`}
        labelClass="text-orange-500 text-base sm:text-lg lg:text-3xl"
        pClass=""
        oldValue={value}
        func={(e) => setUsername(e.target.value)}
      />
      <h1
        className={`border-b-[1px] border-transparent text-[10px] sm:text-xs lg:text-xl ${
          isEdit ? "hidden" : "flex"
        }`}
      >
        {value}
      </h1>
    </div>
  );
}
