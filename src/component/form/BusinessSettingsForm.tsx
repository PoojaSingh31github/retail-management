"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Briefcase } from "lucide-react";
import { z } from "zod";
import { useEffect } from "react";
import { businessSchema } from "@/libs/validations/validations";
import CustomButton from "../UI/CustomButton";
import { getFromLocalStorage, saveToLocalStorage } from "@/libs/utils/storage";

type BusinessFormValues = z.infer<typeof businessSchema>;

const categories = [
  "Fashion & Apparel",
  "Electronics",
  "Food & Beverage",
  "Services",
  "healthcare",
];

export default function BusinessSettingsForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BusinessFormValues>({
    resolver: zodResolver(businessSchema),
    defaultValues: {
      name: "",
      address: "",
      phone: "",
      category: categories[0],
    },
  });

  // 🔹 Load from localStorage on mount
  useEffect(() => {
    let store = getFromLocalStorage("signupFlowData");
    const storedData = store?.formData;

    if (storedData) {
      reset({
        name: storedData.businessName || "",
        address: storedData.businessAddress || "",
        phone: storedData.businessPhone || "",
        category: storedData.businessCategory || categories[0],
      });
    }
  }, [reset]);

  const onSubmit = (data: BusinessFormValues) => {
    let  storedData = getFromLocalStorage("signupFlowData");
    const updatedData = {
      ...storedData,
      formData: {
        businessName: data.name,
        businessAddress: data.address,
        businessPhone: data.phone,
        businessCategory: data.category,

      }
    };
    saveToLocalStorage("signupFlowData", updatedData);
    alert("Business info updated successfully!");
    reset(data);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center space-x-2 mb-4">
        <Briefcase className="h-6 w-6 text-gray-700" />
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Business Information
          </h3>
          <p className="text-sm text-gray-500">Manage your business details</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Business Name
          </label>
          <input {...register("name")} className="w-full border p-2 rounded" />
          {errors.name && (
            <p className="text-red-500 text-xs">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Business Address
          </label>
          <textarea
            {...register("address")}
            className="w-full border p-2 rounded"
          />
          {errors.address && (
            <p className="text-red-500 text-xs">{errors.address.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              {...register("phone")}
              className="w-full border p-2 rounded"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs">{errors.phone.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              {...register("category")}
              className="w-full border p-2 rounded"
            >
              {categories.map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
            {errors.category && (
              <p className="text-red-500 text-xs">{errors.category.message}</p>
            )}
          </div>
        </div>

        <CustomButton icon="save">Save Changes</CustomButton>
      </form>
    </div>
  );
}
