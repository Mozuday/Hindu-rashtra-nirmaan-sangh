"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { states } from "@/lib/states";

export default function Form() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    father: "",
    phone: "",
    email: "",
  });

  const [stateName, setStateName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stateName) {
      alert("Please select state");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          state: stateName,
        }),
      });

      const data = await res.json();

      if (data.success) {
        // ✅ SAFE PARAM HANDLING
        const params = new URLSearchParams({
          name: form.name,
          father: form.father,
          state: stateName,
          id: data.memberId,
        });

        router.push(`/success?${params.toString()}`);
      } else {
        alert("Registration failed");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md space-y-4 border"
    >
      <h2 className="text-xl font-bold text-orange-600 text-center">
        सदस्य पंजीकरण | Member Registration
      </h2>

      <input
  name="name"
  placeholder="नाम / Name"
  required
  onChange={handleChange}
  className="w-full p-2 border rounded"
/>

<input
  name="father"
  placeholder="पिता / पति का नाम"
  required
  onChange={handleChange}
  className="w-full p-2 border rounded"
/>

<input
  name="phone"
  placeholder="मोबाइल नंबर"
  required
  onChange={handleChange}
  className="w-full p-2 border rounded"
/>

<input
  name="address"
  placeholder="पता"
  required
  onChange={handleChange}
  className="w-full p-2 border rounded"
/>

<input
  name="assembly"
  placeholder="विधान सभा (शहर या गाँव)"
  required
  onChange={handleChange}
  className="w-full p-2 border rounded"
/>

<input
  name="district"
  placeholder="जिला"
  required
  onChange={handleChange}
  className="w-full p-2 border rounded"
/>

      <select
        value={stateName}
        onChange={(e) => setStateName(e.target.value)}
        required
        className="w-full p-2 border rounded"
      >
        <option value="">राज्य चुनें</option>
        {states.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition"
      >
        {loading ? "Processing..." : "पंजीकरण करें"}
      </button>
    </form>
  );
}