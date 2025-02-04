import Image from "next/image";
// import { AiOutlineArrowDown } from "react-icons/ai";
import Mockup from "../public/Mockup.png";
import ThemeLink from "./ThemeLink";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOption";
export default function Hero() {
  const session = getServerSession(authOptions);
  return (
    <div className="bg-gradient-to-b from-red-700 flex flex-col md:grid-cols-2 py-8 md:py-32 px-4 md:px-16 text-slate-50 items-center gap-6 h-full w-full">
      <div className="flex flex-col space-y-8 items-center max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold">
          Inventory management software designed for Indian businesses
        </h2>
        <p className="text-base md:text-xl">
          Manage orders. Track inventory. Handle GST billing. Oversee
          warehouses. One inventory management software to run all your
          inventory operations.
        </p>

        <div className="py-4 flex space-x-4item-center">
          {session ? (
            <ThemeLink
              className="bg-rose-600 hover:bg-rose-700 focus:ring-rose-300 "
              title="View Dashboard"
              href="/dashboard/home/overview"
              icon={""}
            />
          ) : (
            <ThemeLink
              className="bg-rose-600 hover:bg-rose-700 focus:ring-rose-300 "
              title="Access the Inventory System"
              href="/dashboard/home/overview"
              icon={""}
             />
          )}

          <ThemeLink
            className="bg-slate-50 hover:bg-slate-100 focus:ring-slate-300 text-slate-900  "
            title="Explore Demo Account"
            href="/dashboard/home/overview"
            icon={""}
          />
        </div>
      </div>
      <div className="">
        <Image src={Mockup} alt="Inventory App" />
      </div>
    </div>
  );
}
