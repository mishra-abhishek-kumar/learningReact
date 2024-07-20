# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

////
Every application has different way of accessing environment varialbes.
Applications created with 'create-react-app' has the method of accessing environment variable different and application crated with 'vite' is differnet.

Here application is created with vITe hence accessing the variable and creating varaibles as:
//creating variable
VITE_APPWRITE_URL="test_URL"
//accessing variable
import.meta.env.VITE_APPWRITE_URL
