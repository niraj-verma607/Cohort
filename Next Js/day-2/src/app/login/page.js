"use client";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { api } from "@/lib/api";
import { useRouter } from "next/navigation";

const Page = () => {
  let router = useRouter();
  const [formData, setFormData] = useState({});
//   console.log(formData);

  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await api.post("/api/auth/login", formData);
      console.log(res);
      router.push("/home");
    } catch (err) {
      console.log("Error in login : ", err);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 px-4">
      <Card className="w-full max-w-md rounded-2xl shadow-lg">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
          <p className="text-sm text-muted-foreground">Login to your account</p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                onChange={handleChange}
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                name="password"
                onChange={handleChange}
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>

            {/* Login */}
            <Button type="submit" className="w-full rounded-xl">
              Login
            </Button>

            {/* Sign Up */}
            <p className="text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="font-medium text-primary hover:underline"
              >
                Register
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
