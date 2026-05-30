import { useMutation } from "@tanstack/react-query";
import { createMember, type MemberPayload } from "../services/members";

export const useMemberMutation = () => {
  return useMutation({
    mutationFn: (data: MemberPayload) => createMember(data),
  });
};
