/* eslint-disable react/jsx-no-undef */
import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";
import ImageAvarta from "./assets/tuananhdeveloper (2).png";

export default function Home() {
  // const { data: session } = useSession();
  return (
    <Layout>
      <div className="text-blue-900 flex justify-between">
        {/* <h2>Hello, <b> {session?.user?.name} </b> </h2> */}
        <h2>Hello, <b> User Name </b> </h2>
        <div className="flex bg-gray-300 gap-1 text-black rounded-lg overflow-hidden">
            {/* <img src={session?.user?.image} alt="avatar" className="w-6 h-6 " /> */}
            <img src={ImageAvarta} alt="avatar" className="w-6 h-6 " />
            <span className="px-2">
              {/* {session?.user?.name} */}
              User Name
            </span>
        </div>  
      </div>
    </Layout>
  );
}
