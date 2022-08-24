import { IChanges } from './IChanges';
export interface IIniFormat {
    read(filePath: string): Promise<any>;
    write(filePath: string, data: any, changes: IChanges): Promise<void>;
}
