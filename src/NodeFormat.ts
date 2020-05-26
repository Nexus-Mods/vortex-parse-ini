import * as fs from 'fs';
import * as ini from 'ini';

import { IChanges } from './IChanges';
import { IIniFormat } from './IIniFormat';

import * as Promise from 'bluebird';

class NodeFormat implements IIniFormat {

  constructor() {
  }

  public read(filePath: string): Promise<any> {
    const output = {};

    return this.readSections(filePath);
  }

  public write(filePath: string, data: any, changes: IChanges): Promise<void> {
    try {
      changes.removed.forEach((fullKey) => {
        const [section, key] = fullKey.split('###');
        // winapi.WritePrivateProfileString(section, key, null, filePath);
      });
      [].concat(changes.added, changes.changed)
        .forEach((fullKey) => {
          const [section, key] = fullKey.split('###');
          // winapi.WritePrivateProfileString(section, key, data[section][key], filePath);
        });
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
    }
  }

  private readSections(filePath: string): Promise<string[]> {
    return Promise.resolve(ini.parse(fs.readFileSync(filePath, 'utf-8')));
  }
}

export default NodeFormat;
