import { BusinessDetailsForm } from '@/component/form/SignupBusinessDetailsForm';
import { BusinessDetailsData } from '../../types/signup.types';

interface BusinessDetailsProps {
  onNext: (data: BusinessDetailsData) => void;
  onPrev: () => void;
  isLoading: boolean;
  profileImageUrl: string | null;
  onImageUpload: (url: string | null, file?: File) => void;
  initialData?: Partial<BusinessDetailsData>;
}

export function BusinessDetails({
  onNext,
  onPrev,
  isLoading,
  profileImageUrl,
  onImageUpload,
  initialData
}: BusinessDetailsProps) {
  return (
    <>
      <h2 className="mb-2 text-center text-lg font-semibold text-gray-700">
        Business Details
      </h2>
      <p className="mb-6 text-center text-sm text-gray-500">
        Complete your business details
      </p>

      <BusinessDetailsForm
        onSubmit={onNext}
        onPrev={onPrev}
        isLoading={isLoading}
        profileImageUrl={profileImageUrl}
        onImageUpload={onImageUpload}
        initialData={initialData}
      />
    </>
  );
}
