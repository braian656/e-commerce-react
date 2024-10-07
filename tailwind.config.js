// @type {import('tailwindcss').Config}

// export default {
//   content: [
//     "./index.html",
//     './src/**/*.{html,js,jsx,ts,tsx}',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// // tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       colors: {
//         anchor:'#343a40',
//         title: '#17281b', // Azul personalizado
//         text: '#b0b0b0', // Naranja personalizado
//         button: '#ffb42e',
//         body:'#dfdfdf',
//         button2: '#e09c0f',
//       },
//       spacing: {
//         '128': '32rem', // Añadir un nuevo espaciado
//       },
//       fontFamily: {
//         custom: ['"Roboto"', 'sans-serif'], // Fuente personalizada
//       },
//     },
//   },
//   plugins: [],
// }

// @type {import('tailwindcss').Config}

export default {
  content: [
    "./index.html",
    './src/**/*.{html,js,jsx,ts,tsx}', // Ajusta estas rutas si es necesario
  ],
  theme: {
    extend: {
      backgroundImage : {
        'hero-sigIn' : "url(https://img.freepik.com/vector-gratis/fondo-geometrico-plano_23-2148957201.jpg?t=st=1727841051~exp=1727844651~hmac=2c092f6aa116d9845046194779c986b5f42751b4a2ce7741bc06fed6d50f6fa0&w=740)"
      },
      colors: {
        modal: '#31363d',
        text2: 'hsl(228deg 2.24% 43.73%)',
        anchor: '#e0e1e5',
        title: '#17281b',  // Verde personalizado
        text: '#b0b0b0',   // Gris claro personalizado
        button: '#2b2c30', // Naranja personalizado
        body: '#dfdfdf',   // Gris claro personalizado
        button2: '#e4bc2c', // amarillo oscuro personalizado
        buttonBrillant : 'linear-gradient(135deg, #000000,%20#ffcc00)'
      },
      spacing: {
        '128': '32rem',    // Añadir nuevo espaciado
      },
      fontFamily: {
        custom: ['"Roboto"', 'sans-serif'], // Fuente personalizada
      },
    },
  },
  plugins: [],
}
