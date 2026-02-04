
import React, { useState } from 'react';
import { ChevronLeft, Upload, File, HelpCircle, AlertTriangle, CheckCircle } from 'lucide-react';
import { ChecklistItem, Dossier, DossierStatus } from '../types';
import Button from '../components/Button';
import { askAdmissionAI } from '../services/geminiService';

interface ItemDetailProps {
  item: ChecklistItem;
  dossier: Dossier;
  onBack: () => void;
}

const ItemDetail: React.FC<ItemDetailProps> = ({ item, dossier, onBack }) => {
  const [loadingAI, setLoadingAI] = useState(false);
  const [aiAnswer, setAiAnswer] = useState<string | null>(null);

  const handleAskAI = async () => {
    setLoadingAI(true);
    const context = `Tôi đang chuẩn bị hồ sơ cho trường ${dossier.schoolName}, mục ${item.title}.`;
    const answer = await askAdmissionAI(`Làm thế nào để chuẩn bị đúng ${item.title}? Có lưu ý gì không?`, context);
    setAiAnswer(answer);
    setLoadingAI(false);
  };

  return (
    <div className="animate-in slide-in-from-bottom duration-300">
      <div className="p-6 border-b border-border sticky top-0 bg-primary/80 backdrop-blur-md z-10 flex items-center justify-between">
        <button onClick={onBack} className="p-2 -ml-2 text-textSecondary hover:text-white">
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-lg font-bold truncate px-2">{item.title}</h2>
        <div className="w-10"></div> {/* Spacer */}
      </div>

      <div className="p-6">
        <div className="bg-card border border-border rounded-custom p-6 mb-6">
          <h3 className="text-sm font-bold text-textSecondary uppercase tracking-widest mb-4">Trạng thái hiện tại</h3>
          <div className="flex items-center gap-4 mb-6">
            <div className={`p-4 rounded-2xl ${
              item.status === DossierStatus.COMPLETED ? 'bg-cta/10 text-cta' :
              item.status === DossierStatus.WARNING ? 'bg-yellow-500/10 text-yellow-500' : 'bg-error/10 text-error'
            }`}>
              {item.status === DossierStatus.COMPLETED ? <CheckCircle size={32} /> : 
               item.status === DossierStatus.WARNING ? <AlertTriangle size={32} /> : <File size={32} />}
            </div>
            <div>
              <p className="text-xl font-bold">
                {item.status === DossierStatus.COMPLETED ? 'Đã tải lên' : 
                 item.status === DossierStatus.WARNING ? 'Cần bổ sung' : 'Chưa có file'}
              </p>
              <p className="text-textSecondary text-sm">Yêu cầu: {item.required ? 'Bắt buộc' : 'Không bắt buộc'}</p>
            </div>
          </div>

          {item.notes && (
            <div className="bg-primary/50 border border-border p-4 rounded-xl mb-6">
              <p className="text-sm text-textSecondary italic">"{item.notes}"</p>
            </div>
          )}

          <div className="flex flex-col gap-3">
             <label className="w-full">
                <div className="w-full py-10 border-2 border-dashed border-border rounded-custom flex flex-col items-center justify-center gap-2 hover:border-cta cursor-pointer transition-colors bg-white/5">
                  <Upload className="text-cta" />
                  <span className="text-sm font-semibold">Tải tệp lên (.pdf, .jpg)</span>
                </div>
                <input type="file" className="hidden" />
             </label>
             <Button variant="outline" fullWidth>
                Xem tệp cũ
             </Button>
          </div>
        </div>

        {/* AI Helper Card */}
        <div className="bg-card border border-border rounded-custom p-6">
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle size={20} className="text-textSecondary" />
            <h3 className="font-bold">Bạn thắc mắc về mục này?</h3>
          </div>
          {aiAnswer ? (
            <div className="bg-primary/40 border border-border p-4 rounded-xl mb-4 text-sm whitespace-pre-line">
              {aiAnswer}
            </div>
          ) : null}
          <Button variant="ghost" fullWidth onClick={handleAskAI} disabled={loadingAI} className="border border-border">
            {loadingAI ? 'AI đang trả lời...' : 'Hỏi AI về mục này'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
