"use client"
// import { useRouter } from 'next/router'
import { useState } from 'react'
import axios, { AxiosError } from 'axios'
import PocketBase from 'pocketbase';
import { userAuthLogin } from '../api/user.api';
import { redirect } from "next/navigation";

const Login = () => {
  // const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const response = await userAuthLogin(username, password)
    console.log(response);
    redirect("/dashboard");
  }



  
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleLogin} className="p-6 bg-white rounded shadow-md">
        <h2 className="mb-4 text-lg font-bold">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-2 p-2 border rounded text-black"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border rounded text-black"
        />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
