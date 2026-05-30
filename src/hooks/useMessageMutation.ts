import { useMutation } from "@tanstack/react-query";
import { sendMessage, type MessagePayload } from "../services/messages";

export const useMessageMutation = () => {
  return useMutation({
    mutationFn: (data: MessagePayload) => sendMessage(data),
  });
};
