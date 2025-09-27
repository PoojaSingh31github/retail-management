'use client';
import { useAuth } from '../../../features/auth/hooks/useAuth';
import { LoginForm } from '../../../component/form/LoginForm';

export default function LoginPage() {
  const { login, isLoading } = useAuth();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4 font-sans">
      <div className="w-full max-w-sm rounded-lg p-8 shadow-md">
        <h1 className="mb-2 text-center text-xl font-bold text-gray-800 md:text-2xl">
          Retailer Panel
        </h1>
        <p className="mb-8 text-center text-sm text-gray-500">
          Sign in to your account to continue
        </p>

        <div className="rounded-md border border-gray-200 p-6">
          <h2 className="mb-2 text-center text-lg font-semibold text-gray-700">
            Welcome Back
          </h2>
          <p className="mb-6 text-center text-sm text-gray-500">
            Sign in to your retailer account
          </p>

          <LoginForm onSubmit={login} isLoading={isLoading} />

          <p className="mt-6 text-center text-sm">
            Don't have an account?{' '}
            <a href="/auth/signup" className="font-semibold text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>

        <div className="mt-4 rounded-md border border-gray-200 p-4 text-sm text-gray-500">
          <h3 className="mb-1 font-semibold">Demo Credentials:</h3>
          <p><span className="font-medium">Email:</span> retailer@example.com</p>
          <p><span className="font-medium">Password:</span> RetailerPass123</p>
        </div>
      </div>
    </div>
  );
}
