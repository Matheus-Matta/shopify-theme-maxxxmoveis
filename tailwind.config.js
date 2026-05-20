/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './layout/**/*.liquid',
        './templates/**/*.liquid',
        './sections/**/*.liquid',
        './snippets/**/*.liquid',
        './assets/**/*.liquid',
        './assets/**/*.js'
    ],
    theme: {
        extend: {
            colors: {
                primary: 'var(--color-accent)',
                'primary-dark': 'var(--color-accent-dark)',
                secondary: 'var(--color-secondary)',
                surface: 'var(--color-surface)',
                'surface-subtle': 'var(--color-surface-subtle)',
                'on-surface': 'var(--color-text)',
                muted: 'var(--color-muted)',
                success: 'var(--color-success)',
                warning: 'var(--color-warning)',
                danger: 'var(--color-danger)',
                'surface-container': 'var(--color-surface-card)',
                outline: 'var(--color-border)'
            },
            fontFamily: {
                headline: ['Plus Jakarta Sans', 'sans-serif'],
                body: ['Inter', 'sans-serif']
            },
            borderRadius: {
                DEFAULT: '8px',
                lg: '12px',
                xl: '16px',
                full: '9999px'
            }
        }
    },
    plugins: [],
}
