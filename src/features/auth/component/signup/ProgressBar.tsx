interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="mb-6">
      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-black transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-2 text-center text-xs font-semibold text-gray-500">
        Step {currentStep} of {totalSteps}
      </p>
    </div>
  );
}
