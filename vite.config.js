import { defineConfig } from "vite";
import gsap from "gsap";

export default defineConfig({
    plugins: [gsap()],
    base: '/'
})