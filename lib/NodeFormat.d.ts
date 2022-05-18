import { IChanges } from './IChanges';
import { IIniFormat } from './IIniFormat';
import * as Promise from 'bluebird';
declare class NodeFormat implements IIniFormat {
    constructor();
    read(filePath: string): Promise<any>;
    write(filePath: string, data: any, changes: IChanges): Promise<void>;
    private readSections;
}
export default NodeFormat;
