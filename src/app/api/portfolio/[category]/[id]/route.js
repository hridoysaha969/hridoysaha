import { projectArray } from "@/lib/constant";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const allProject = projectArray;
  let result = [];

  const singleProject = await allProject.filter(
    (item) => item._id == params.id
  );

  if (singleProject) {
    return NextResponse.json(
      { result: singleProject[0], success: true },
      { status: 200 }
    );
  }

  return NextResponse.json({ result, success: false }, { status: 400 });
}
