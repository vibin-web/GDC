export function GradientMesh({ className = '', variant = 'dark' }) {
  const isDark = variant === 'dark';

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Blob 1 - Pink */}
      <div
        className="absolute w-[280px] h-[280px] sm:w-[480px] sm:h-[480px] lg:w-[640px] lg:h-[640px] rounded-full animate-drift blur-[60px] sm:blur-[70px] lg:blur-[90px] will-change-transform"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(255,45,143,0.12) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(255,45,143,0.06) 0%, transparent 70%)',
          top: '10%',
          left: '-10%',
        }}
      />
      {/* Blob 2 - Blue */}
      <div
        className="absolute w-[240px] h-[240px] sm:w-[400px] sm:h-[400px] lg:w-[520px] lg:h-[520px] rounded-full animate-drift-slow blur-[50px] sm:blur-[60px] lg:blur-[80px] will-change-transform"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(0,87,231,0.1) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(0,87,231,0.05) 0%, transparent 70%)',
          top: '50%',
          right: '-10%',
          animationDelay: '-5s',
        }}
      />
      {/* Blob 3 - Light Blue */}
      <div
        className="hidden sm:block absolute sm:w-[300px] sm:h-[300px] lg:w-[440px] lg:h-[440px] rounded-full animate-drift blur-[70px] lg:blur-[90px] will-change-transform"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(47,127,255,0.08) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(47,127,255,0.04) 0%, transparent 70%)',
          bottom: '10%',
          left: '30%',
          animationDelay: '-10s',
        }}
      />
    </div>
  );
}
