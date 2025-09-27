import * as z from 'zod';

const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/gif'];
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export const businessDetailsSchema = z.object({
  businessName: z
    .string()
    .min(1, 'Business name is required')
    .min(2, 'Business name must be at least 2 characters')
    .max(100, 'Business name must be less than 100 characters'),
  businessAddress: z
    .string()
    .min(1, 'Business address is required')
    .min(10, 'Please provide a complete address')
    .max(500, 'Address must be less than 500 characters'),
  businessPhone: z
    .string()
    .min(1, 'Business phone is required')
    .regex(
      /^[\+]?[\d\s\-\(\)]{10,15}$/,
      'Please enter a valid phone number (10-15 digits)'
    ),
  businessCategory: z.string().min(1, 'Please select a business category'),
  profileImage: z
    .any()
    .optional()
    .refine(
      (file) => !file || file.size <= MAX_FILE_SIZE,
      'File size must be less than 5MB'
    )
    .refine(
      (file) => !file || ALLOWED_FILE_TYPES.includes(file.type),
      'Only JPG, PNG, and GIF files are allowed'
    ),
  terms: z
    .boolean()
    .refine(val => val === true, 'You must accept the terms and conditions'),
});
