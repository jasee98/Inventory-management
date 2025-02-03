"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function SelectInput({
  label,
  name,
  register,
  className = "sm:col-span-2",
  options=[]  
}) {
//   const {
//     register,
//     formState: { errors },
//   } = useForm();
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900 mb-2 "
      >
       {label}
      </label>
      <div className="mt-2">
            <select
              {...register(`${name}`, { required: true})}
              name={name}
              id={name}
              rows={3}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm 
              ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
               focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={""}
              >{options.map((option,i)=>{
                return(
                    <option key={i} value={option.id} >
                        {option.title}

                    </option>
                )
            })}</select>
            
           
          </div>
      
    </div>
  );
}
