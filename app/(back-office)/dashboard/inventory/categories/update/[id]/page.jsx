import React from 'react'
import NewBrand from '../../new/page' 
import { getData } from '@/lib/getData'
import NewCategory from '../../new/page';

export default async function Update({ params }) {
  const { id } = await params; // Wait for params to resolve
  const data = await getData(`categories/${id}`);
  console.log(data);
  return <NewCategory initialData={data} isUpdate={true} />;
}