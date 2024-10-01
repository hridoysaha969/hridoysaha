import { projectArray } from "@/lib/constant";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const projects = projectArray;
  let result = [];

  if (params.category === "all") {
    result = projects;
    return NextResponse.json({ result, success: true }, { status: 200 });
  } else if (params.category === "web-development") {
    const devProjects = projects.filter(
      (item) => item.category === "web-development"
    );
    result = devProjects;
    return NextResponse.json({ result, success: true }, { status: 200 });
  } else if (params.category === "web-design") {
    const designProjects = projects.filter(
      (item) => item.category === "web-design"
    );
    result = designProjects;
    return NextResponse.json({ result, success: true }, { status: 200 });
  }

  return NextResponse.json({ result, success: false }, { status: 400 });
}
