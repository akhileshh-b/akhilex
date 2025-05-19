
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				cyber: {
					black: '#0A0A0A',
					green: '#00FF41',
					'dark-gray': '#1C2526',
					'light-gray': '#FFFFFF',
				}
			},
			fontFamily: {
				mono: ['VT323', 'Courier New', 'monospace'],
				'roboto-mono': ['Roboto Mono', 'monospace'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'digital-rain': {
					'0%': { transform: 'translateY(-100px)', opacity: '0.3' },
					'3%': { opacity: '1' },
					'95%': { opacity: '0.8' },
					'100%': { transform: 'translateY(1200px)', opacity: '0.3' }
				},
				'digital-rain-slow': {
					'0%': { transform: 'translateY(-100px)', opacity: '0.3' },
					'3%': { opacity: '1' },
					'95%': { opacity: '0.8' },
					'100%': { transform: 'translateY(1000px)', opacity: '0.3' }
				},
				'digital-rain-fast': {
					'0%': { transform: 'translateY(-100px)', opacity: '0.3' },
					'3%': { opacity: '1' },
					'95%': { opacity: '0.8' },
					'100%': { transform: 'translateY(1400px)', opacity: '0.3' }
				},
				glitch: {
					'0%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-3px, 3px)' },
					'40%': { transform: 'translate(-3px, -3px)' },
					'60%': { transform: 'translate(3px, 3px)' },
					'80%': { transform: 'translate(3px, -3px)' },
					'100%': { transform: 'translate(0)' }
				},
				'text-flicker': {
					'0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': { opacity: '1' },
					'20%, 24%, 55%': { opacity: '0.2' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 10px rgba(0, 255, 65, 0.8)' },
					'50%': { boxShadow: '0 0 20px rgba(0, 255, 65, 1)' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in-left': {
					'0%': { opacity: '0', transform: 'translateX(-50px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'slide-in-bottom': {
					'0%': { opacity: '0', transform: 'translateY(50px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				typing: {
					'0%': { width: '0%' },
					'100%': { width: '100%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'digital-rain': 'digital-rain 20s linear infinite',  // much longer duration for smoother effect
				'digital-rain-slow': 'digital-rain-slow 30s linear infinite', // even longer for slow rain
				'digital-rain-fast': 'digital-rain-fast 15s linear infinite', // faster but still smooth
				'glitch': 'glitch 0.5s ease-in-out',
				'text-flicker': 'text-flicker 1.5s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 1.5s infinite',
				'fade-in': 'fade-in 0.8s ease-out',
				'slide-in-left': 'slide-in-left 1s ease-out',
				'slide-in-bottom': 'slide-in-bottom 1s ease-out',
				'typing': 'typing 2s steps(20, end) forwards'
			},
			boxShadow: {
				'neon': '0 0 10px rgba(0, 255, 65, 0.8), 0 0 20px rgba(0, 255, 65, 0.4)',
				'neon-strong': '0 0 15px rgba(0, 255, 65, 1), 0 0 30px rgba(0, 255, 65, 0.7)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
