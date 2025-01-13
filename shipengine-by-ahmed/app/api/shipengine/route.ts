import { shipengine } from "@/helper/shipEngine";
import { Postpone } from "next/dist/server/app-render/dynamic-rendering";
import { NextRequest } from "next/server";

export async function GET(){
    return new Response(JSON.stringify("hello"))
}

export async function POST(req:NextRequest){
    const {shipToAddress,packages} = await req.json()
    try {
        const shipmentDetails = await shipengine.getRatesWithShipmentDetails({
            shipment:{
                shipTo:shipToAddress,
                shipFrom:{
                    name:"Ahmed",
                    phone:'03353791610',
                    addressLine1:"add 1",
                    addressLine2:"add 2",
                    cityLocality:"karachi",
                    stateProvince:"sindh",
                    addressResidentialIndicator:"yes",
                    countryCode:"PK",
                    postalCode:"123"

                },
                packages:packages
            },
            rateOptions:{
                carrierIds:[
                    process.env.SHIPENGINE_FIRST_COURIER || "",
                    process.env.SHIPENGINE_SECOND_COURIER || "",
                    process.env.SHIPENGINE_THIRD_COURIER || "",
                    process.env.SHIPENGINE_FOURTH_COURIER || ""
                ].filter(Boolean)
            }
        })

        return new Response(JSON.stringify(shipmentDetails),{status:200})
    } catch (error) {
        return new Response(JSON.stringify(error))
    }
}