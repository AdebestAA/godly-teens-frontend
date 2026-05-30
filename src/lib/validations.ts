import { z } from "zod";

export const memberSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone_number: z.string().min(1, "Phone number is required"),
  age: z.string().min(1, "Age is required"),
  location: z.string().min(1, "Location is required"),
});

export type MemberFormData = z.infer<typeof memberSchema>;

export const messageSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  interested_in: z.string().min(1, "Please select an option"),
  message: z.string().min(1, "Message is required"),
});

export type MessageFormData = z.infer<typeof messageSchema>;
