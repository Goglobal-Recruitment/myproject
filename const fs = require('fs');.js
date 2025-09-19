const fs = require('fs');
const path = require('path');

// Folder to process
const projectDir = __dirname;

// Replace mapping: key = old string, value = new string
const replacements = {
    'https://www.booking.com/login': '/login.html',
    'https://www.booking.com/register': '/register.html',
    'https://www.booking.com/payment': '/payment.html',
    'booking.com': 'goglobal-recruitment.github.io/myproject' // fallback
};

// Process all files recursively
function processFolder(folder) {
    const files = fs.readdirSync(folder);
    files.forEach(file => {
        const fullPath = path.join(folder, file);
        const stats = fs.statSync(fullPath);

        if (stats.isDirectory()) {
            processFolder(fullPath);
        } else if (stats.isFile() && /\.(html|js|css)$/.test(file)) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let replaced = false;

            for (const [oldStr, newStr] of Object.entries(replacements)) {
                if (content.includes(oldStr)) {
                    content = content.split(oldStr).join(newStr);
                    replaced = true;
                }
            }

            if (replaced) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated: ${fullPath}`);
            }
        }
    });
}

processFolder(projectDir);
console.log('✅ All Booking.com links replaced!');
