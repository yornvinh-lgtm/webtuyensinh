
import React, { useState } from 'react';
import { Search, MapPin, Star, GraduationCap, ChevronRight } from 'lucide-react';
import { MOCK_UNIVERSITIES } from '../constants';
import Input from '../components/Input';
import { University } from '../types';

const Database: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUni, setSelectedUni] = useState<University | null>(null);

  const filtered = MOCK_UNIVERSITIES.filter(u => 
    u.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    u.majors.some(m => m.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (selectedUni) {
    return (
      <div className="animate-in slide-in-from-bottom duration-300">
        <div className="relative h-48 bg-card border-b border-border overflow-hidden">
          <img src={selectedUni.logo} alt="" className="w-full h-full object-cover opacity-50 blur-sm scale-110" />
          <button 
            onClick={() => setSelectedUni(null)}
            className="absolute top-4 left-4 p-2 bg-primary/50 backdrop-blur-md rounded-full"
          >
            <ChevronRight className="rotate-180" size={24} />
          </button>
          <div className="absolute bottom-4 left-6 flex items-end gap-4">
             <div className="w-20 h-20 bg-primary border-4 border-card rounded-2xl overflow-hidden shadow-xl">
               <img src={selectedUni.logo} alt="" className="w-full h-full object-cover" />
             </div>
             <div className="mb-2">
               <h2 className="text-xl font-bold leading-tight">{selectedUni.name}</h2>
               <div className="flex items-center gap-1 text-cta">
                 <Star size={14} fill="currentColor" />
                 <span className="text-xs font-bold uppercase tracking-wider">Top University</span>
               </div>
             </div>
          </div>
        </div>

        <div className="p-6">
          <section className="mb-8">
            <h3 className="font-bold mb-3">Giới thiệu</h3>
            <p className="text-textSecondary text-sm leading-relaxed">{selectedUni.description}</p>
          </section>

          <section className="mb-8">
            <h3 className="font-bold mb-3">Các ngành đào tạo tiêu biểu</h3>
            <div className="flex flex-wrap gap-2">
              {selectedUni.majors.map(m => (
                <span key={m} className="bg-card border border-border px-3 py-1.5 rounded-full text-xs font-medium">{m}</span>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h3 className="font-bold mb-3">Phương thức tuyển sinh</h3>
            <div className="space-y-3">
              {selectedUni.methods.map(m => (
                <div key={m} className="bg-cta/5 border border-cta/20 p-4 rounded-xl flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-cta" />
                   <span className="text-sm font-semibold">{m}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h3 className="font-bold mb-3">Hồ sơ cần chuẩn bị</h3>
            <ul className="space-y-2">
              {selectedUni.requirements.map(r => (
                <li key={r} className="flex items-center gap-3 text-sm text-textSecondary">
                  <div className="w-1.5 h-1.5 rounded-full bg-border" />
                  {r}
                </li>
              ))}
            </ul>
          </section>

          <button className="w-full py-4 bg-cta text-primary font-bold rounded-custom shadow-lg shadow-cta/20 active:scale-95 transition-transform">
            Thêm vào mục tiêu theo dõi
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 pb-20">
      <h1 className="text-2xl font-bold mb-6">Tra cứu trường & ngành</h1>
      
      <div className="relative mb-8">
        <Input 
          placeholder="Tìm trường hoặc ngành học..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-2"
        />
        <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-placeholder pointer-events-none" size={20} />
      </div>

      <div className="space-y-4">
        {filtered.map(uni => (
          <button 
            key={uni.id}
            onClick={() => setSelectedUni(uni)}
            className="w-full bg-card border border-border rounded-custom p-4 flex gap-4 text-left group hover:border-cta/50 transition-colors"
          >
            <div className="w-16 h-16 bg-primary rounded-xl overflow-hidden shrink-0 border border-border">
              <img src={uni.logo} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0 flex flex-col justify-center">
              <h4 className="font-bold text-sm truncate group-hover:text-cta transition-colors">{uni.name}</h4>
              <div className="flex items-center gap-1 text-textSecondary text-xs mt-1">
                <MapPin size={12} />
                <span>TP. Hồ Chí Minh</span>
              </div>
              <div className="flex items-center gap-1 text-textSecondary text-xs mt-1">
                <GraduationCap size={12} />
                <span className="truncate">{uni.majors.length} ngành • {uni.methods.length} phương thức</span>
              </div>
            </div>
            <div className="flex items-center">
               <ChevronRight className="text-placeholder" size={20} />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Database;
