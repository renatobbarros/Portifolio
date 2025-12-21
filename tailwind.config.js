/**
 * Tailwind CSS Configuration
 * Custom theme configuration for the portfolio
 */

tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#2b6cee",
                "primary-glow": "#4facfe",
                "accent-gold": "#e5c07b",
                "accent-purple": "#a855f7",
                "accent-pink": "#ec4899",
                "background-light": "#f6f6f8",
                "background-dark": "#0B0F15",
                "surface": "#131b26",
                "surface-highlight": "#1c2635",
            },
            fontFamily: {
                "display": ["Inter", "sans-serif"],
                "mono": ["JetBrains Mono", "monospace"],
            },
            backgroundImage: {
                'grid-pattern': "linear-gradient(to right, #1c2635 1px, transparent 1px), linear-gradient(to bottom, #1c2635 1px, transparent 1px)",
            },
            boxShadow: {
                'neon-blue': '0 0 10px rgba(43, 108, 238, 0.5), 0 0 20px rgba(43, 108, 238, 0.3)',
                'neon-purple': '0 0 10px rgba(168, 85, 247, 0.5), 0 0 20px rgba(168, 85, 247, 0.3)',
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }
        },
    },
}
