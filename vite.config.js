import { defineConfig } from "vite";
import three from 'three';

export default defineConfig({
    plugins: [three()],
    base: '/'
})