import { ElementRef, AfterViewInit, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
import { TableDataSource } from './collection/table-data-source';
import { DataTableDefinition, DataTableColumnDefinition } from './model/data-table-definition.model';
export declare class DataTableComponent implements OnInit, AfterViewInit, OnChanges {
    searchResultDefinition: DataTableDefinition;
    dataSource: TableDataSource;
    paginator: MatPaginator;
    sort: MatSort;
    filter: ElementRef;
    header: string;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    getSearchResultHeader(): string;
    isNoResult(): boolean;
    getNoResultText(): string;
    getDataLength(): number;
    getDataTablepageSize(): number;
    getDataTablepageSizeOptions(): number[];
    getHeaders(): string[];
    getColumns(): DataTableColumnDefinition[];
    getDisplayedColumns(): string[];
}
