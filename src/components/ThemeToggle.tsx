import React, { useState, useRef, useEffect } from 'react';
import { Sun, Moon, Laptop, ChevronDown } from 'lucide-react';
import { useTheme, ThemeMode } from '../context/ThemeContext';

export const ThemeToggle: React.FC<{ minimal?: boolean }> = ({ minimal = false }) => {
  const { mode, resolvedTheme, setMode, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Quick toggle mode if minimal
  if (minimal) {
    return (
      <button
        onClick={toggleTheme}
        aria-label={resolvedTheme === 'dark' ? 'Mudar para modo claro' : 'Mudar para modo escuro'}
        title={resolvedTheme === 'dark' ? 'Modo Claro' : 'Modo Escuro'}
        className="p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-gold)] transition-colors focus:outline-none flex items-center justify-center rounded"
      >
        {resolvedTheme === 'dark' ? (
          <Sun className="w-4 h-4 text-[var(--color-gold)]" />
        ) : (
          <Moon className="w-4 h-4 text-[var(--color-text-main)]" />
        )}
      </button>
    );
  }

  const options: { value: ThemeMode; label: string; icon: React.ReactNode }[] = [
    { value: 'light', label: 'Claro', icon: <Sun className="w-3.5 h-3.5" /> },
    { value: 'system', label: 'Sistema', icon: <Laptop className="w-3.5 h-3.5" /> },
    { value: 'dark', label: 'Escuro', icon: <Moon className="w-3.5 h-3.5" /> },
  ];

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Selecionar tema visual"
        title="Alternar entre tema Claro, Escuro e Sistema"
        className="flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] uppercase tracking-wider font-mono border border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-main)] hover:border-[var(--color-gold)] transition-colors rounded-sm focus:outline-none"
      >
        {resolvedTheme === 'dark' ? (
          <Moon className="w-3.5 h-3.5 text-[var(--color-gold)]" />
        ) : (
          <Sun className="w-3.5 h-3.5 text-[var(--color-gold)]" />
        )}
        <span className="hidden sm:inline text-[10px] font-sans font-medium uppercase tracking-wider">
          {mode === 'system' ? 'Sistema' : mode === 'dark' ? 'Escuro' : 'Claro'}
        </span>
        <ChevronDown className="w-3 h-3 opacity-60" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-44 bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] shadow-xl z-50 py-1 rounded-sm backdrop-blur-md animate-in fade-in zoom-in-95 duration-100">
          <div className="px-3 py-1.5 text-[9px] uppercase tracking-widest text-[var(--color-gold)] font-semibold border-b border-[var(--color-border-subtle)]">
            Aparência
          </div>

          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                setMode(opt.value);
                setIsOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3 py-2 text-left text-xs transition-colors ${
                mode === opt.value
                  ? 'bg-[var(--color-surface)] text-[var(--color-gold)] font-medium'
                  : 'text-[var(--color-text-main)] hover:bg-[var(--color-surface)]'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className={mode === opt.value ? 'text-[var(--color-gold)]' : 'text-[var(--color-text-secondary)]'}>
                  {opt.icon}
                </span>
                <span>{opt.label}</span>
              </div>
              {mode === opt.value && <span className="text-[10px] text-[var(--color-gold)] font-bold">●</span>}
            </button>
          ))}

          <div className="px-3 py-1 text-[9px] text-[var(--color-text-secondary)] border-t border-[var(--color-border-subtle)] mt-1">
            Detectado: {resolvedTheme === 'dark' ? 'Modo Escuro' : 'Modo Claro'}
          </div>
        </div>
      )}
    </div>
  );
};
