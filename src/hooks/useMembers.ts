import { useQuery } from "@tanstack/react-query";
import { getAllMembers } from "../services/members";

export const useMembers = () => {
  return useQuery({
    queryKey: ["members"],
    queryFn: getAllMembers,
  });
};
