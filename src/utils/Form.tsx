import React, { useRef, useState } from "react";

type FormProps = {
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
  maxLength: number;
  inputClass: string;
  labelClass: string;
  contentClass: string;
  pClass: string;
  subtext: string;
  oldValue: string;
  func: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Form({
  label,
  required,
  inputClass,
  labelClass,
  contentClass,
  pClass,
  subtext,
  type,
  func,
  maxLength,
  oldValue,
  ...props
}: FormProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const labelRef = useRef<HTMLLabelElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const contentRef = useRef<HTMLParagraphElement>(null);
  const [isBlurredAndEmpty, setIsBlurredAndEmpty] = useState(false);
  const [inputValue, setInputValue] = useState(oldValue ? oldValue : "");
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
      className={`${contentClass} ${
        isBlurredAndEmpty ? "border-2 border-red-600" : ""
      }`}
      ref={contentRef}
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
          maxLength={maxLength}
        />
      )}
    </div>
  );
}
