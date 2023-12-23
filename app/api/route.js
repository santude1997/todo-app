import { NextResponse } from "next/server";
import {ContactDB} from "@/lib/config/db";

const LoadDB = async () =>{
    await ContactDB();
}

LoadDB();
export async function GET(request){
    return NextResponse.json({
        msg:"Hello I am from the Next server"
    })
}


// gQTVSRAan9Rdb1aY;