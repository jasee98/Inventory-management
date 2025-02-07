
import { redirect, useRouter } from "next/navigation";
import toast from "react-hot-toast";

export async function makePostRequest(setLoading,endpoint,data,resourceName,reset){
    try {
        setLoading(true);
        const baseUrl = "http://localhost:3000";
        const response = await fetch( `${baseUrl}/${endpoint}`, {
          method: "POST",
          headers: {
            "content-type": "application.json",
          },
          body: JSON.stringify(data),
        });
        if (response.ok) {
          console.log(response);
          
          setLoading(false);
          toast.success(`New ${resourceName} Created Successfully`)
          reset();
        }else{
            setLoading(true)
            toast.error("Something went wrong")
        }
        reset();
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }

    export async function makePutRequest(setLoading,endpoint,data,resourceName,redirect,reset){
      try {
          setLoading(true);
          const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
          const response = await fetch( `${baseUrl}/${endpoint}`, {
            method: "PUT",
            headers: {
              "content-type": "application.json",
            },
            body: JSON.stringify(data),
          });
          if (response.ok) {
            console.log(response);
            
            setLoading(false);
            toast.success(`${resourceName} Updated Successfully`)
            redirect
          }else{
              setLoading(false)
              console.log(response);
              
              toast.error("Something went wrong")
          }
          reset();
        } catch (error) {
          setLoading(false);
          console.log(error);
        }
      }