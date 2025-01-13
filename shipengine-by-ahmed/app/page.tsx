import Image from "next/image";
import Shipment from "./components/Shipment";
import Label from "./components/Labels";
import Tracking from "./components/Tracking";

export default function Home() {
  return (
    <div>
    <h1>Shipment</h1>
     {/* <Shipment/>   */}
     {/* <Label/> */}
     <Tracking  />
   </div>
  );
}
