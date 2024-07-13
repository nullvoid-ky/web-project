import Form from "../utils/Form";
import Dropdown from "../utils/Dropdown";
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
    <div className="mb-4 overflow-y-hidden">
      {
        type == "dropdown" ? 
        <div className="">
        
        <label className="text-orange-500 text-base sm:text-lg lg:text-[22px] ">{topic}</label>
        { isEdit ? <Dropdown height="mt-2 h-8"
        width="w-48 lg:w-64"/> : ""}

        </div>
        :

        <Form
        label={topic}
        subtext=""
        type={type}
        placeholder=">"
        required={false}
        inputClass={`overflow-y-hidden w-48 lg:w-64 placeholder:absolute placeholder:left-0 pl-3 py-2 focus:outline-none box-border border-b-[1px] bg-transparent placeholder:text-pearl-700 text-[10px] sm:text-xs lg:text-xl  ${
          isEdit ? "flex" : "hidden"
        }`}
        labelClass="text-orange-500 text-base sm:text-lg lg:text-[22px] "
        pClass="overflow-y-hidden"
        oldValue={value}
        func={(e) => setUsername(e.target.value)}
      />
      }
      <h1
        className={`border-b-[1px]  border-transparent text-[10px] sm:text-xs lg:text-[18px] py-3 ${
          isEdit ? "hidden" : "flex"
        }`}
      >
        {value}
      </h1>
    </div>
  );
}
