import DataTable from '@/components/dashboard/DataTable'
import FixedHeader from '@/components/dashboard/FixedHeader'
import { getData } from '@/lib/getData'



export default async function Units() {
  const units=await getData("units")
  const columns =["title","abbreviation"]  
  return (
    <div>
    {/* Header */}
    <FixedHeader title="Units" newLink="/dashboard/inventory/units/new"/>   
    {/* table */}
    <div className='my-4 p-8 '>
    <DataTable data={units} columns={columns} resourceTitle="units"/>
   
    </div>
  </div>
  )
}
