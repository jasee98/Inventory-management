import DataTable from '@/components/dashboard/DataTable'
import FixedHeader from '@/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData'



export default async function Items() {
  const items=await getData("items")
  const columns =["imageUrl","title","sellingPrice"]  
  return (
    <div>
    {/* Header */}
    <FixedHeader title="Items" newLink="/dashboard/inventory/items/new"/>   
    {/* table */}
    <div className='my-4 p-8 '>
    <DataTable data={items} columns={columns} resourceTitle='items'/>
   
    </div>
  </div>
  )
}
