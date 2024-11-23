"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInputs from "@/components/FormInputs/TextareaInputs";
import TextInputs from "@/components/FormInputs/TextInputs";
import { Plus, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Warehouse from "../../warehouse/page";

export default function NewItem() {
  const Categories = [
    {
      label: "Electronics",
      value: "guyasf54675785hg",
    },
    {
      label: "Clothes",
      value: "hwghdw4535567hgdf",
    },
  ];
  const units = [
    {
      label: "Kg",
      value: "guyasf54675785hg",
    },
    {
      label: "Pcs",
      value: "hwghdw4535567hgdf",
    },
  ];
  const brands = [
    {
      label: "HP",
      value: "guyasf54675785hg",
    },
    {
      label: "Dell",
      value: "hwghdw4535567hgdf",
    },
  ];
  const warehouses = [
    {
      label: "Warehouse A",
      value: "guyasf54675785hg",
    },
    {
      label: "Warehouse B",
      value: "hwghdw4535567hgdf",
    },
    {
      label: "Warehouse C",
      value: "hwghdw4535567hgdf",
    },
  ];
  const Suppliers = [
    {
      label: "  Supplier A",
      value: "guyasf54675785hg",
    },
    {
      label: " Supplier B",
      value: "hwghdw4535567hgdf",
    },
    {
      label: " Supplier C",
      value: "hwghdw4535567hgdf",
    },
  ];
  

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
    const baseUrl = "http://localhost3000";
    try {
      const response = await fetch(`${baseUrl}/api/items`, {
        method: "POST",
        headers: {
          "content-type": "application.json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log(response);
        setLoading(false);
        reset();
      }
      reset();
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  return (
    <div>
      {/* Header */}
      <FormHeader title="New Item" href="/dashboard/inventory/" />
      {/* form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 w-full max-w-4xl p-4 bg-white border border-gray-200 
        rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 my-3">
          <TextInputs
            label="Warehouse Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <SelectInput
            name="CategoryId"
            label="Select the Item Category "
            register={register}
            className="w-full "
            options={Categories}
          />

          <TextInputs
            label="Item SKU"
            name="sku "
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInputs
            label="Item Barcode"
            name="barcode  "
            register={register}
            errors={errors}
            // isRequired="false"
            className="w-full"
          />
          <TextInputs
            label="Item Quantity"
            name="qty  "
            register={register}
            errors={errors}
            className="w-full"
          />
          <SelectInput
            name="Unit Id"
            label="Select the Item Unit "
            register={register}
            className="w-full "
            options={units}
          />
          <SelectInput
            name="Brand Id"
            label="Select the Item Brand "
            register={register}
            className="w-full "
            options={brands}
          />
          <TextInputs
            label="Buying Price"
            name="buyingPrice "
            register={register}
            errors={errors}
            type="number"
            className="w-full"
          />
          <TextInputs
            label="Selling Price"
            name="sellingPrice "
            register={register}
            errors={errors}
            type="number"
            className="w-full"
          />
          <SelectInput
            name="SupplierId"
            label="Select the Item Supplier "
            register={register}
            className="w-full "
            options={Suppliers}
          />

          <TextInputs
            label="Re-Order Point"
            name="reOrderPoint "
            register={register}
            errors={errors}
            type="number"
            className="w-full"
          />
          <SelectInput
            name="WarehouseId"
            label="Select the Item Warehouse "
            register={register}
            className="w-full "
            options={warehouses}
          />
          <TextInputs
            label="Item Weight in Kgs"
            name="weight "
            register={register}
            errors={errors}
            type="number"
            className="w-full"
          />
          <TextInputs
            label="Item Dimensions in cm(20 x 30 x 100)"
            name="dimensions "
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
            name="description  "
            register={register}
            errors={errors}
            
          />
           <TextInputs
            label="Item Notes"
            name="notes "
            register={register}
            errors={errors}
            
          />
          

        
        </div>

        <SubmitButton isLoading={loading} title="Item" />
      </form>
    </div>
  );
}
