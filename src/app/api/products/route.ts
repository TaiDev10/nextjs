import Product from "@/app/modules/product";
import { connect } from "@/server/mongodbConnect";
import { NextResponse } from "next/server";

export  async function GET() {
    await connect();
    try {
        const products = await Product.find();
        return NextResponse.json(products);
    } catch (err: any) {       
      return  NextResponse.json({ message: err.message });
    }

}