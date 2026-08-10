export function GradientMesh({ className = '', variant = 'dark' }) {
  const isDark = variant === 'dark';

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Blob 1 - Pink */}
      <div
        className="absolute w-[280px] h-[280px] sm:w-[600px] sm:h-[600px] lg:w-[900px] lg:h-[900px] rounded-full animate-drift blur-[60px] sm:blur-[120px] will-change-transform"
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
        className="absolute w-[240px] h-[240px] sm:w-[500px] sm:h-[500px] lg:w-[700px] lg:h-[700px] rounded-full animate-drift-slow blur-[50px] sm:blur-[120px] will-change-transform"
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
        className="hidden sm:block absolute w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] rounded-full animate-drift blur-[100px] will-change-transform"
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
