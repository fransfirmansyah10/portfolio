/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html','revamp-transaction-detail-padiumkm.html','about.html','landing-page-deaxpadi.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        dark: '#0f172a',
      },
      screens: {
      '2xl' : '1320px',
      },

      keyframes:{
        'trans-down1':{
          '0% , 100%':{ transform:'translateY(10px)'},
          '50%':{transform:'translateY(0)'}
        },
        'trans-down2':{
          '0% , 100%':{ transform:'translateY(0px)'},
          '50%':{transform:'translateY(20px)'}
        },
        'trans-down3':{
          '0% , 100%':{ transform:'translateY(30px)'},
          '50%':{transform:'translateY(0px)'}
        },

        'trans-down4':{
          '0% , 100%':{ transform:'translateY(20px)'},
          '30%':{transform:'translateY(0px)'}
        }

      },
      animation:{
        'trans-down1':'trans-down1 2s ease-in-out infinite',
        'trans-down2':'trans-down2 4s ease-in-out infinite',
        'trans-down3':'trans-down3 10s ease-in-out infinite',
        'trans-down4':'trans-down4 10s ease-in-out infinite'
      }

    },
  },
  plugins: [],
}

