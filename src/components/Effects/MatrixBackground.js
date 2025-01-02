import React, { useRef, useEffect } from 'react';

const MatrixBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    let letters = Array(256).join('1').split('');
    const fontSize = 16;

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = '#0F0';
      ctx.font = fontSize + 'px monospace';
      
      letters.forEach((y_pos, index) => {
        // สุ่มตัวอักษรจากหลายภาษา (ไทย, ญี่ปุ่น, จีน, อังกฤษ)
        const charSets = [
          // ภาษาไทย
          String.fromCharCode(0x0E00 + Math.random() * 96),
          // คาตาคานะ
          String.fromCharCode(0x30A0 + Math.random() * 96),
          // ตัวอักษรจีน
          String.fromCharCode(0x4E00 + Math.random() * 8000),
          // ตัวอักษรละติ��
          String.fromCharCode(33 + Math.random() * 94)
        ];
        
        const text = charSets[Math.floor(Math.random() * charSets.length)];
        const x_pos = index * fontSize;
        
        // เพิ่มเอฟเฟกต์เรืองแสง
        ctx.shadowBlur = 5;
        ctx.shadowColor = '#0F0';
        ctx.fillText(text, x_pos, y_pos);
        ctx.shadowBlur = 0;

        if (y_pos > h && Math.random() > 0.975) {
          letters[index] = 0;
        } else {
          letters[index] = y_pos + fontSize;
        }
      });
    };

    const interval = setInterval(draw, 33);

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      letters = Array(Math.ceil(w / fontSize)).join('1').split('');
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // เรียกครั้งแรกเพื่อตั้งค่าเริ่มต้น

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        backgroundColor: '#000'
      }}
    />
  );
};

export default MatrixBackground; 