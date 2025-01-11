import { shipEngine } from "@/helper/shipEngine";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { labelIdparam: string } }
) {
  const {labelIdparam} = await params;
  

  try {
    const label = await shipEngine.trackUsingLabelId(labelIdparam);

    return NextResponse.json(label, { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
    });
  }
}


export async function GET2(
  req: NextRequest,
  { params }: { params: { carrierCode: string; trackingNumber: string } }
) {
  const carrierCode = await params.carrierCode;
  const trackingNumber = await params.trackingNumber;
  

  try {
    const label = await shipEngine.trackUsingCarrierCodeAndTrackingNumber(
      {carrierCode,
      trackingNumber}
    );

    return NextResponse.json(label, { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
    });
  }
}