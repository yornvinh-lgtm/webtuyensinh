
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import Button from '../components/Button';

interface OnboardingProps {
  onFinish: () => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onFinish }) => {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const questions = [
    {
      id: 1,
      title: "Bạn đang học lớp mấy?",
      options: ["Lớp 12", "Lớp 11", "Lớp 10", "Thí sinh tự do"]
    },
    {
      id: 2,
      title: "Mục tiêu tuyển sinh của bạn?",
      options: ["Xanh chọn", "Kỹ thuật", "Kinh tế", "Nghệ thuật", "Khác"]
    },
    {
      id: 3,
      title: "Khu vực ưu tiên?",
      options: ["KV1", "KV2-NT", "KV2", "KV3"]
    }
  ];

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
    else onFinish();
  };

  const currentQ = questions[step - 1];

  return (
    <div className="p-6 h-screen flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden mr-4">
          <div 
            className="h-full bg-cta transition-all duration-500" 
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>
        <span className="text-xs text-textSecondary font-bold">{step}/{totalSteps}</span>
      </div>

      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-8">{currentQ.title}</h2>
        <div className="space-y-4">
          {currentQ.options.map((opt) => (
            <button 
              key={opt}
              onClick={handleNext}
              className="w-full p-5 bg-card border border-border rounded-custom text-left hover:border-cta hover:bg-cta/5 transition-all group flex items-center justify-between"
            >
              <span className="font-medium">{opt}</span>
              <ChevronRight className="text-placeholder group-hover:text-cta" size={20} />
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <button onClick={onFinish} className="text-textSecondary text-sm font-medium hover:text-white">Bỏ qua</button>
      </div>
    </div>
  );
};

export default Onboarding;
