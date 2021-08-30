module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.jsx', 'index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        container: {
            center: true,
        },
        extend: {
            fontSize: {
                base: '18px',
            },
            fontFamily: {
                dosis: 'Dosis',
            },
            colors: {
                white: '#f8f8ff',
                black: '#2f2f2f',
            },
        },
    },
    variants: {},
    plugins: [],
}
