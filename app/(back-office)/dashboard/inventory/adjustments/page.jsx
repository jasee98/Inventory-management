// import DataTable from '@/components/dashboard/DataTable'
// import FixedHeader from '@/components/dashboard/FixedHeader'
// import { getData } from '@/lib/getData'



// export default async function Adjustments() {
//   const addAdjustments=await getData("adjustment/add")
//   const transferAdjustments=await getData("adjustment/transfer")


//   const [addAdjustment,transferAdjustments]=await Promise.all
//   ([addAdjustmentsData,transferAdjustmentsData])
//   const addColumns =["referenceNumber","addStockQty"]  
//   const transferColumns =["referenceNumber","transferStockQty"] 
//   return (
//     <div>
//     {/* Header */}
//     <FixedHeader title="Adjustments" newLink="/dashboard/inventory/adjustments/new"/>   
//     {/* table */}
//     <div className='my-4 p-8 '>
//       <h2 className='py-4 text-xl font-semibold'>Stock Increments Adjustments</h2>
//     <DataTable data={addAdjustments} columns={addColumns}/>
//     </div>
//     <div className='my-4 p-8 '>
//       <h2 className='py-4 text-xl font-semibold'>Stock Transfer Adjustments</h2>
//     <DataTable data={transferAdjustments} columns={transferColumns}/>
//     </div>
//   </div>
//   )
// }
