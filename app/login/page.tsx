"use client";
// import { useRouter } from 'next/router'
import { useState } from "react";
import axios, { AxiosError } from "axios";
import PocketBase from "pocketbase";
import { userAuthLogin } from "../api/user.api";
import { redirect } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const handleLogin = async (data: LoginFormData) => {
    console.log("Login Data:", data);
    try {
      const response = await userAuthLogin(data.username, data.password);
      console.log(response);
      redirect("/dashboard");
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#8D5BE9] p-10 flex justify-items-center">
      <div className="flex items-center justify-center min-h-screen">
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="p-6 bg-white rounded shadow-md mx-[500px]"
        >
          <h2 className="mb-4 text-black text-lg font-bold">Login</h2>

          {errors.username && (
            <p className="text-red-500">{errors.username.message}</p>
          )}
          <input
            type="text"
            placeholder="Username"
            {...register("username")}
            className="w-full mb-2 p-2 border rounded text-black"
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username.message}</p>
          )}

          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            className="w-full mb-4 p-2 border rounded text-black"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}

          <button
            type="submit"
            className="w-full p-2 bg-[#8D5BE9] text-white rounded-2xl"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
