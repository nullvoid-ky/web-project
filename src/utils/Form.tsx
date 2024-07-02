import React, { useRef, useState } from "react";

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
  const [isBlurredAndEmpty, setIsBlurredAndEmpty] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleBlur = () => {
    if (required && inputValue === "") {
      setIsBlurredAndEmpty(true);
    } else {
      setIsBlurredAndEmpty(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    func(e);
    if (e.target.value !== "") {
      setIsBlurredAndEmpty(false);
    }
  };

  return (
    <div
      className={`flex flex-col bg-white rounded-xl px-8 pb-4 my-2 ${
        isBlurredAndEmpty ? "border border-red-600" : ""
      }`}
      style={{ boxSizing: "border-box" }}
    >
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
          value={inputValue}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      )}
    </div>
  );
}
