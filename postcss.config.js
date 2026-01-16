import tailwindcss from "tailwindcss";

const plugins = [tailwindcss];

try {
  const autoprefixer = (await import("autoprefixer")).default;
  plugins.push(autoprefixer);
} catch (error) {
  console.warn("Skipping autoprefixer: module not found.");
}

export default {
  plugins,
};
