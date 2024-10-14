/* eslint-disable @typescript-eslint/no-require-imports */
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = path.join(process.cwd(), "public", "images");
const outputDir = path.join(process.cwd(), "public", "img");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdirSync(inputDir).forEach((file) => {
  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(outputDir, file);

  sharp(inputPath)
    .resize(1200, 1200, { fit: "inside", withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(outputPath.replace(/\.[^/.]+$/, ".webp"))
    .then(() => console.log(`Otimizado: ${file}`))
    .catch((err) => console.error(`Erro ao otimizar ${file}:`, err));
});
