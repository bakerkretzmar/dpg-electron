const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
    purge: [],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Fira Code', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                teal: colors.teal,
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms')],
};
