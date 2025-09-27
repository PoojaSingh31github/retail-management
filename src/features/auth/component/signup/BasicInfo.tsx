import { BasicInfoData } from '@/features/auth/types/signup.types';
import { BasicInfoForm } from '@/component/form/SignupBasicInfoForm';

interface BasicInfoProps {
  onNext: (data: BasicInfoData) => void;
  isLoading: boolean;
  initialData?: Partial<BasicInfoData>;
}

export function BasicInfo({ onNext, isLoading, initialData }: BasicInfoProps) {
  return (
    <>
      <h2 className="mb-2 text-center text-lg font-semibold text-gray-700">
        Create Account
      </h2>
      <p className="mb-6 text-center text-sm text-gray-500">
        Enter your basic information
      </p>

      <BasicInfoForm 
        onSubmit={onNext} 
        isLoading={isLoading} 
        initialData={initialData} 
      />
    </>
  );
}
