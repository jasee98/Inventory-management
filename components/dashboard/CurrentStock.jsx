import DataTable from '@/components/dashboard/DataTable'
import FixedHeader from '@/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData'



export default async function CurrentStock() {
  const items=await getData("items")
  const columns =["imageUrl","title","sellingPrice"]  
  return (
    <div className='bg-pink-50 p-8 '>
    <h2 className='text-xl font-semibold'>Available Stock Items</h2> 
    {/* table */}
    <div className='my-4 p-8 '>
    <DataTable data={items} columns={columns} resourceTitle='items'/>
   
    </div>
  </div>
  )
}
