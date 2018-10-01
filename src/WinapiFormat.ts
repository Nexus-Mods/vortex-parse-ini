import { IChanges } from './IChanges';
import { IIniFormat } from './IIniFormat';

import * as Promise from 'bluebird';
import * as winapi from 'winapi-bindings';

class WinapiFormat implements IIniFormat {
  constructor() {
  }

  public read(filePath: string): Promise<any> {
    const output = {};
    return this.readSectionList(filePath)
        .then((sections) => Promise.map(
                  sections, (section) => this.readSection(filePath, section)
                                             .then((content) => {
                                               output[section] = content;
                                             })))
        .then(() => Promise.resolve(output));
  }

  public write(filePath: string, data: any, changes: IChanges): Promise<void> {
    try {
      changes.removed.forEach((fullKey) => {
        const [section, key] = fullKey.split('###');
        winapi.WritePrivateProfileString(section, key, null, filePath);
      });
      [].concat(changes.added, changes.changed)
          .forEach((fullKey) => {
            const[section, key] = fullKey.split('###');
            winapi.WritePrivateProfileString(section, key, data[section][key], filePath);
          });
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
    }
  }

  private readSectionList(filePath: string): Promise<string[]> {
    return Promise.resolve(winapi.GetPrivateProfileSectionNames(filePath));
  }

  private readSection(filePath: string, section: string): Promise<{[key: string]: string}> {
    return Promise.resolve(winapi.GetPrivateProfileSection(section, filePath));
  }
}

export default WinapiFormat;
