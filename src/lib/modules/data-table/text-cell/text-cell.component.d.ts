import { FormatterPipeDefinition } from '../model/formatter-pipe-definition.model';
import { DataTableColumnType } from '../model/data-table-column-type.enum';
export declare class TextCellComponent {
    value: string;
    formatter: FormatterPipeDefinition;
    type: DataTableColumnType;
    /**
     * Format the input based on Column type and formatter definition.
     */
    getFormattedInput(): string;
}
