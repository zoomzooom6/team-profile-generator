const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((res, rej) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if(err) {
                rej(err);
                return;
            }

            res({
                ok: true,
                message: 'File created! Check the dist file for your HTML file.'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if(err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File copied!'
            });
        });
    });
}

module.exports = {writeFile, copyFile};