"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInputs from "@/components/FormInputs/TextareaInputs";
import TextInputs from "@/components/FormInputs/TextInputs";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";


export default function NewCategory({initialData={},isUpdate=false }) {
const router=useRouter()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialData,
  } );
  function redirect(){
    router.replace("/dashboard/inventory/categories")
  }
  const [loading, setLoading] =useState(false);
   async function onSubmit(data) {
    console.log(initialData.id)
    if(isUpdate){  
      makePutRequest(
       setLoading,
       `api/categories/${initialData.id}`,
       data,
       "Category",  
         redirect,
       reset
     )
    }
     else{
      makePostRequest(
        setLoading,
        "api/categories",
        data,
        "Category",
        reset
      )   
  }}
  return (
    <div>
      {/* Header */}
      <FormHeader title={isUpdate?"Update Category":"New Category"} href="/dashboard/inventory/categories" />
      {/* form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 w-full max-w-4xl p-4 bg-white border border-gray-200 
        rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 my-3">
          <TextInputs
            label="Category Title"
            name="title"
            register={register}
            errors={errors}
          />
           <TextareaInputs
            label="Category Description"
            name="description"
            register={register}
            errors={errors}/>
        </div>
        <SubmitButton  isLoading={loading} title={isUpdate?"update Category":"New Category"} />
      </form>
    </div>
  );
}
