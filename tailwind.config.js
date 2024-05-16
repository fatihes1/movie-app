/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        'cloud-burst': {
          '50': '#f3f6fb',
          '100': '#e4eaf5',
          '200': '#cfdaee',
          '300': '#aec2e2',
          '400': '#87a2d3',
          '500': '#6b85c6',
          '600': '#576eb9',
          '700': '#4d5da8',
          '800': '#434e8a',
          '900': '#39426f',
          '950': '#2d3250',
        },
        'east-bay': {
          '50': '#f4f6fa',
          '100': '#e6eaf3',
          '200': '#d3daea',
          '300': '#b5c2db',
          '400': '#92a3c8',
          '500': '#7788ba',
          '600': '#6572ab',
          '700': '#59629c',
          '800': '#4d5280',
          '900': '#424769',
          '950': '#2b2d40',
        },
        'kimberly': {
          '50': '#f3f7fa',
          '100': '#eaeef5',
          '200': '#d9e1ec',
          '300': '#c1cde0',
          '400': '#a7b4d2',
          '500': '#919dc3',
          '600': '#7982b2',
          '700': '#7077a1',
          '800': '#555c7e',
          '900': '#494e66',
          '950': '#2a2c3c',
        },
        'tacao': {
          '50': '#fef6ee',
          '100': '#fdead7',
          '200': '#fad2ae',
          '300': '#f6b17a',
          '400': '#f18746',
          '500': '#ee6721',
          '600': '#df4f17',
          '700': '#b93a15',
          '800': '#932f19',
          '900': '#772a17',
          '950': '#40120a',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}