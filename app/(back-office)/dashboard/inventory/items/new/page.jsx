import CreateItemForm from "@/components/dashboard/CreateItemForm";
import FormHeader from "@/components/dashboard/FormHeader";
import { getData } from "@/lib/getData";
import { Suspense } from "react";
// import React, { useState } from "react";

export default async function NewItem({ initialData = {}, isUpdate = false }) {
  // sequencial fetching=> waterfall
  const categoriesData = getData("categories");
  const unitsData = getData("units");
  const brandsData = getData("brands");
  const warehousesData = getData("warehouse");
  const suppliersData = getData("suppliers");

  // parallel fetching

  const [categories, units, brands, warehouses, suppliers] = await Promise.all([
    categoriesData,
    unitsData,
    brandsData,
    warehousesData,
    suppliersData,
  ]);
  console.log(
    categoriesData,
    unitsData,
    brandsData,
    warehousesData,
    suppliersData
  );

  return (
    <div>
      {/* Header */}
      <FormHeader
        title={isUpdate ? "UpdateItem" : "New Item"}
        href="/dashboard/inventory/items"
      />
      <Suspense fallback={<></>}>
        {/* form */}
        <CreateItemForm
          categories={categories}
          units={units}
          brands={brands}
          warehouses={warehouses}
          suppliers={suppliers}
          initialData={initialData}
          isUpdate={isUpdate}
        />
      </Suspense>
    </div>
  );
}
