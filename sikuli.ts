import * as java from 'java';
import * as path from 'path';

java.classpath.push(path.resolve(__dirname, 'sikulixapi.jar'));

const classes = [
  'App',
  'App$AppEntry',
  'Button',
  'Env',
  'Finder',
  'Image',
  'ImagePath',
  'ImagePath$PathEntry',
  'Key',
  'Location',
  'Match',
  'Mouse',
  'ObserveEvent',
  'ObserverCallBack',
  'Pattern',
  'Region',
  'Screen',
  'ScreenImage',
  'App$Type',
  'ObserveEvent$Type',
  'FindFailed',
];

export const sikuli: any = {};
for (const c of classes) {
    sikuli[c] = java.import(`org.sikuli.script.${c}`);
}
sikuli.Settings = java.import('org.sikuli.basics.Settings');
