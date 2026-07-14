import { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Navigate } from "react-router-dom";

import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";

import { useAuth } from "../../context/AuthContext";
import api from "../../api/axios";

export default function Login() {

    const { login, isAuthenticated } = useAuth();

    const [username, setUsername] = useState("");

    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    if (isAuthenticated) {

        return <Navigate to="/dashboard" replace />;

    }

    const handleLogin = async (e) => {

        e.preventDefault();

        setLoading(true);

        setError("");

        try {

            const response = await api.post("/token/", {

                username,

                password,

            });

            login(

                response.data.access,

                response.data.refresh

            );

        }

        catch (err) {

            setError(

                "Invalid username or password."

            );

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <section className="relative min-h-screen overflow-hidden bg-slate-950 flex items-center justify-center px-6">

            {/* Background */}

            <div className="absolute -top-48 -left-48 w-[450px] h-[450px] rounded-full bg-blue-600/20 blur-[150px]" />

            <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] rounded-full bg-cyan-500/20 blur-[150px]" />

            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "linear-gradient(white 1px, transparent 1px),linear-gradient(90deg,white 1px,transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            <motion.div

                initial={{ opacity: 0, y: 40 }}

                animate={{ opacity: 1, y: 0 }}

                transition={{ duration: .6 }}

                className="relative w-full max-w-md"

            >

                <Card className="p-10">

                    <div className="text-center">

                        <h1 className="text-4xl font-black">

                            Portfolio CMS

                        </h1>

                        <p className="mt-3 text-slate-400">

                            Welcome Back 👋

                        </p>

                    </div>

                    <form

                        onSubmit={handleLogin}

                        className="space-y-6 mt-10"

                    >

                        <div className="relative">

                            <div className="absolute left-4 top-11 text-slate-500">

                                <FaUser />

                            </div>

                            <Input

                                label="Username"

                                placeholder="Enter username"

                                value={username}

                                onChange={(e) => setUsername(e.target.value)}

                            />

                        </div>

                        <div className="relative">

                            <div className="absolute left-4 top-11 text-slate-500">

                                <FaLock />

                            </div>

                            <Input

                                label="Password"

                                type={showPassword ? "text" : "password"}

                                placeholder="Enter password"

                                value={password}

                                onChange={(e) => setPassword(e.target.value)}

                            />
                                                        <button
                                type="button"
                                onClick={() =>
                                    setShowPassword(!showPassword)
                                }
                                className="absolute right-4 top-11 text-slate-400 hover:text-white transition"
                            >
                                {showPassword ? (
                                    <FaEyeSlash />
                                ) : (
                                    <FaEye />
                                )}
                            </button>

                        </div>

                        {error && (

                            <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">

                                {error}

                            </div>

                        )}

                        <div className="flex items-center justify-between text-sm">

                            <label className="flex items-center gap-2 text-slate-400">

                                <input
                                    type="checkbox"
                                    className="accent-blue-500"
                                />

                                Remember Me

                            </label>

                            <button
                                type="button"
                                className="text-blue-400 hover:text-blue-300 transition"
                            >

                                Forgot Password?

                            </button>

                        </div>

                        <Button
                            type="submit"
                            loading={loading}
                        >

                            Login

                        </Button>

                    </form>

                    <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-500">

                        Portfolio CMS

                        <span className="mx-2">

                            •

                        </span>

                        Built with React & Django

                    </div>

                </Card>

            </motion.div>

        </section>

    );

}