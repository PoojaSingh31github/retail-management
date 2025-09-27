'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { emailVerificationSchema } from '@/features/auth/schemas/EmailVerification.schema';
import { EmailVerificationData, EmailVerificationFormProps } from '@/features/auth/types/signup.types';

export function EmailVerificationForm({
    onSubmit,
    onPrev,
    isLoading = false,
    initialData
}: EmailVerificationFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<EmailVerificationData>({
        resolver: zodResolver(emailVerificationSchema),
        defaultValues: initialData || {}
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <label htmlFor="otp" className="mb-1 block text-sm font-medium text-gray-700">
                    Verification Code
                </label>
                <input
                    id="otp"
                    type="text"
                    {...register('otp')}
                    placeholder="Enter 6-digit code"
                    maxLength={6}
                    className="w-full rounded-md border border-gray-300 p-2 text-black focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-center text-lg tracking-widest"
                />
                {errors.otp && (
                    <p className="mt-1 text-xs text-red-500">{errors.otp.message}</p>
                )}
            </div>

            <button
                type="button"
                className="text-sm font-medium text-blue-600 hover:underline cursor-pointer"
            >
                Resend Code
            </button>

            <div className="rounded-md border border-yellow-300 bg-yellow-50 p-3 text-sm text-yellow-800">
                <span className="font-semibold">Demo OTP:</span> 123456
            </div>

            <div className="flex space-x-2">
                <button
                    type="button"
                    onClick={onPrev}
                    disabled={isLoading}
                    className="flex w-1/2 items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition-colors duration-200 hover:bg-gray-100 disabled:opacity-50"
                >
                    Back
                </button>
                <button
                    type="submit"
                    disabled={isLoading}
                    className="flex w-1/2 items-center cursor-pointer justify-center rounded-md bg-black px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-gray-800 disabled:opacity-50"
                >
                    {isLoading ? 'Verifying...' : 'Verify'}
                </button>
            </div>
        </form>
    );
}
