import { sikuli } from './sikuli';
import { spawnPromise } from 'spawn-rx';

async function main() {
    const screen = new sikuli.Screen();
    const filename = screen.captureSync().saveSync('.');
    if (process.env.APPVEYOR) {
        await spawnPromise('powershell.exe', [ 'Push-AppveyorArtifact', filename ]);
    } else {
        console.log(`powershell.exe Push-AppveyorArtifact ${filename}`);
    }
}

main();