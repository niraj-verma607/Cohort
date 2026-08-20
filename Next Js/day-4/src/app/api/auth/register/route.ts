import { genrateToken } from "@/lib/jwt";
import { connectDB } from "@/lib/mongodb";
import userModel from "@/models/User.model";
import { ApiResponse } from "@/types/api.types";
import { RegisterBody } from "@/types/user.types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    let body: RegisterBody = await req.json();
    let { name, email, mobile, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          message: "All fields are required",
        },
        {
          status: 400,
        },
      );
    }

    let isExisted = await userModel.findOne({ email });

    if (isExisted) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          message: "User already exists",
        },
        {
          status: 409,
        },
      );
    }

    let newUser = await userModel.create({
      name,
      email,
      password,
      mobile,
    });

    let token = genrateToken({ userId: newUser._id.toString() });

    let response = NextResponse.json<ApiResponse>(
      {
        success: true,
        message: "User regisetred successfully",
        data: {
          user: {
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
          },
        },
      },
      {
        status: 201,
      },
    );

    response.cookies.set("token", token, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 1000,
    });

    return response;
  } catch (error) {
    console.log("Error in register API : ", error);
    return NextResponse.json<ApiResponse>(
      {
        success: false,
        message: "Something went wrong",
        error: {
          error,
        },
      },
      { status: 500 },
    );
  }
}
