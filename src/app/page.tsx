'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem('user');
      if (user) {
        setIsLoggedIn(true);
      }
    }
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">Welcome to Retailer Panel</h1>
        <p className="text-gray-600">Manage your business, orders, and settings easily</p>

        <div className="flex justify-center gap-4">
          {!isLoggedIn && (
            <>
              <button
                onClick={() => router.push('/auth/login')}
                className="px-6 py-2 cursor-pointer bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Login
              </button>
              <button
                onClick={() => router.push('/auth/signup')}
                className="px-6 py-2 cursor-pointer bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Sign Up
              </button>
            </>
          )}

          {isLoggedIn && (
            <button
              onClick={() => router.push('/dashboard')}
              className="px-6 py-2 cursor-pointer bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              Go to Dashboard
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
