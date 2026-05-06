'use client';

import { useState } from "react";
import { login } from "@/lib/api";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        
        try {
            const data = await login({ email, password });
            
            if (typeof window !== 'undefined') {
                localStorage.setItem('accessToken', data.accessToken);
                localStorage.setItem('refreshToken', data.refreshToken);
                localStorage.setItem('user', JSON.stringify(data.user));
            }

            router.push('/dashboard');
        } catch (err: any) {
            setError(err.response?.data?.error || "Login failed. Check your credentials.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-50 p-6 font-sans">
            <div className="w-full max-w-sm">
                <div className="mb-10 text-center">
                    <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight">Welcome back</h1>
                    <p className="text-zinc-500 mt-2 text-sm">Sign in to your account to continue</p>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
                    {error && (
                        <div className="mb-6 p-3 bg-red-50 border border-red-100 text-red-600 text-xs rounded-lg text-center font-medium">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-1.5">
                            <label className="text-xs font-medium text-zinc-700 ml-1">Email Address</label>
                            <input 
                                type="email" 
                                required
                                className="w-full px-4 py-2.5 text-gray-600 border border-zinc-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all placeholder:text-zinc-400"
                                placeholder="jane@example.com" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-medium text-zinc-700 ml-1">Password</label>
                            <input 
                                type="password" 
                                required
                                className="w-full px-4 py-2.5 text-gray-600 border border-zinc-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all placeholder:text-zinc-400"
                                placeholder="••••••••" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                        </div>

                        <button 
                            type="submit" 
                            disabled={loading}
                            className="w-full bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium py-3 rounded-xl transition-all active:scale-[0.98] disabled:opacity-50 mt-2"
                        >
                            {loading ? "Signing in..." : "Login"}
                        </button>
                    </form>
                </div>

                <p className="text-center text-zinc-500 mt-8 text-sm">
                    Don't have an account?{" "}
                    <Link href="/register" className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}
