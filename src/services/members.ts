import api from "./api";

export interface MemberPayload {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  age: string;
  location: string;
}

export const createMember = async (data: MemberPayload) => {
  const response = await api.post("/members", data);
  return response.data;
};
