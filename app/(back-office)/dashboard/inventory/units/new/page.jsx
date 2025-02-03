"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInputs from "@/components/FormInputs/TextareaInputs";
import TextInputs from "@/components/FormInputs/TextInputs";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { Plus, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function NewUnits({initialData={},isUpdate=false} ) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues : initialData
  }
    
  );
  const [loading, setLoading] = useState(false);
  function redirect(){
    router.push("/dashboard/inventory/units")

  }
   async function onSubmit(data) {
    console.log(data)
    setLoading(true)
   if(isUpdate){
     // update request
     makePutRequest(
      setLoading,
      `api/units/${initialData.id}`,
      data,
      "Unit",  
        redirect,
      reset
    );
   }else{
    makePostRequest(
      setLoading,
      "/api/units",
      data,
      "units",
      reset
    );
   } 
  }
  return (
    <div>
      {/* Header */}
      <FormHeader title={isUpdate?"Update Unit":"New Unit"} href="/dashboard/inventory/units" />
      {/* form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 w-full max-w-4xl p-4 bg-white border border-gray-200 
        rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 my-3">
          <TextInputs
            label="Unit Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInputs
            label="Unit Abbreviation"
            name="abbreviation"
            register={register}
            errors={errors}
            className="w-full"
          />
           
        </div>


        <SubmitButton isLoading={loading} title={isUpdate?"Updated Unit":"New Unit"} />
      </form>
    </div>
  );
}

