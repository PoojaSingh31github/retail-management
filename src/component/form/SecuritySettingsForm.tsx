"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Shield, Eye, EyeOff } from "lucide-react";
import { z } from "zod";
import { useState } from "react";
import { securitySchema } from "@/libs/validations/validations";
import CustomButton from "../UI/CustomButton";

type SecurityFormValues = z.infer<typeof securitySchema>;

export default function SecuritySettingsForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<SecurityFormValues>({
    resolver: zodResolver(securitySchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  const [show, setShow] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const toggle = (field: keyof typeof show) =>
    setShow((prev) => ({ ...prev, [field]: !prev[field] }));

  const onSubmit = (data: SecurityFormValues) => {
    console.log("Password change:", data);
    alert("Password changed successfully!");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center space-x-2 mb-4">
        <Shield className="h-6 w-6 text-gray-700" />
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Security Settings</h3>
          <p className="text-sm text-gray-500">Manage your password</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {(["currentPassword", "newPassword", "confirmNewPassword"] as const).map((field) => (
          <div key={field}>
            <label className="block text-sm font-medium text-gray-700 capitalize">{field.replace(/([A-Z])/g, " $1")}</label>
            <div className="relative">
              <input
                type={show[field.replace("Password","") as keyof typeof show] ? "text" : "password"}
                {...register(field)}
                className="w-full border p-2 rounded pr-10"
              />
              <button
                type="button"
                onClick={() => toggle(field.replace("Password","") as keyof typeof show)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {show[field.replace("Password","") as keyof typeof show] ? <Eye />  :<EyeOff /> }
              </button>
            </div>
            {errors[field] && <p className="text-red-500 text-xs">{errors[field]?.message}</p>}
          </div>
        ))}

        <CustomButton icon="change_password">Change Password</CustomButton>
      </form>
    </div>
  );
}
