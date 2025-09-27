"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "lucide-react";
import { profileSchema } from "@/libs/validations/validations";
import CustomButton from "../UI/CustomButton";
import { getFromLocalStorage, saveToLocalStorage } from "@/libs/utils/storage";

type ProfileFormValues = {
  fullName: string;
  emailAddress: string;
};

export default function ProfileSettingsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      fullName: "",
      emailAddress: "",
    },
  });

  // 🔹 Load localStorage only once on mount
  useEffect(() => {
    const storedData = getFromLocalStorage("signupFlowData");
    const profileData = storedData?.formData;

    if (profileData) {
      reset({
        fullName: profileData.fullName || "",
        emailAddress: profileData.email || "",
      });
    }
  }, [reset]); // ✅ only runs once

  const onSubmit = (data: ProfileFormValues) => {
    const storedData = getFromLocalStorage("signupFlowData");
    const updatedData = {
      ...storedData,
      formData: {
        ...storedData?.formData,
        ...data,
      },
    };
    saveToLocalStorage("signupFlowData", updatedData);
    alert("Profile info updated successfully!");
    reset(data);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center space-x-2 mb-4">
        <User className="h-6 w-6 text-gray-700" />
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Profile Information
          </h3>
          <p className="text-sm text-gray-500">Update your personal details</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            {...register("fullName")}
            className="w-full border p-2 rounded"
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            {...register("emailAddress")}
            className="w-full border p-2 rounded bg-gray-50"
          />
          {errors.emailAddress && (
            <p className="text-red-500 text-xs">
              {errors.emailAddress.message}
            </p>
          )}
        </div>

        <CustomButton icon="save">Save Changes</CustomButton>
      </form>
    </div>
  );
}
