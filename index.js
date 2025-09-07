const fs = require('fs');
const path = require('path');

class VersioningSystem {
    constructor(projectName) {
        this.projectName = projectName;
        this.versions = [];
    }

    init() {
        const projectPath = path.join(__dirname, this.projectName);
        fs.mkdirSync(projectPath);
        fs.writeFileSync(path.join(projectPath, 'README.md'), '# ' + this.projectName + '\n\nDieses Verzeichnis enthält alle Versionen des Projekts.');
        console.log(`Projekt ${this.projectName} initialisiert.`);
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