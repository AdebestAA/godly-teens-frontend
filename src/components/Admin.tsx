import React, { useState } from "react";
import { Users, Calendar, DollarSign, FileText } from "lucide-react";

const adminIconMap: Record<string, React.ReactNode> = {
  users: <Users className="w-6 h-6" />,
  calendar: <Calendar className="w-6 h-6" />,
  money: <DollarSign className="w-6 h-6" />,
  file: <FileText className="w-6 h-6" />,
};

const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  // Mock authentication - in real app, this would be proper auth
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin2026") {
      setIsAuthenticated(true);
    } else {
      alert("Invalid password");
    }
  };

  if (!isAuthenticated) {
    return (
      <section
        className="bg-white py-[110px] overflow-hidden min-h-screen flex items-center justify-center"
        id="admin"
      >
        <div className="max-w-md w-full">
          <div className="bg-paper border border-line rounded-[20px] p-8 shadow-lg">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-red-100 text-red-800 grid place-items-center mx-auto mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <circle cx="12" cy="16" r="1" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
              </div>
              <h2 className="font-montserrat font-bold text-[24px] text-ink mb-2">
                Admin Access
              </h2>
              <p className="text-ink-60 text-[14px]">
                Enter admin password to continue
              </p>
            </div>

            <form onSubmit={handleLogin}>
              <div className="mb-6">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-line rounded-[10px] bg-white text-ink placeholder-ink-40 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Enter password"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-[15px] font-semibold rounded-[10px] transition-all duration-220 border border-transparent bg-red-600 text-white hover:bg-red-700 cursor-pointer"
              >
                Access Dashboard
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }

  const stats = [
    { label: "Total Users", value: "12,847", change: "+12%", icon: "users" },
    { label: "Active Events", value: "24", change: "+3", icon: "calendar" },
    { label: "Total Donations", value: "₦8.2M", change: "+18%", icon: "money" },
    { label: "Content Items", value: "456", change: "+23", icon: "file" },
  ];

  const recentActivities = [
    {
      action: "New user registration",
      user: "Sarah Johnson",
      time: "2 minutes ago",
    },
    { action: "Event created", user: "Admin", time: "15 minutes ago" },
    { action: "Donation received", user: "Anonymous", time: "1 hour ago" },
    { action: "Content updated", user: "Editor", time: "2 hours ago" },
    { action: "User reported", user: "System", time: "3 hours ago" },
  ];

  return (
    <section className="bg-gray-50 py-[110px] overflow-hidden" id="admin">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-7">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-montserrat font-extrabold text-[32px] text-ink mb-2">
            Admin Dashboard
          </h1>
          <p className="text-ink-60">
            Welcome back, Administrator. Here's what's happening with GTIM.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white border border-line rounded-[16px] p-6"
            >
              <div className="flex items-center justify-between mb-4">
                {adminIconMap[stat.icon]}
                <span className="text-green-600 text-[12px] font-semibold">
                  {stat.change}
                </span>
              </div>
              <div className="font-fraunces text-[28px] font-bold text-ink mb-1">
                {stat.value}
              </div>
              <div className="text-ink-60 text-[14px]">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-line rounded-[16px] p-6">
              <h3 className="font-montserrat font-bold text-[20px] text-ink mb-6">
                Recent Activity
              </h3>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-[12px]"
                  >
                    <div className="w-10 h-10 rounded-full bg-green-100 text-green-800 grid place-items-center flex-shrink-0">
                      <span className="text-[14px] font-bold">
                        {activity.user
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .slice(0, 2)}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="text-ink font-medium">
                        {activity.action}
                      </div>
                      <div className="text-ink-60 text-[12px]">
                        {activity.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <div className="bg-white border border-line rounded-[16px] p-6 mb-6">
              <h3 className="font-montserrat font-bold text-[20px] text-ink mb-6">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 border border-line rounded-[8px] hover:border-green-300 hover:bg-green-50 transition-colors">
                  <div className="font-medium text-ink">Create New Event</div>
                  <div className="text-ink-60 text-[12px]">
                    Add upcoming event
                  </div>
                </button>
                <button className="w-full text-left p-3 border border-line rounded-[8px] hover:border-green-300 hover:bg-green-50 transition-colors">
                  <div className="font-medium text-ink">Manage Users</div>
                  <div className="text-ink-60 text-[12px]">
                    View and edit user accounts
                  </div>
                </button>
                <button className="w-full text-left p-3 border border-line rounded-[8px] hover:border-green-300 hover:bg-green-50 transition-colors">
                  <div className="font-medium text-ink">Content Manager</div>
                  <div className="text-ink-60 text-[12px]">
                    Edit website content
                  </div>
                </button>
                <button className="w-full text-left p-3 border border-line rounded-[8px] hover:border-green-300 hover:bg-green-50 transition-colors">
                  <div className="font-medium text-ink">Reports</div>
                  <div className="text-ink-60 text-[12px]">
                    View analytics and reports
                  </div>
                </button>
              </div>
            </div>

            {/* System Status */}
            <div className="bg-white border border-line rounded-[16px] p-6">
              <h3 className="font-montserrat font-bold text-[20px] text-ink mb-6">
                System Status
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-ink">Website</span>
                  <span className="inline-flex items-center gap-2 text-green-600">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    Online
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-ink">Database</span>
                  <span className="inline-flex items-center gap-2 text-green-600">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    Healthy
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-ink">Email Service</span>
                  <span className="inline-flex items-center gap-2 text-yellow-600">
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    Maintenance
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-ink">API</span>
                  <span className="inline-flex items-center gap-2 text-green-600">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    Operational
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logout */}
        <div className="mt-8 text-center">
          <button
            onClick={() => setIsAuthenticated(false)}
            className="inline-flex items-center gap-2 px-6 py-3 text-[14px] font-semibold rounded-[10px] transition-all duration-220 border border-red-300 bg-red-50 text-red-700 hover:bg-red-100 cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Admin;
