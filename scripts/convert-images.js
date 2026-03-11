const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Certifique-se de executar npm install sharp no diretorio temporario se necessario
// mas vamos tentar usar o projeto local se tiver sharp, ou instalar apenas no contexto
try {
    require.resolve('sharp');
} catch (e) {
    console.log("Instalando sharp...");
    execSync('npm install sharp --no-save', { stdio: 'inherit' });
}

const sharp = require('sharp');

const inputDir = path.join(__dirname, '../Novas imagens do projeto');
const outputDir = path.join(__dirname, '../public/images/galeria');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir);

async function processImages() {
    for (const file of files) {
        if (file.match(/\.(jpg|jpeg|png)$/i)) {
            const baseName = path.basename(file, path.extname(file));
            // Remover acentos
            const normalizedStr = baseName.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            const seoName = normalizedStr
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '') + '.webp';

            try {
                await sharp(path.join(inputDir, file))
                    .webp({ quality: 80 })
                    .toFile(path.join(outputDir, seoName));
                console.log(`Converted ${file} to ${seoName}`);
            } catch (err) {
                console.error(`Error converting ${file}:`, err);
            }
        }
    }
}

processImages().then(() => console.log('All images processed.'));
