const fs = require('fs');
const path = require('path');

class VersioningSystem {
    constructor(projektname) {
        this.projektname = projektname;
        this.versions = [];
    }

    init() {
        const projectPath = path.join(__dirname, this.projektname);
        fs.mkdirSync(projectPath);
        fs.writeFileSync(path.join(projectPath, 'README.md'), '# ' + this.projektname + '\n\nDieses Verzeichnis enthält alle Versionen des Projekts.');
        console.log(`Projekt ${this.projektname} initialisiert.`);
    }

    addVersion(version) {
        this.versions.push(version);
    }

    listVersions() {
        console.log('Versionshistorie:');
        this.versions.forEach((v) => {
            console.log(v);
        });
    }
}

module.exports = VersioningSystem;