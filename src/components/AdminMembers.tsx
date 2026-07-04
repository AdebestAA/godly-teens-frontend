import React, { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, ChevronDown, Loader2 } from "lucide-react";
import { useMembers } from "../hooks/useMembers";
import type { Member } from "../services/members";

const PAGE_SIZE = 30;

const COLUMNS = [
  { key: "first_name" as const, label: "First Name" },
  { key: "last_name" as const, label: "Last Name" },
  { key: "email" as const, label: "Email" },
  { key: "phone_number" as const, label: "Phone" },
  { key: "age" as const, label: "Age" },
  { key: "location" as const, label: "Location" },
  { key: "created_at" as const, label: "Joined", isDate: true },
];

const AdminMembers: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data: allMembers = [], isLoading, isError, error } = useMembers();

  const total = allMembers.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const members = useMemo(
    () => allMembers.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE),
    [allMembers, page],
  );

  const startItem = total === 0 ? 0 : (page - 1) * PAGE_SIZE + 1;
  const endItem = Math.min(page * PAGE_SIZE, total);

  return (
    <section className="bg-gray-50 py-[110px] overflow-hidden min-h-screen" id="admin-members">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-7">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-montserrat font-extrabold text-[32px] text-ink mb-2">Members</h1>
          <p className="text-ink-60">
            {total} total member{total !== 1 ? "s" : ""} registered
          </p>
        </div>

        {/* Admin nav tabs */}
        <div className="flex gap-4 mb-8 border-b border-line pb-0">
          <a
            href="/admin"
            className="text-[14px] font-medium pb-3 border-b-2 border-transparent text-ink-60 hover:text-ink transition-colors"
          >
            Dashboard
          </a>
          <span className="text-[14px] font-medium pb-3 border-b-2 border-green-600 text-ink">Members</span>
        </div>

        {/* Error state */}
        {isError && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
            <p className="text-green-800 font-medium">
              Failed to load members: {(error as Error)?.message ?? "Unknown error"}
            </p>
          </div>
        )}

        {/* Loading state */}
        {isLoading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-green-600" />
          </div>
        )}

        {/* Table */}
        {!isLoading && !isError && (
          <>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-[14px]">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50/80">
                      {COLUMNS.map((col) => (
                        <th
                          key={col.key}
                          className="px-5 py-3.5 font-semibold text-ink-80 text-[13px] tracking-wide uppercase whitespace-nowrap"
                        >
                          <span className="inline-flex items-center gap-1">
                            {col.label}
                            <ChevronDown className="w-3 h-3 text-ink-40" />
                          </span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {members.map((member: Member) => (
                      <tr
                        key={member.id}
                        className="hover:bg-green-50/40 transition-colors"
                      >
                        {COLUMNS.map((col) => {
                          const value = member[col.key];
                          if (col.isDate) {
                            return (
                              <td key={col.key} className="px-5 py-3.5 text-ink-60 whitespace-nowrap text-[13px]">
                                {new Date(value as string).toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "short",
                                  day: "numeric",
                                })}
                              </td>
                            );
                          }
                          return (
                            <td key={col.key} className="px-5 py-3.5 text-ink whitespace-nowrap text-[13px]">
                              {String(value)}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                    {members.length === 0 && (
                      <tr>
                        <td colSpan={COLUMNS.length} className="px-5 py-16 text-center text-ink-40 text-[14px]">
                          No members found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-5">
              <p className="text-ink-50 text-[13px]">
                {total > 0
                  ? `Showing ${startItem}–${endItem} of ${total} members`
                  : "No members"}
              </p>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page <= 1}
                  className="inline-flex items-center gap-1 px-3 py-2 text-[13px] font-medium rounded-lg border border-gray-200 bg-white text-ink-70 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </button>
                <span className="px-3 py-2 text-[13px] font-medium text-ink-60 bg-gray-100 rounded-lg">
                  {page}
                </span>
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page >= totalPages}
                  className="inline-flex items-center gap-1 px-3 py-2 text-[13px] font-medium rounded-lg border border-gray-200 bg-white text-ink-70 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default AdminMembers;
