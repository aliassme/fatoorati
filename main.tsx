import React from 'react';
import ReactDOM from 'react-dom/client';
import { SettingsProvider, useSettings } from '../../contexts/SettingsContext';

const DemoContent: React.FC = () => {
  const { language, formatCurrency } = useSettings();
  const isAr = language === 'ar';

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-[--text-primary] mb-2">
        {isAr ? 'صفحة العرض التوضيحي (Standalone)' : 'Demo Page (Standalone)'}
      </h1>

      <div className="demo-banner">
        <span style={{ display: 'inline-flex', width: 24, height: 24, alignItems: 'center', justifyContent: 'center' }}>ℹ️</span>
        <div>
          <span className="font-bold">{isAr ? 'وضع العرض التوضيحي' : 'Demo Mode'}</span>:
          {isAr
            ? ' يتم تخزين كافة البيانات محليًا ضمن المتصفح.'
            : ' All data is stored locally within your browser.'}
        </div>
      </div>

      <div className="demo-grid" style={{ marginTop: '2rem' }}>
        {[1000, 2500.5, 780].map((amount, idx) => (
          <div key={idx} className="demo-card">
            <h3>{isAr ? 'قيمة تجريبية' : 'Sample Value'}</h3>
            <p style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--text-primary)' }}>
              {formatCurrency(amount)}
            </p>
            <p>{isAr ? 'هذا مجرد مثال للتنسيق.' : 'This is just an example of formatting.'}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '2rem' }}>
        <img src="./img.svg" alt={isAr ? 'توضيح' : 'Illustration'} width={200} height={120} />
      </div>

      <div style={{ marginTop: '2rem' }}>
        <div className="bg-[--bg-secondary] rounded-lg shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className={`demo-table ${isAr ? 'text-right' : 'text-left'}`}>
              <thead>
                <tr>
                  <th>{isAr ? 'العنصر' : 'Item'}</th>
                  <th>{isAr ? 'الوصف' : 'Description'}</th>
                  <th>{isAr ? 'المبلغ' : 'Amount'}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { item: isAr ? 'عنصر 1' : 'Item 1', desc: isAr ? 'مثال توضيحي' : 'Illustrative example', amount: 150 },
                  { item: isAr ? 'عنصر 2' : 'Item 2', desc: isAr ? 'مثال آخر' : 'Another sample', amount: 320.75 },
                  { item: isAr ? 'عنصر 3' : 'Item 3', desc: isAr ? 'اختبار تنسيق' : 'Formatting test', amount: 80 },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-[--border-primary] last:border-b-0 hover:bg-[--bg-tertiary]/50">
                    <td className="p-4 text-[--text-secondary]">{row.item}</td>
                    <td className="p-4 text-[--text-primary]">{row.desc}</td>
                    <td className="p-4 font-bold text-[--text-primary]">{formatCurrency(row.amount)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const Root: React.FC = () => {
  return (
    <SettingsProvider>
      <DemoContent />
    </SettingsProvider>
  );
};

const el = document.getElementById('demo-root');
if (!el) throw new Error('Missing #demo-root');

ReactDOM.createRoot(el).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);