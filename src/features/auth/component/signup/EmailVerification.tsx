import { EmailVerificationForm } from '@/component/form/SignupEmailVerificationForm';
import { EmailVerificationProps } from '../../types/signup.types';

export function EmailVerification({
  onNext,
  onPrev,
  isLoading,
  emailToVerify,
  initialData
}: EmailVerificationProps) {
  return (
    <>
      <h2 className="mb-2 text-center text-lg font-semibold text-gray-700">
        Verify Your Email
      </h2>
      <p className="mb-6 text-center text-sm text-gray-500">
        We've sent a verification code to{' '}
        <span className="font-semibold text-blue-600">{emailToVerify}</span>
      </p>

      <EmailVerificationForm
        onSubmit={onNext}
        onPrev={onPrev}
        isLoading={isLoading}
        initialData={initialData}
      />
    </>
  );
}
