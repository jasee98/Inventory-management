
import React from 'react'
import NewBrand from '../../new/page' 
import { getData } from '@/lib/getData'
import NewItem from '../../new/page';

export default async function Update({ params }) {
  const { id } = await params;
  console.log(id);
   // Wait for params to resolve
  const data = await getData(`brands/${id}`);

  console.log('data',data  );

  return <NewItem initialData={data} isUpdate={true} />;
}