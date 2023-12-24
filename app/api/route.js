import { NextResponse } from "next/server";
import { ContactDB } from "@/lib/config/db";
import TodoModel from "@/lib/models/TodoModels";
const LoadDB = async () => {
  await ContactDB();
};

LoadDB();

export async function POST(request) {
  const { title, description } = await request.json();

  await TodoModel.create({
    title,
    description,
  });
  return NextResponse.json({
    msg: "Hello Todo created",
  });
}

export async function GET(request) {
  const todos = await TodoModel.find({});
  return NextResponse.json({ todos });
}
