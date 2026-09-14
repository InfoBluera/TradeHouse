/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#07080A',
          900: '#0B0C0E',
          850: '#101216',
          800: '#16181E',
          700: '#22252E',
          600: '#323642',
        },
        luxe: {
          gold: '#E5B869',
          amber: '#F59E0B',
          glow: '#FFE19C',
          bronze: '#C59B27',
          champagne: '#F3E5D0',
          ivory: '#F9F8F5',
          stone: '#A39E93',
          charcoal: '#1A1C22',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        widest: '.2em',
        ultra: '.3em',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-breathe': 'glowBreathe 6s ease-in-out infinite alternate',
        'beam-sweep': 'beamSweep 8s ease-in-out infinite alternate',
        'fade-in': 'fadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        glowBreathe: {
          '0%': { opacity: '0.3', transform: 'scale(0.98)' },
          '100%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        beamSweep: {
          '0%': { transform: 'translateX(-20%) rotate(-5deg)' },
          '100%': { transform: 'translateX(20%) rotate(5deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'conic-glow': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
