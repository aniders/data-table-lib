import { DataTableColumnType } from './data-table-column-type.enum';
import { FormatterPipeDefinition } from '../model/formatter-pipe-definition.model';
export declare class DataTableDefinition {
    type: string;
    columns: DataTableColumnDefinition[];
    pageSize: number;
    pageSizeOptions: number[];
}
export declare class DataTableColumnDefinition {
    header: string;
    propertyName: string;
    type: DataTableColumnType;
    formatter: FormatterPipeDefinition;
    constructor(header: string, propertyName: string, type: DataTableColumnType, formatter?: FormatterPipeDefinition);
}
