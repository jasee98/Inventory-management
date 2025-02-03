import React from 'react' 
import { getData } from '@/lib/getData'
import NewSupplier from '../../new/page';

export default async function Update({ params }) {
  const { id } = await params; // Wait for params to resolve
  const data = await getData(`suppliers/${id}`);
  console.log(data,);
  return <NewSupplier initialData={data} isUpdate={true} />;
}