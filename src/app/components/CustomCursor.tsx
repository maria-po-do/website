'use client';

import React, { useEffect, useRef } from 'react';

// Цвет курсора
const CURSOR_COLOR = '#FF5A4B';
// Значение интерполяции для плавного движения (из оригинального кода)
const LERP_VALUE = 0.075;

// Простая функция линейной интерполяции
function lerp(start: number, end: number, factor: number): number {
  return start * (1 - factor) + end * factor;
}

export default function CustomCursor(): React.JSX.Element {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef<HTMLDivElement>(null);
  const defaultRef = useRef<HTMLDivElement>(null);
  const playPauseRef = useRef<HTMLDivElement>(null);
  const returnRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!cursorRef.current || !pointerRef.current) return;
    
    let cursorVisible = true;
    let cursorMode = 'default';
    
    // Установка CSS переменной для цвета курсора
    document.documentElement.style.setProperty('--cursor-color', CURSOR_COLOR);
    
    // Текущие и целевые координаты курсора
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;
    
    // Флаг для анимации
    let animationFrameId: number | null = null;
    let isRunning = false;
    
    // Отслеживание движения мыши для обновления целевых координат
    const onMouseMove = (e: MouseEvent) => {
      if (!cursorRef.current || !pointerRef.current) return;
      
      // Обновляем целевые координаты (куда должен двигаться курсор)
      targetX = e.clientX;
      targetY = e.clientY;
      
      // Запускаем анимацию, если она еще не запущена
      if (!isRunning) {
        isRunning = true;
        animationFrameId = requestAnimationFrame(updateCursorPosition);
      }
    };
    
    // Функция анимации курсора с плавным движением
    const updateCursorPosition = () => {
      // Интерполируем текущие координаты к целевым с заданным коэффициентом плавности
      currentX = lerp(currentX, targetX, LERP_VALUE);
      currentY = lerp(currentY, targetY, LERP_VALUE);
      
      // Обновляем CSS переменные для position
      if (pointerRef.current) {
        pointerRef.current.style.setProperty('--x', `${currentX}`);
        pointerRef.current.style.setProperty('--y', `${currentY}`);
      }
      
      // Продолжаем анимацию, если разница между текущими и целевыми координатами значительна
      const dx = Math.abs(targetX - currentX);
      const dy = Math.abs(targetY - currentY);
      
      if (dx > 0.1 || dy > 0.1) {
        animationFrameId = requestAnimationFrame(updateCursorPosition);
      } else {
        isRunning = false;
      }
    };
    
    // Обработка наведения на элементы с атрибутом data-cursor
    const handleCursorAttr = (e: Event) => {
      const target = e.target as HTMLElement;
      const cursorAttr = findCursorAttr(target);
      
      if (cursorAttr) {
        setCursorMode(cursorAttr);
      } else {
        setCursorMode('default');
      }
    };
    
    // Рекурсивный поиск атрибута data-cursor у элемента или его родителей
    const findCursorAttr = (element: HTMLElement | null): string | null => {
      if (!element) return null;
      if (element.hasAttribute('data-cursor')) {
        return element.getAttribute('data-cursor');
      }
      if (element.parentElement) {
        return findCursorAttr(element.parentElement);
      }
      return null;
    };
    
    // Установка режима курсора
    const setCursorMode = (mode: string) => {
      if (!defaultRef.current || !playPauseRef.current || !returnRef.current) return;
      
      // Сбрасываем все классы
      defaultRef.current.classList.remove('active');
      playPauseRef.current.classList.remove('active');
      returnRef.current.classList.remove('active');
      
      // Устанавливаем нужный класс активности
      cursorMode = mode;
      
      switch (mode) {
        case 'play':
          playPauseRef.current.classList.add('active');
          playPauseRef.current.classList.add('play');
          playPauseRef.current.classList.remove('pause');
          break;
        case 'pause':
          playPauseRef.current.classList.add('active');
          playPauseRef.current.classList.add('pause');
          playPauseRef.current.classList.remove('play');
          break;
        case 'return':
          returnRef.current.classList.add('active');
          break;
        case 'none':
          // Курсор скрыт или стандартный
          break;
        default:
          defaultRef.current.classList.add('active');
          break;
      }
    };
    
    // Обработка выхода курсора за пределы окна
    const onMouseLeave = () => {
      cursorVisible = false;
      cursorRef.current?.classList.add('hidden');
    };
    
    // Обработка возвращения курсора в окно
    const onMouseEnter = () => {
      cursorVisible = true;
      cursorRef.current?.classList.remove('hidden');
      
      // При возвращении курсора в окно сразу обновляем его позицию
      if (cursorRef.current && pointerRef.current) {
        currentX = targetX;
        currentY = targetY;
        pointerRef.current.style.setProperty('--x', `${currentX}`);
        pointerRef.current.style.setProperty('--y', `${currentY}`);
      }
    };
    
    // Метод для публичного API (добавится к window.main.cursor)
    const setCursor = (mode: string, element: HTMLElement) => {
      element.setAttribute('data-cursor', mode);
    };
    
    // Сканирование элементов с атрибутом data-cursor
    const scanCursorElements = () => {
      const elements = document.querySelectorAll('[data-cursor]');
      elements.forEach(element => {
        element.addEventListener('mouseenter', handleCursorAttr);
        element.addEventListener('mouseleave', () => setCursorMode('default'));
      });
    };
    
    // Инициализация публичного API
    if (typeof window !== 'undefined') {
      window.main = window.main || {};
      window.main.cursor = {
        set: setCursor,
        scan: scanCursorElements,
        start: () => {
          document.addEventListener('mousemove', onMouseMove);
          document.addEventListener('mousemove', handleCursorAttr as EventListener);
          document.addEventListener('mouseleave', onMouseLeave);
          document.addEventListener('mouseenter', onMouseEnter);
          scanCursorElements();
          
          // Устанавливаем начальные координаты курсора в центр экрана
          targetX = window.innerWidth / 2;
          targetY = window.innerHeight / 2;
          currentX = targetX;
          currentY = targetY;
          
          // Запускаем анимацию
          isRunning = true;
          animationFrameId = requestAnimationFrame(updateCursorPosition);
          
          // Показываем курсор
          defaultRef.current?.classList.add('active');
        },
        pause: () => {
          document.removeEventListener('mousemove', onMouseMove);
          document.removeEventListener('mousemove', handleCursorAttr as EventListener);
          document.removeEventListener('mouseleave', onMouseLeave);
          document.removeEventListener('mouseenter', onMouseEnter);
          
          // Останавливаем анимацию
          if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
            isRunning = false;
          }
        }
      };
      
      // Автоматически запускаем курсор
      window.main.cursor.start();
    }
    
    // Очистка эффекта
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousemove', handleCursorAttr as EventListener);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      
      // Останавливаем анимацию
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);
  
  return (
    <div id="cursor" aria-hidden="true" data-nosnippet="" ref={cursorRef} className="">
      <div 
        className="pointer" 
        ref={pointerRef}
        style={{
          transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, var(--x, 0), var(--y, 0), 0, 1)'
        }}
      >
        <div className="default" ref={defaultRef}></div>
        
        <div className="play-pause" ref={playPauseRef}>
          <div className="circle circle-bg">
            <svg className="ic" viewBox="0 0 14 14">
              <use className="play-ic" href="#play-arrow-ic"></use>
              <use className="pause-ic" href="#pause-ic"></use>
            </svg>
          </div>
        </div>
        
        <div className="return circle-bg" ref={returnRef}>
          <svg className="ic" viewBox="0 0 40 40">
            <use href="#return-ic"></use>
          </svg>
        </div>
      </div>
    </div>
  );
}

// Для TypeScript - определяем глобальный тип window
declare global {
  interface Window {
    main: {
      cursor: {
        set: (mode: string, element: HTMLElement) => void;
        scan: () => void;
        start: () => void;
        pause: () => void;
      };
    };
  }
} 