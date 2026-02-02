import { useMemo } from 'react';

const StarryBackground = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 80 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-foreground/20"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
          }}
        />
      ))}

      {/* Moving mesh gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(ellipse at 20% 30%, hsl(var(--neural-blue) / 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, hsl(var(--neural-blue) / 0.05) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, hsl(var(--neural-blue) / 0.03) 0%, transparent 60%)
          `,
          animation: 'meshMove 20s ease-in-out infinite',
        }}
      />
    </div>
  );
};

export default StarryBackground;
