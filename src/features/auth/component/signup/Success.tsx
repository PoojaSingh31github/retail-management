import { CheckCircleIcon, ArrowRightIcon } from 'lucide-react';

interface SuccessProps {
  onGoToDashboard: () => void;
}

export function Success({ onGoToDashboard }: SuccessProps) {
  return (
    <>
      <h2 className="mb-2 text-center text-lg font-semibold text-gray-700">
        Welcome to Retailer Panel!
      </h2>
      <div className="flex flex-col items-center">
        <CheckCircleIcon className="h-16 w-16 text-green-500" />
        <p className="mt-4 text-center text-lg font-semibold text-gray-700">
          Account Created Successfully!
        </p>
        <p className="mt-2 text-center text-sm text-gray-500">
          Welcome to the Retailer Panel. Your account has been set up and
          you're ready to start managing your business.
        </p>
        <button
          onClick={onGoToDashboard}
          className="mt-6 flex items-center cursor-pointer justify-center rounded-md bg-black px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-gray-800"
        >
          Go to Dashboard
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </button>
      </div>
    </>
  );
}
