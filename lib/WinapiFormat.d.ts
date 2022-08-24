import { IChanges } from './IChanges';
import { IIniFormat } from './IIniFormat';
declare class WinapiFormat implements IIniFormat {
    constructor();
    read(filePath: string): Promise<any>;
    write(filePath: string, data: any, changes: IChanges): Promise<void>;
    private readSectionList;
    private readSection;
}
export default WinapiFormat;
