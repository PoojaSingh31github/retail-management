'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { loginSchema } from '../../features/auth/schemas/login.schema';
import { LoginFormProps, LoginFormValues } from '@/features/auth/types/login.types';

export function LoginForm({ onSubmit, isLoading = false }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema)
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
            placeholder="Enter your password"
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

      <div className="flex items-center">
        <input
          id="remember"
          type="checkbox"
          {...register('remember')}
          className="h-4 w-4 rounded border-gray-300  text-indigo-600 focus:ring-indigo-500"
        />
        <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
          Remember me
        </label>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full rounded-md cursor-pointer bg-black px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-gray-800 disabled:opacity-50"
      >
        {isLoading ? 'Signing in...' : 'Sign In'}
      </button>
    </form>
  );
}
