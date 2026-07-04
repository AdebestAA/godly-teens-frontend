import api from "./api";

export interface Member {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  age: string;
  location: string;
  created_at: string;
}

export interface MemberPayload {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  age: string;
  location: string;
}

export const getAllMembers = async (): Promise<Member[]> => {
  const response = await api.get("/members");
  return response.data.data;
};

export const createMember = async (data: MemberPayload) => {
  const response = await api.post("/members", data);
  return response.data;
};
