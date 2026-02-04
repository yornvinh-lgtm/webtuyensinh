
import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, User, Bot, GraduationCap } from 'lucide-react';
import Input from '../components/Input';
import { askAdmissionAI } from '../services/geminiService';

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: 'Chào bạn! Tôi là chuyên gia tư vấn tuyển sinh AI. Bạn cần tôi hỗ trợ gì về hồ sơ hay quy trình xét tuyển không?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    
    setIsTyping(true);
    const answer = await askAdmissionAI(userMsg);
    setIsTyping(false);
    
    setMessages(prev => [...prev, { role: 'assistant', text: answer }]);
  };

  return (
    <div className="h-screen flex flex-col bg-primary">
      <header className="p-6 border-b border-border flex items-center gap-3 shrink-0">
        <div className="bg-cta p-2 rounded-xl">
          <Sparkles size={20} className="text-primary" />
        </div>
        <div>
          <h2 className="font-bold">Trợ lý Tuyển sinh AI</h2>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-cta animate-pulse" />
            <span className="text-[10px] uppercase font-bold text-textSecondary tracking-widest">Đang trực tuyến</span>
          </div>
        </div>
      </header>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 pb-24">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center ${msg.role === 'user' ? 'bg-ctaSecondary/20 text-ctaSecondary' : 'bg-cta/20 text-cta'}`}>
                {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>
              <div className={`p-4 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-ctaSecondary text-white rounded-tr-none' : 'bg-card border border-border rounded-tl-none'}`}>
                {msg.text}
              </div>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="flex gap-3 max-w-[85%]">
              <div className="w-8 h-8 rounded-lg bg-cta/20 text-cta flex items-center justify-center">
                <Bot size={16} />
              </div>
              <div className="p-4 bg-card border border-border rounded-2xl rounded-tl-none flex gap-1 items-center">
                <span className="w-1.5 h-1.5 bg-cta rounded-full animate-bounce [animation-delay:-0.3s]" />
                <span className="w-1.5 h-1.5 bg-cta rounded-full animate-bounce [animation-delay:-0.15s]" />
                <span className="w-1.5 h-1.5 bg-cta rounded-full animate-bounce" />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="fixed bottom-20 left-0 right-0 p-4 max-w-md mx-auto bg-primary/80 backdrop-blur-md">
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Bạn muốn hỏi gì về tuyển sinh?"
            className="flex-1 bg-card border border-border rounded-custom px-4 py-3 placeholder:text-placeholder focus:outline-none focus:border-cta transition-colors text-sm"
          />
          <button 
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            className="bg-cta text-primary p-3 rounded-custom hover:opacity-90 active:scale-95 disabled:opacity-50 disabled:grayscale transition-all"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChat;
