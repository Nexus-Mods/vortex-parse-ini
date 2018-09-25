import { IChanges } from './IChanges';
import { IIniFormat } from './IIniFormat';
import * as Promise from 'bluebird';
declare class WinapiFormat implements IIniFormat {
    constructor();
    read(filePath: string): Promise<any>;
    write(filePath: string, data: any, changes: IChanges): Promise<void>;
    private readSectionList(filePath);
    private readSection(filePath, section);
}
export default WinapiFormat;
