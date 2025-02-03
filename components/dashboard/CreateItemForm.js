"use client";

import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";

import TextInputs from "@/components/FormInputs/TextInputs";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

import ImageInput from "@/components/FormInputs/ImageInput";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { useRouter } from "next/router";

export default function CreateItemForm({
  categories,
  units,
  brands,
  warehouses,
  suppliers,
  initialData={},
  isUpdate=false,
}) {
  const [imageUrl, setImageUrl] = useState(initialData?.imageUrl);
  const router =useRouter
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({defaultValues:initialData});
  const [loading, setLoading] = useState(false);
  function redirect(){
    router.push("/dashboard/inventory/items")
  }console.log(initialData+"rdrd");
  
  async function onSubmit(data) {
    data.imageUrl=imageUrl
    console.log(data)
    if(isUpdate){  
      makePutRequest(
       setLoading,
       `api/items/${initialData.id}`,
       data,
       "Item",  
         redirect,
       reset
     )
    }
     else{

      makePostRequest(setLoading,"api/items",data,"Item",reset)
      setImageUrl(null)
  }
    
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-6 w-full max-w-4xl p-4 bg-white border border-gray-200 
        rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto"
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 my-3">
        <TextInputs
          label="Item Title"
          name="title"
          register={register}
          errors={errors}
          className="w-full"
        />
        <SelectInput
          name="categoryId"
          label="Select the Item Category "
          register={register}
          className="w-full "
          options={categories}
        />

        <TextInputs
          label="Item SKU"
          name="sku"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInputs
          label="Item Barcode"
          name="barcode"
          register={register}
          errors={errors}
          // isRequired="false"
          className="w-full"
        />
        <TextInputs
          label="Item Quantity"
          name="qty"
          register={register}
          errors={errors}
          className="w-full"
        />
        <SelectInput
          name="unitId"
          label="Select the Item Unit "
          register={register}
          className="w-full "
          options={units}
        />
        <SelectInput
          name="brandId"
          label="Select the Item Brand "
          register={register}
          className="w-full "
          options={brands}
        />
        <TextInputs
          label="Buying Price"
          name="buyingPrice"
          register={register}
          errors={errors}
          type="number"
          className="w-full"
        />
        <TextInputs
          label="Selling Price"
          name="sellingPrice"
          register={register}
          errors={errors}
          type="number"
          className="w-full"
        />
        <SelectInput
          name="supplierId"
          label="Select the Item Supplier "
          register={register}
          className="w-full "
          options={suppliers}
        />

        <TextInputs
          label="Re-Order Point"
          name="reOrderPoint"
          register={register}
          errors={errors}
          type="number"
          className="w-full"
        />
        <SelectInput
          name="warehouseId"
          label="Select the Item Warehouse "
          register={register}
          className="w-full "
          options={warehouses}
        />
        <TextInputs
          label="Item Weight in Kgs"
          name="weight"
          register={register}
          errors={errors}
          type="number"
          className="w-full"
        />
        <TextInputs
          label="Item Dimensions in cm(20 x 30 x 100)"
          name="dimensions"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInputs
          label="Item Tax Rate in %"
          name="taxRate"
          type="number"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInputs
          label="Item Description "
          name="description"
          register={register}
          errors={errors}
        />
        <TextInputs
          label="Item Notes"
          name="notes"
          register={register}
          errors={errors}
        />
        <ImageInput
          label="Item Image "
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          endpoint="imageUploader"
        />
      </div>

      <SubmitButton isLoading={loading} title={isUpdate?"Update Item":"New Item"}/>
    </form>
  );
}
