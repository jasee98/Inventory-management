"use client"
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

export default function DeleteBtn({ id, endpoint }) {
  const [loading, setLoading] = useState(false);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const router = useRouter();

  async function handleDelete() {
    setLoading(true);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`${baseUrl}/api/${endpoint}?id=${id}`, {
            method: "DELETE",
          }); 
          if (res.ok) {
            router.refresh();
            setLoading(false);
            toast.success("Deleted Successfully");
          } else {
           setLoading(false)
          }
        } catch (error) {
          console.error("Error deleting item:", error);
          setLoading(false);
          toast.error("An error occurred. Please try again later.");
        }
      } else {
        setLoading(false);
      }
    });
  }

  return (
    <>
      {loading ? (
        <button
          disabled
          type="button"
          className="..."
        >
          {/* Spinner and "Deleting" text */}
        </button>
      ) : (
        <button onClick={handleDelete} className="font-medium text-red-600 dark:text-blue-500 flex items-center space-x-2">
          <Trash2 className="w-4 h-4" />
          <span>Delete</span>
        </button>
      )}
    </>
  );
}