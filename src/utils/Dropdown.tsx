// import { useState } from "react";
// import { DropdownType } from "../../types/dropdown.type";

// type DropdownProps = {
//   type: number;
//   values: DropdownType[];
//   onChange: (value?: string) => void;
//   title?: string;
//   selected?: string;
// };

// function Dropdown({ values, type, onChange, title, selected }: DropdownProps) {
//   const [statusRotation, setStatusRotation] = useState(false);

//   const handleStatusSelectClick = () => {
//     setStatusRotation(!statusRotation);
//   };

//   const onBLurStatusSelect = () => {
//     setStatusRotation(false);
//   }

//   if (type == 2) {
//     return (
//       <div className="test">
//         <div className="relative w-36 h-10 shadow-md rounded-lg
//         before:flex before:justify-center
//         before:items-center before:absolute
//         before:right-0 before:-top-0
//         before:w-10 before:h-10
//         before:rounded-lg
//         before:bg-cream
//         before:hover:bg-cream2
//         before:hover:pointer-events-none
//         before:transistion
//         before:duration-200
//         before:ease-in-out">
//           <svg
//             className={`pointer-events-none absolute right-3 top-3 w-4 h-4 transition-all duration-200 ${statusRotation ? "rotate-180" : ""
//               }`}
//             viewBox="0 0 14 8"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M1 1L7 7L13 1"
//               stroke="#212429"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//           <select
//             className="hover:cursor-pointer flex w-full h-full rounded-lg pl-3 focus:outline-none"
//             name="lesson"
//             id="lesson"
//             onClick={handleStatusSelectClick}
//             onBlur={onBLurStatusSelect}
//             onChange={(e) => { onChange(e.target.value); console.log(e.target.value) }}
//           >
//             {
//               title && <option value={""} selected>{title}</option>
//             }
//             {
//               values.map((value) => (
//                 <option key={value.value} value={value.value}>{value.name}</option>
//               ))
//             }
//           </select>
//         </div>
//       </div>);
//   }

//   return (
//     <div className="test">
//       <div className="relative w-28 h-10 shadow-md rounded-lg before:flex before:justify-center before:items-center before:absolute before:right-0 before:-top-0 before:w-10 before:h-10 before:rounded-lg before:bg-cream before:hover:bg-cream2 before:hover:pointer-events-none before:transistion before:duration-200 before:ease-in-out">
//         <svg
//           className={`pointer-events-none absolute right-3 top-3 w-4 h-4 transition-all duration-200 ${statusRotation ? "rotate-180" : ""
//             }`}
//           viewBox="0 0 14 8"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M1 1L7 7L13 1"
//             stroke="#212429"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//         <select
//           className="hover:cursor-pointer flex w-full h-full rounded-lg pl-3 focus:outline-none"
//           name="lesson"
//           id="lesson"
//           onClick={handleStatusSelectClick}
//           onBlur={onBLurStatusSelect}
//           onChange={(e) => { onChange(e.target.value); console.log(e.target.value) }}
//         >
//           {
//             title && <option value={""} selected>{title}</option>
//           }
//           {
//             values.map((value) => {
//               if (selected == value.value)
//                 return <option key={value.value} value={value.value} selected>{value.name}</option>
//               else
//                 return <option key={value.value} value={value.value}>{value.name}</option>
//             })
//           }
//         </select>
//       </div>
//     </div>
//   );
// }

// export default Dropdown;

export default function Dropdown() {
  return (
        <select className={`flex focus:outline-none 
        text-xs lg:text-base 
        h-fit w-full py-2
         bg-midnight-700 rounded-sm text-pearl-50 px-4 cursor-pointer hover:bg-midnight-300 active:bg-midnight-50`}>
          <option key={1} value={1}>
            A
          </option>
          <option key={1} value={1}>
            B
          </option>
          <option key={1} value={1}>
            C
          </option>
          <option key={1} value={1}>
            D
          </option>
          <option key={1} value={1}>
            E
          </option>
          <option key={1} value={1}>
            F
          </option>
        </select>
  );
}
