import { PipeTransform } from '@angular/core';
export declare class FormatterPipeDefinition {
    pipe: PipeTransform;
    format: string;
    start: number;
    end: number;
    /**
     *  Formats cell input value
     * @param pipe PipeTransform implementation
     * @param format format for DatePipe
     * @param start start for SlicePipe
     * @param end end for SlicePipe
     */
    constructor(pipe: PipeTransform, format?: string, start?: number, end?: number);
}
