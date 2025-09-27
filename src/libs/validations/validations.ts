import { z } from "zod";

export const businessSchema = z.object({
  name: z.string().min(2, "Business name must be at least 2 characters"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  phone: z.string().regex(/^[0-9]{10}$/, "Phone must be 10 digits"),
  category: z.string().nonempty("Category is required"),
});

export const profileSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  emailAddress: z.string().email("Invalid email address"),
});

export const securitySchema = z.object({
  currentPassword: z.string().min(6, "Current password must be at least 6 characters"),
  newPassword: z.string().min(6, "New password must be at least 6 characters"),
  confirmNewPassword: z.string().min(6, "Confirm password must be at least 6 characters"),
}).refine((data) => data.newPassword === data.confirmNewPassword, {
  path: ["confirmNewPassword"],
  message: "Passwords do not match",
});

