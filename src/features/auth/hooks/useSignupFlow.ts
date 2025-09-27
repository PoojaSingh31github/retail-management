import { useState } from 'react';
import { SignupFlowState, SignupFormData } from '@/features/auth/types/signup.types';
import { getFromLocalStorage, saveToLocalStorage } from '@/libs/utils/storage';

const LOCAL_STORAGE_KEY = 'signupFlowData';

export function useSignupFlow() {
  const [flowState, setFlowState] = useState<SignupFlowState>(() => {
    return (
      getFromLocalStorage(LOCAL_STORAGE_KEY) || {
        step: 1,
        isLoading: false,
        formData: {},
        emailToVerify: '',
        profileImageUrl: null
      }
    );
  });

  const updateFormData = (data: Partial<SignupFormData>) => {
    setFlowState((prev: SignupFlowState) => {
      const newState = { ...prev, formData: { ...prev.formData, ...data } };
      saveToLocalStorage(LOCAL_STORAGE_KEY, newState);
      return newState;
    });
  };

  const nextStep = () => {
    setFlowState((prev: SignupFlowState) => {
      const newState = { ...prev, step: prev.step + 1 };
      saveToLocalStorage(LOCAL_STORAGE_KEY, newState);
      return newState;
    });
  };

  const prevStep = () => {
    setFlowState((prev: SignupFlowState) => {
      const newState = { ...prev, step: prev.step - 1 };
      saveToLocalStorage(LOCAL_STORAGE_KEY, newState);
      return newState;
    });
  };

  const setProfileImage = (url: string | null, file?: File) => {
    setFlowState((prev: SignupFlowState) => {
      const newState = { ...prev, profileImageUrl: url };
      saveToLocalStorage(LOCAL_STORAGE_KEY, newState);
      return newState;
    });
  };

  const submitForm = async () => {
    setFlowState((prev: SignupFlowState) => ({ ...prev, isLoading: true }));
    // simulate API call
    await new Promise(res => setTimeout(res, 1000));
    setFlowState((prev: SignupFlowState) => {
      const newState = { ...prev, step: 4, isLoading: false };
      saveToLocalStorage(LOCAL_STORAGE_KEY, newState);
      return newState;
    });
  };

  return { flowState, nextStep, prevStep, setProfileImage, submitForm, updateFormData };
}
