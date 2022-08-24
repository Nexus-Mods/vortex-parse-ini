import { IIniFormat } from './IIniFormat';
import IniFile from './IniFile';
declare class IniParser {
    private mFormat;
    constructor(format: IIniFormat);
    read<T extends object>(filePath: string): Promise<IniFile<T>>;
    write<T extends object>(filePath: string, file: IniFile<T>): Promise<void>;
}
export default IniParser;
