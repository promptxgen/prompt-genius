/**
 * Agent Avatar Component — Cosmic Glowing Orb Style
 * Displays agent avatar as a glowing animated orb with agent color
 */

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface AgentAvatarProps {
  avatar: string; // Image URL or emoji
  color: string; // Theme color (hex)
  name: string; // Agent display name
  size?: 'sm' | 'md' | 'lg';
}

// Check if string is a URL
function isUrl(str: string): boolean {
  return str.startsWith('http') || str.startsWith('/') || str.startsWith('data:');
}

export default function AgentAvatar({ avatar, color, name, size = 'md' }: AgentAvatarProps) {
  const sizeClasses = {
    sm: 'size-6',
    md: 'size-8',
    lg: 'size-10',
  };

  return (
    <div className="flex items-center gap-2 mb-2">
      <div
        className="rounded-full"
        style={{
          animation: 'cosmic-breathe 3s ease-in-out infinite',
          ['--glow-color' as string]: `${color}66`,
        }}
      >
        <Avatar
          className={`${sizeClasses[size]} ring-2`}
          style={{ borderColor: color, ringColor: color }}
        >
          {isUrl(avatar) ? (
            <>
              <AvatarImage src={avatar} alt={name} />
              <AvatarFallback
                style={{
                  background: `linear-gradient(135deg, ${color}30, ${color}10)`,
                  color,
                }}
              >
                {name.charAt(0)}
              </AvatarFallback>
            </>
          ) : (
            <AvatarFallback
              style={{
                background: `linear-gradient(135deg, ${color}30, ${color}10)`,
                color,
              }}
            >
              {avatar || name.charAt(0)}
            </AvatarFallback>
          )}
        </Avatar>
      </div>
      <span className="text-sm font-semibold" style={{ color }}>
        {name}
      </span>
    </div>
  );
}
