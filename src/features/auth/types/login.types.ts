import { z } from 'zod';
import { loginSchema } from '../schemas/login.schema';

export type LoginFormValues = z.infer<typeof loginSchema>;

export interface LoginFormProps {
  onSubmit: (data: LoginFormValues) => void;
  isLoading?: boolean;
}
