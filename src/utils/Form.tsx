import { useRef } from "react";

type FormProps = {
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
  inputClass: string;
  labelClass: string;
  pClass: string;
  subtext: string;
  func: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Form({
  label,
  required,
  inputClass,
  labelClass,
  pClass,
  subtext,
  type,
  func,
  ...props
}: FormProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const labelRef = useRef<HTMLLabelElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  return (
    <div className="flex flex-col bg-white rounded-xl px-8 pb-4 box-border my-2">
      <label className={labelClass} ref={labelRef}>
        {label}
        {required === true ? (
          <span className="text-red-600"> *</span>
        ) : (
          <span> </span>
        )}
      </label>
      <p className={pClass} ref={pRef}>
        {subtext}
      </p>
      {type === "textarea" ? (
        <textarea
          className={inputClass}
          name=""
          id=""
          cols={30}
          rows={10}
        ></textarea>
      ) : (
        <input
          {...props}
          autoComplete="new-password"
          type={type}
          className={inputClass}
          ref={inputRef}
          onChange={(e) => {
            func(e);
          }}
        />
      )}
    </div>
  );
}
