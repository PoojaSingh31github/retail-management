'use client';

import { useSignupFlow } from '../../../features/auth/hooks/useSignupFlow';
import { ProgressBar } from '../../../features/auth/component/signup/ProgressBar';
import { Success } from '../../../features/auth/component/signup/Success';
import { BasicInfoForm } from '@/component/form/SignupBasicInfoForm';
import { EmailVerificationForm } from '@/component/form/SignupEmailVerificationForm';
import { BusinessDetailsForm } from '@/component/form/SignupBusinessDetailsForm';

export default function SignupPage() {
  const { 
    flowState, 
    nextStep, 
    prevStep, 
    setProfileImage, 
    submitForm, 
    updateFormData 
  } = useSignupFlow();

  const handleBasicInfoNext = (data: any) => {
    updateFormData(data); // localStorage me save
    nextStep();           // next step
  };

  const handleEmailVerificationNext = (data: any) => {
    updateFormData(data);
    nextStep();
  };

  const handleBusinessDetailsNext = (data: any) => {
    updateFormData(data);
    submitForm(); // final submit
  };

  const renderStep = () => {
    switch (flowState.step) {
      case 1:
        return (
          <BasicInfoForm
            onSubmit={handleBasicInfoNext}
            isLoading={flowState.isLoading}
            initialData={flowState.formData}
          />
        );
      case 2:
        return (
          <EmailVerificationForm
            onSubmit={handleEmailVerificationNext}
            onPrev={prevStep}
            isLoading={flowState.isLoading}
            initialData={flowState.formData}
          />
        );
      case 3:
        return (
          <BusinessDetailsForm
            onSubmit={handleBusinessDetailsNext}
            onPrev={prevStep}
            isLoading={flowState.isLoading}
            profileImageUrl={flowState.profileImageUrl}
            onImageUpload={setProfileImage}
            initialData={flowState.formData}
          />
        );
      case 4:
        return (
          <Success
            onGoToDashboard={() => window.location.href = '/dashboard'}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4 font-sans">
      <div className="w-full max-w-sm rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-2 text-center text-xl font-bold text-gray-800 md:text-2xl">
          Retailer Panel
        </h1>
        <p className="mb-8 text-center text-sm text-gray-500">
          Create your retailer account
        </p>
        
        <div className="rounded-md border border-gray-200 p-6">
          {flowState.step < 4 && (
            <ProgressBar currentStep={flowState.step} totalSteps={4} />
          )}
          {renderStep()}
        </div>

        {flowState.step === 1 && (
          <p className="mt-6 text-center text-sm">
            Already have an account?{' '}
            <a href="/auth/login" className="font-semibold text-blue-600 hover:underline">
              Sign in
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
