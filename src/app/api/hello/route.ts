import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    message: "Hello from RentByLocals API!",
    success: true
  });
}

export function POST(){
  return NextResponse.json({
    message : ""
  })
}