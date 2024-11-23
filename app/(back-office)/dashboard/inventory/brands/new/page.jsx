"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInputs from "@/components/FormInputs/TextareaInputs";
import TextInputs from "@/components/FormInputs/TextInputs";
import { Plus, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewUnits() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
   async function onSubmit(data) {
    console.log(data)
    setLoading(true)
    const baseUrl ="http://localhost3000"
    try {
      const response = await fetch (`${baseUrl}/api/brands`,{
        method:"POST",
        headers:{
          "content-type":"application.json"
        },
        body:JSON.stringify(data)
      })
      if(response.ok){console.log(response)
        setLoading(false)
        reset()
      }
    reset(); 
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  return (
    <div>
      {/* Header */}
      <FormHeader title="New Brands" href="/dashboard/inventory/" />
      {/* form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 w-full max-w-4xl p-4 bg-white border border-gray-200 
        rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 my-3">
          <TextInputs
            label="Brand Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          
        </div>


        <SubmitButton isLoading={loading} title="Brands" />
      </form>
    </div>
  );
}

