import DataTable from '@/components/dashboard/DataTable'
import FixedHeader from '@/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData'



export default async function Warehouses() {
  const warehouses=await getData("warehouse")
  const columns =["title","location","warehouseType"]
  return (
    <div>
    {/* Header */}
    <FixedHeader title="Warehouses" newLink="/dashboard/inventory/warehouse/new"/>   
    {/* table */}
    <div className='my-4 p-8 '>
    <DataTable data={warehouses} columns={columns}/>
   
    </div>
  </div>
  )
}


