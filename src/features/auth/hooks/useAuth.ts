import { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import { LoginFormValues } from '../types/login.types';
import { SignupFormData } from '../types/signup.types';

export function useAuth() {
  const router = useRouter(); 
  const [isLoading, setIsLoading] = useState(false);

  const login = async (data: LoginFormValues) => {
    setIsLoading(true);
    try {
      console.log('Login attempt:', data);

      let valid = false;

      // 1️⃣ Check demo credentials
      if (data.email === 'retailer@example.com' && data.password === 'RetailerPass123') {
        valid = true;
        localStorage.setItem('user', JSON.stringify({
          email: data.email,
          name: 'Demo Retailer',
          isLoggedIn: true
        }));
      } else if (typeof window !== 'undefined') {
        // 2️⃣ Check localStorage signup data
        const signupDataRaw = localStorage.getItem('signupFlowData');
        if (signupDataRaw) {
          const signupData = JSON.parse(signupDataRaw);
          if (signupData?.formData?.email === data.email && signupData?.formData?.password === data.password) {
            valid = true;
            localStorage.setItem('user', JSON.stringify({
              email: signupData.formData.email,
              name: signupData.formData.fullName,
              isLoggedIn: true
            }));
          }
        }
      }

      if (valid) {
        if (data.remember) {
          localStorage.setItem('rememberLogin', 'true');
        }
        router.push('/dashboard');
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please signup or check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (data: SignupFormData) => {
    setIsLoading(true);
    try {
      console.log('Signup data:', data);
      router.push('/auth/login?message=signup-success');
    } catch (error) {
      console.error('Signup error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user');
      localStorage.removeItem('rememberLogin');
    }
    router.push('/auth/login');
  };

  return {
    login,
    signup,
    logout,
    isLoading,
  };
}
