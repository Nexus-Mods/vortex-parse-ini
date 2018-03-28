import { IChanges } from './IChanges';
declare class IniFile<T extends object> {
    private mStoredData;
    private mMutableData;
    constructor(data: T);
    data: T;
    changes(): IChanges;
    apply(): void;
}
export default IniFile;
