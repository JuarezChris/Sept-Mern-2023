import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import dns from 'dns'

// dns.setDefaultResultOrder('verbatim')
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server:{
//     host:"localhost",
//     port:"5173"
//   }
// })