import React, { useState } from "react";
import { Users } from "lucide-react";

const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (name === "admin" && password === "gtim2026") {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Invalid credentials");
    }
  };

  if (!isAuthenticated) {
    return (
      <section className="bg-white py-[110px] overflow-hidden min-h-screen flex items-center justify-center" id="admin">
        <div className="max-w-md w-full px-4">
          <div className="bg-paper border border-line rounded-[20px] p-8 shadow-lg">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-700 grid place-items-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <circle cx="12" cy="16" r="1" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
              </div>
              <h2 className="font-montserrat font-bold text-[24px] text-ink mb-2">Admin Access</h2>
              <p className="text-ink-60 text-[14px]">Enter your credentials to continue</p>
            </div>

            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-line rounded-[10px] bg-white text-ink placeholder-ink-40 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-line rounded-[10px] bg-white text-ink placeholder-ink-40 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Password"
                  required
                />
              </div>
              {error && (
                <p className="text-green-700 text-[13px] mb-4 text-center font-medium">{error}</p>
              )}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-[15px] font-semibold rounded-[10px] transition-all duration-220 border border-transparent bg-green-700 text-white hover:bg-green-800 cursor-pointer"
              >
                Access Dashboard
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 py-[110px] overflow-hidden min-h-screen" id="admin">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-7">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-montserrat font-extrabold text-[32px] text-ink mb-2">Admin Dashboard</h1>
          <p className="text-ink-60">Welcome back, Admin.</p>
        </div>

        {/* Admin nav tabs */}
        <div className="flex gap-4 mb-8 border-b border-line pb-0">
          <span className="text-[14px] font-medium pb-3 border-b-2 border-green-600 text-ink">Dashboard</span>
          <a
            href="/admin/members"
            className="text-[14px] font-medium pb-3 border-b-2 border-transparent text-ink-60 hover:text-ink transition-colors"
          >
            Members
          </a>
        </div>

        {/* Quick link to members */}
        <a
          href="/admin/members"
          className="inline-flex items-center gap-3 bg-white border border-line rounded-[16px] p-6 hover:border-green-300 hover:bg-green-50/50 transition-colors shadow-sm"
        >
          <div className="w-12 h-12 rounded-xl bg-green-100 text-green-700 grid place-items-center">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <div className="font-montserrat font-bold text-[18px] text-ink">View Members</div>
            <div className="text-ink-60 text-[14px]">Manage registered members</div>
          </div>
        </a>

        {/* Logout */}
        <div className="mt-8">
          <button
            onClick={() => setIsAuthenticated(false)}
            className="inline-flex items-center gap-2 px-6 py-3 text-[14px] font-semibold rounded-[10px] transition-all duration-220 border border-gray-200 bg-white text-ink-60 hover:bg-gray-50 hover:text-ink cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Admin;
