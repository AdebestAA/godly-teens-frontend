import api from "./api";

export interface MessagePayload {
  first_name: string;
  last_name: string;
  email: string;
  interested_in: string;
  message: string;
}

export const sendMessage = async (data: MessagePayload) => {
  const response = await api.post("/messages", data);
  return response.data;
};
