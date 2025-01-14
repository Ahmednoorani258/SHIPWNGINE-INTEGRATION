import Image from "next/image";
import Shipment from "./components/Shipment";
import Label from "./components/Labels";
import Tracking from "./components/Tracking";
import FormComponent from "./components/Form";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
    <h1 className=" text-4xl underline italic">ShipEngine A.P.I</h1>
     {/* <Shipment/>   */}
     {/* <Label/> */}
     {/* <Tracking  /> */}
     <FormComponent/>
   </div>
  );
}
