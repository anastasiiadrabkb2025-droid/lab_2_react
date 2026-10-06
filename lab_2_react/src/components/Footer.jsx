import { useEffect, useState } from 'react';

function Footer() {
  const [sysInfo, setSysInfo] = useState({ userAgent: '', platform: '' });

  useEffect(() => {
    const info = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
    };
    localStorage.setItem('react_system_info', JSON.stringify(info));
    setSysInfo(info);
  }, []);

  return (
    <footer className="mt-8 text-center text-slate-500 text-sm py-4 border-t border-slate-200 dark:border-slate-700 dark:text-slate-400">
      <p>
        Контакти:{' '}
        <a
          href="mailto:anastasiia.drab.2025@lpnu.ua"
          className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
        >
          anastasiia.drab.2025@lpnu.ua
        </a>
      </p>
      {sysInfo.userAgent && (
        <p className="text-xs text-slate-400 dark:text-slate-500 mt-2">
          Система: {sysInfo.platform} | Браузер: {sysInfo.userAgent}
        </p>
      )}
    </footer>
  );
}

export default Footer;