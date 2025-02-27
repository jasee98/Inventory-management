
export async function getData(endpoint){
    try {
        const baseUrl= process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
        const response=await fetch(`${baseUrl}/api/${endpoint}`,
            {cache:"no-store"})
        const data = await response.json()
        console.log("data:",data)
        return data
    } catch (error) {
        console.log(error)
        return []
        
    }
}