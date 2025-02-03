"use client";

import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInputs from "@/components/FormInputs/TextareaInputs";
import TextInputs from "@/components/FormInputs/TextInputs";
import { makePostRequest } from "@/lib/apiRequest";

import  { useState } from "react";
import { useForm } from "react-hook-form";

export default function TransferInventoryForm({items,warehouses }) {
 
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  async function onSubmit(data) {
    console.log(data);
    setLoading(true);
    
    
    makePostRequest(
      setLoading,
      "api/adjustment/transfer",
      data,
      "StockAdjustment",
      reset
    );
  }
  return (
    <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 w-full max-w-4xl p-4 bg-white border border-gray-200 
        rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 my-3">
        <TextInputs
            label="Reference Number"
            name="referenceNumber"
            register={register}
            errors={errors}
           className="w-full"
          />
          <SelectInput
            name="itemId"
            label="Select the Item "
            register={register}
            className="w-full "
            options={items}
          />
        <TextInputs
            type="number"
            label="Enter Quantity of Stock to Transfer"
            name="transferStockQty"
            register={register}
            errors={errors} 
          /> 
          <SelectInput
            name="givingWarehouseId"
            label="Select the Warehouse that will give the Stock "
            register={register}
            className="w-full "
            options={warehouses}
          />
           <SelectInput
            name="receivingWarehouseId"
            label="Select the Warehouse that will receive the Stock "
            register={register}
            className="w-full "
            options={warehouses}
          />
          <TextareaInputs
            label="Adjustment Notes"
            name="notes"
            register={register}
            errors={errors}
          />
          </div>
   

        <SubmitButton isLoading={loading} title="adjustment" />
      </form>
    
  );
}
