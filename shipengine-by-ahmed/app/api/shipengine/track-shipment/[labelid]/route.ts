import { shipengine } from "@/helper/shipEngine";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { labelId: Promise<string> } }
) {
  const LabelId  = await params.labelId;


try {
  const label = await shipengine.trackUsingLabelId(LabelId);

  return NextResponse.json(label, { status: 200 });
} catch (error) {
  console.log(error);
  return new Response(JSON.stringify({ error: error }), {
    status: 500,
  });
}
}