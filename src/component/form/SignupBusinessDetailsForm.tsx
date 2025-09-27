'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UploadCloudIcon } from 'lucide-react';
import { businessDetailsSchema } from '@/features/auth/schemas/BusinessDetails.schema';
import { BusinessDetailsData, BusinessDetailsFormProps } from '@/features/auth/types/signup.types';

export function BusinessDetailsForm({
  onSubmit,
  onPrev,
  isLoading = false,
  profileImageUrl,
  onImageUpload,
  initialData
}: BusinessDetailsFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<BusinessDetailsData>({
    resolver: zodResolver(businessDetailsSchema),
    defaultValues: initialData || {}
  });

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageUpload(reader.result as string, file);
        setValue('profileImage', file);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label
          htmlFor="businessName"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Business Name
        </label>
        <input
          id="businessName"
          type="text"
          {...register('businessName')}
          placeholder="Enter your business name"
          className="w-full rounded-md border border-gray-300 text-black p-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        />
        {errors.businessName && (
          <p className="mt-1 text-xs text-red-500">{errors.businessName.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="businessAddress"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Business Address
        </label>
        <textarea
          id="businessAddress"
          {...register('businessAddress')}
          placeholder="Enter your business address"
          rows={1}
          className="w-full resize-none rounded-md border text-black border-gray-300 p-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        />
        {errors.businessAddress && (
          <p className="mt-1 text-xs text-red-500">
            {errors.businessAddress.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="businessPhone"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Business Phone
        </label>
        <input
          id="businessPhone"
          type="tel"
          {...register('businessPhone')}
          placeholder="+91 98765 43210"
          className="w-full rounded-md border text-black border-gray-300 p-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        />
        {errors.businessPhone && (
          <p className="mt-1 text-xs text-red-500">
            {errors.businessPhone.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="businessCategory"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Business Category
        </label>
        <select
          id="businessCategory"
          {...register('businessCategory')}
          className="w-full rounded-md border border-gray-300 text-black p-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        >
          <option value="">Select business category</option>
          <option value="retail">Retail Store</option>
          <option value="wholesale">Wholesale Business</option>
          <option value="ecommerce">E-commerce</option>
          <option value="services">Services</option>
          <option value="manufacturing">Manufacturing</option>
          <option value="restaurant">Restaurant/Food</option>
          <option value="healthcare">Healthcare</option>
          <option value="education">Education</option>
          <option value="other">Other</option>
        </select>
        {errors.businessCategory && (
          <p className="mt-1 text-xs text-red-500">
            {errors.businessCategory.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Business Logo (Optional)
        </label>
        <div
          className="relative flex cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed border-gray-300 p-4 text-gray-500 transition-colors hover:border-gray-400"
          onDrop={(e) => {
            e.preventDefault();
            e.stopPropagation();
            const file = e.dataTransfer.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onloadend = () => {
                onImageUpload(reader.result as string, file);
                setValue('profileImage', file);
              };
              reader.readAsDataURL(file);
            }
          }}
          onDragOver={(e) => e.preventDefault()}
        >
          {profileImageUrl ? (
            <div className="flex flex-col items-center">
              <img
                src={profileImageUrl}
                alt="Business Logo Preview"
                className="mb-2 h-20 w-20 rounded-lg object-cover"
              />
              <p className="text-xs font-medium text-green-600">
                Image uploaded successfully
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center py-2">
              <UploadCloudIcon size={28} className="mb-2" />
              <p className="text-center text-sm font-semibold">
                Drag & drop an image, or click to select
              </p>
              <p className="mt-1 text-xs text-gray-400">PNG, JPG, GIF up to 5MB</p>
            </div>
          )}
          <input
            id="profileImage"
            type="file"
            onChange={handleImageUpload}
            className="absolute inset-0 cursor-pointer opacity-0"
            accept="image/png,image/jpeg,image/gif"
          />
        </div>
        {errors.profileImage && (
          <p className="mt-1 text-xs text-red-500">
            {errors.profileImage.message as string}
          </p>
        )}
      </div>

      <div className="flex items-start space-x-2">
        <input
          id="terms"
          type="checkbox"
          {...register('terms')}
          className="mt-1 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        />
        <label htmlFor="terms" className="text-sm leading-5 text-gray-700">
          I agree to the{' '}
          <a href="#" className="font-semibold text-blue-600 hover:underline">
            Terms and Conditions
          </a>{' '}
          and{' '}
          <a href="#" className="font-semibold text-blue-600 hover:underline">
            Privacy Policy
          </a>
        </label>
      </div>
      {errors.terms && (
        <p className="mt-1 text-xs text-red-500">{errors.terms.message as string}</p>
      )}

      <div className="flex space-x-2 pt-2">
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
          {isLoading ? 'Creating Account...' : 'Complete Setup'}
        </button>
      </div>
    </form>
  );
}
