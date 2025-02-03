"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInputs from "@/components/FormInputs/TextareaInputs";
import TextInputs from "@/components/FormInputs/TextInputs";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { Plus, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function NewSupplier({initialData={},isUpdate=false }) {
  const router=useRouter()
  // const SelectOptions = [
  //   {
  //     label: "main",
  //     value: "main",
  //   },
  //   {
  //     label: "Branch",
  //     value: "branch",
  //   },
  // ];
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialData,
  });
  const [loading, setLoading] = useState(false);
  function redirect(){
    router.replace("/dashboard/inventory/supplier")
  }
  async function onSubmit(data) {
    console.log(data);
    if(isUpdate){  
      makePutRequest(
       setLoading,
       `api/suppliers/${initialData.id}`,
       data,
       "Supplier",  
         redirect,
       reset
     )
    }
     else{

    makePostRequest(setLoading, "api/suppliers", data, "Supplier", reset)}
  }
  return (
    <div>
      {/* Header */}
      <FormHeader title={isUpdate?"Update Supplier":"New Supplier"} href="/dashboard/inventory/supplier" />
      {/* form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 w-full max-w-4xl p-4 bg-white border border-gray-200 
        rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 my-3">
          <TextInputs
            label="Suppliers Name"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInputs
            label="Supplier Phone"
            name="phone"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInputs
            label="Supplier Email"
            name="email"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInputs
            label="Supplier Address"
            name="address"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInputs
            label="Supplier Contact Person"
            name="contactPerson"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInputs
            label="Supplier Code"
            name="supplierCode"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInputs
            label="Supplier TIN"
            name="taxID"
            register={register}
            errors={errors}
          />
          <TextareaInputs
            label="Supplier Payments terms"
            name="paymentTerms"
            register={register}
            errors={errors}
          />
          <TextareaInputs
            label="Notes"
            name="notes"
            register={register}
            errors={errors}
          />
        </div>

        <SubmitButton
          isLoading={loading}
          title={isUpdate ? "update Supplier" : "New Supplier"}
        />
      </form>
    </div>
  );
}
