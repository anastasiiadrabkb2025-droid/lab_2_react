import { useState, useEffect } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('light');

  // 1. Автоматична перевірка часу при першому завантаженні
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 7 && hour < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  // 2. Перемикання класу 'dark' на тегу <html>
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 p-4 md:p-12 transition-colors duration-300">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex justify-end">
          <button
            onClick={toggleTheme}
            className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm hover:shadow transition-all text-sm font-medium text-slate-800 dark:text-slate-100"
          >
            {theme === 'light' ? '🌙 Нічний режим' : '☀️ Денний режим'}
          </button>
        </div>

        <Header />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Experience />
          <Education />
        </div>
        <Reviews />
        <Footer />
        <ContactForm />
      </div>
    </div>
  );
}

export default App;