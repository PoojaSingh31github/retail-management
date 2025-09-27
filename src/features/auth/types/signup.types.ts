import { z } from 'zod';
import { basicInfoSchema } from '../schemas/BasicInfo.schema';
import { emailVerificationSchema } from '../schemas/EmailVerification.schema';
import { businessDetailsSchema } from '../schemas/BusinessDetails.schema';

export type BasicInfoData = z.infer<typeof basicInfoSchema>;
export type EmailVerificationData = z.infer<typeof emailVerificationSchema>;
export type BusinessDetailsData = z.infer<typeof businessDetailsSchema>;

export type SignupFormData = BasicInfoData & EmailVerificationData & BusinessDetailsData;

export interface SignupFlowState {
  step: number;
  formData: Partial<SignupFormData>;
  isLoading: boolean;
  emailToVerify: string;
  profileImageUrl: string | null;
}

export interface BasicInfoFormProps {
  onSubmit: (data: BasicInfoData) => void;
  isLoading?: boolean;
  initialData?: Partial<BasicInfoData>;
}

export interface StepProps {
  onNext: () => void;
  onPrev: () => void;
  isLoading: boolean;
}

export interface EmailVerificationProps {
  onNext: (data: EmailVerificationData) => void;
  onPrev: () => void;
  isLoading: boolean;
  emailToVerify: string;
  initialData?: Partial<EmailVerificationData>;
}

export interface EmailVerificationFormProps {
  onSubmit: (data: EmailVerificationData) => void;
  onPrev: () => void;
  isLoading?: boolean;
  initialData?: Partial<EmailVerificationData>;
}

export interface BusinessDetailsFormProps {
  onSubmit: (data: BusinessDetailsData) => void;
  onPrev: () => void;
  isLoading?: boolean;
  profileImageUrl: string | null;
  onImageUpload: (url: string | null, file?: File) => void;
  initialData?: Partial<BusinessDetailsData>;
}