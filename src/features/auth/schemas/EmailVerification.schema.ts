import * as z from 'zod';

export const emailVerificationSchema = z.object({
  otp: z
    .string()
    .length(6, 'Verification code must be 6 digits')
    .regex(/^\d{6}$/, 'Verification code must contain only numbers'),
});
