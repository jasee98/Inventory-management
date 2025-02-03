"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInputs from "@/components/FormInputs/TextareaInputs";
import TextInputs from "@/components/FormInputs/TextInputs";
import { makePostRequest } from "@/lib/apiRequest";
import { Plus, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function NewWarehouse() {
  const SelectOptions = [
    {
      id: "main",
      title: "main",
    },
    {
      id: "branch",
       title: "Branch",
      
    },
  ];
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialData,
  });
  const [loading, setLoading] = useState(false);
  async function onSubmit(data) {
    console.log(data);
    setLoading(true);
   
    makePostRequest(
      setLoading,
      "api/warehouse",
      data,
      "warehouse",
      reset
    );
  }
  return (
    <div>
      {/* Header */}
      <FormHeader title="New Warehouse" href="/dashboard/inventory/warehouse" />
      {/* form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 w-full max-w-4xl p-4 bg-white border border-gray-200 
        rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 my-3">
          <SelectInput
            name="type"
            label="Select the Warehouse Type "
            register={register}
            className="w-full "
            options={SelectOptions}
          />

          <TextInputs
            label="Warehouse Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInputs
            label="Warehouse Location"
            name="location"
            register={register}
            errors={errors}
            
          />
          <TextareaInputs
            label="Warehouse Description"
            name="description"
            register={register}
            errors={errors}
          />
        </div>

        <SubmitButton isLoading={loading} title="Warehouse" />
      </form>
    </div>
  );
}
