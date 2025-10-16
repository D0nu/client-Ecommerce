import { useState, ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupFormData, AuthResponse } from "../types/auth";

export default function SignUp() {
  const [formData, setFormData] = useState<SignupFormData>({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);

      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data: AuthResponse = await res.json();

      if (!data.success) {
        setLoading(false);
        setError(data.message);
        return;
      }

      setLoading(false);
      setError(null);
      navigate("/sign-in");
    } catch (error: any) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="mt-[4rem] p-3 max-w-lg mx-auto">
      <h1 className="mt-[7rem] text-[53px] font-bold justify-center text-black flex items-center mb-5">Sign Up</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          className="border p-3 rounded-lg"
          id="name"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-yellow-600 text-black p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80 font-semibold"
        >
          {loading ? "loading.." : "Sign Up"}
        </button>
      </form>

      <div className="flex gap-2 mt-5">
        <p className="text-black">Have an account?</p>
        <Link to="/sign-in">
          <span className="text-orange-700">Sign in</span>
        </Link>
      </div>

      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
}
