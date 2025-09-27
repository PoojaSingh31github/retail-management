'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { EyeIcon, EyeOffIcon, ArrowRightIcon } from 'lucide-react';
import { basicInfoSchema } from '@/features/auth/schemas/BasicInfo.schema';
import { BasicInfoData, BasicInfoFormProps } from '@/features/auth/types/signup.types';

export function BasicInfoForm({ onSubmit, isLoading = false, initialData }: BasicInfoFormProps) {
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<BasicInfoData>({
        resolver: zodResolver(basicInfoSchema),
        defaultValues: initialData || {}
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <label htmlFor="fullName" className="mb-1 block text-sm font-medium text-gray-700">
                    Full Name
                </label>
                <input
                    id="fullName"
                    type="text"
                    {...register('fullName')}
                    placeholder="Enter your full name"
                    className="w-full rounded-md border text-black border-gray-300 p-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
                {errors.fullName && (
                    <p className="mt-1 text-xs text-red-500">{errors.fullName.message}</p>
                )}
            </div>
            <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    {...register('email')}
                    placeholder="Enter your email"
                    className="w-full rounded-md border text-black border-gray-300 p-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
                {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                )}
            </div>
            <div>
                <label htmlFor="password" className="mb-1 block text-sm font-medium text-gray-700">
                    Password
                </label>
                <div className="relative">
                    <input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        {...register('password')}
                        placeholder="Create a password"
                        className="w-full rounded-md border text-black border-gray-300 p-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 text-gray-400 focus:outline-none"
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                        {!showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
                    </button>
                </div>
                {errors.password && (
                    <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>
                )}
            </div>
            <div>
                <label htmlFor="confirmPassword" className="mb-1 block text-sm font-medium text-gray-700">
                    Confirm Password
                </label>
                <div className="relative">
                    <input
                        id="confirmPassword"
                        type={showPassword ? 'text' : 'password'}
                        {...register('confirmPassword')}
                        placeholder="Confirm your password"
                        className="w-full rounded-md border text-black border-gray-300 p-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 text-gray-400 focus:outline-none"
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                        {!showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
                    </button>
                </div>
                {errors.confirmPassword && (
                    <p className="mt-1 text-xs text-red-500">{errors.confirmPassword.message}</p>
                )}
            </div>
            <button
                type="submit"
                disabled={isLoading}
                className="flex cursor-pointer w-full items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-gray-800 disabled:opacity-50"
            >
                {isLoading ? 'Processing...' : 'Continue'}
                <ArrowRightIcon className="ml-2 h-4 w-4" />
            </button>
        </form>
    );
}
