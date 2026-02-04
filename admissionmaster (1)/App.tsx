
import React, { useState, useEffect } from 'react';
import { 
  ViewState, 
  User, 
  Dossier, 
  ChecklistItem 
} from './types';
import { MOCK_DOSSIERS } from './constants';
import SplashScreen from './views/SplashScreen';
import AuthLanding from './views/Auth/AuthLanding';
import LoginPhone from './views/Auth/LoginPhone';
import LoginOTP from './views/Auth/LoginOTP';
import LoginEmail from './views/Auth/LoginEmail';
import Signup from './views/Auth/Signup';
import ForgotPassword from './views/Auth/ForgotPassword';
import Onboarding from './views/Onboarding';
import Dashboard from './views/Dashboard';
import DossierDetail from './views/DossierDetail';
import ItemDetail from './views/ItemDetail';
import Database from './views/Database';
import Timeline from './views/Timeline';
import AIChat from './views/AIChat';
import Settings from './views/Settings';
import BottomNav from './components/BottomNav';

const App: React.FC = () => {
  // Fix: Corrected typo 'ViewSate' to 'ViewState' from types.ts
  const [view, setView] = useState<ViewState>('SPLASH');
  const [user, setUser] = useState<User | null>(null);
  const [selectedDossier, setSelectedDossier] = useState<Dossier | null>(null);
  const [selectedItem, setSelectedItem] = useState<ChecklistItem | null>(null);

  useEffect(() => {
    if (view === 'SPLASH') {
      const timer = setTimeout(() => setView('AUTH_LANDING'), 2500);
      return () => clearTimeout(timer);
    }
  }, [view]);

  const handleLoginSuccess = (isNew: boolean) => {
    setUser({ id: '1', name: 'Nguyễn Văn A' });
    setView(isNew ? 'ONBOARDING' : 'DASHBOARD');
  };

  const renderView = () => {
    switch (view) {
      case 'SPLASH': return <SplashScreen />;
      case 'AUTH_LANDING': 
        return <AuthLanding 
          onPhone={() => setView('LOGIN_PHONE')} 
          onEmail={() => setView('LOGIN_EMAIL')} 
          onSignup={() => setView('SIGNUP')}
          onLoginSuccess={() => handleLoginSuccess(false)}
        />;
      case 'LOGIN_PHONE': 
        return <LoginPhone 
          onBack={() => setView('AUTH_LANDING')} 
          onSent={() => setView('LOGIN_OTP')} 
        />;
      case 'LOGIN_OTP': 
        return <LoginOTP 
          onBack={() => setView('LOGIN_PHONE')} 
          onVerify={() => handleLoginSuccess(true)} 
        />;
      case 'LOGIN_EMAIL': 
        return <LoginEmail 
          onBack={() => setView('AUTH_LANDING')} 
          onLogin={() => handleLoginSuccess(false)}
          onForgot={() => setView('FORGOT_PASSWORD')}
        />;
      case 'SIGNUP': 
        return <Signup 
          onBack={() => setView('AUTH_LANDING')} 
          onSignup={() => handleLoginSuccess(true)} 
        />;
      case 'FORGOT_PASSWORD': 
        return <ForgotPassword onBack={() => setView('LOGIN_EMAIL')} />;
      case 'ONBOARDING': 
        return <Onboarding onFinish={() => setView('DASHBOARD')} />;
      case 'DASHBOARD': 
        return <Dashboard 
          onSelectDossier={(d) => {
            setSelectedDossier(d);
            setView('DOSSIER_DETAIL');
          }} 
        />;
      case 'DOSSIER_DETAIL': 
        return <DossierDetail 
          dossier={selectedDossier!} 
          onBack={() => setView('DASHBOARD')} 
          onSelectItem={(item) => {
            setSelectedItem(item);
            setView('ITEM_DETAIL');
          }}
        />;
      case 'ITEM_DETAIL':
        return <ItemDetail 
          item={selectedItem!} 
          dossier={selectedDossier!}
          onBack={() => setView('DOSSIER_DETAIL')} 
        />;
      case 'DATABASE':
        return <Database />;
      case 'TIMELINE':
        return <Timeline onSelectDossier={(d) => {
          setSelectedDossier(d);
          setView('DOSSIER_DETAIL');
        }} />;
      case 'AI_CHAT':
        return <AIChat />;
      case 'SETTINGS':
        return <Settings onLogout={() => {
          setUser(null);
          setView('AUTH_LANDING');
        }} />;
      default: return <Dashboard onSelectDossier={() => {}} />;
    }
  };

  const showNav = ['DASHBOARD', 'DATABASE', 'TIMELINE', 'AI_CHAT', 'SETTINGS'].includes(view);

  return (
    <div className="min-h-screen bg-primary flex flex-col text-white max-w-md mx-auto shadow-2xl relative overflow-hidden">
      <main className="flex-1 overflow-y-auto pb-20">
        {renderView()}
      </main>
      {showNav && <BottomNav activeView={view} setView={setView} />}
    </div>
  );
};

export default App;
