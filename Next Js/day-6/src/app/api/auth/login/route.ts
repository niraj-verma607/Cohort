import { genrateToken } from "@/lib/jwt";
import { connectDB } from "@/lib/mongodb";
import userModel from "@/models/User.model";
import { ApiResponse } from "@/types/api.types";
import { LoginBody } from "@/types/user.types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    let body: LoginBody = await req.json();
    let { email, password } = body;

    if (!email || !password) {
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

    if (!isExisted) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          message: "User not found",
        },
        {
          status: 404,
        },
      );
    }

    let matchPass = isExisted.comparePass(password);

    if (!matchPass) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          message: "Invalid credentials",
        },
        {
          status: 401,
        },
      );
    }

    let token = genrateToken({ userId: isExisted._id.toString() });

    let response = NextResponse.json<ApiResponse>(
      {
        success: true,
        message: "User Login successfully",
        data: {
          user: {
            _id: isExisted._id,
            name: isExisted.name,
            email: isExisted.email,
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
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
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
