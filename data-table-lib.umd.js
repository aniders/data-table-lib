(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@angular/cdk/table'), require('@angular/common'), require('@angular/material'), require('rxjs/Observable'), require('rxjs/add/operator/startWith'), require('rxjs/add/observable/merge'), require('rxjs/add/observable/fromEvent'), require('rxjs/add/operator/map'), require('rxjs/add/operator/distinctUntilChanged'), require('rxjs/add/operator/debounceTime')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/router', '@angular/cdk/table', '@angular/common', '@angular/material', 'rxjs/Observable', 'rxjs/add/operator/startWith', 'rxjs/add/observable/merge', 'rxjs/add/observable/fromEvent', 'rxjs/add/operator/map', 'rxjs/add/operator/distinctUntilChanged', 'rxjs/add/operator/debounceTime'], factory) :
	(factory((global['data-table-lib'] = {}),global.core,global.router,global.table,global.common,global.material,global.Observable));
}(this, (function (exports,core,router,table,common,material,Observable) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DataTableComponent = (function () {
    function DataTableComponent() {
    }
    /**
     * @return {?}
     */
    DataTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.dataSource.setDataTableAttributes(this.paginator, this.sort);
    };
    /**
     * @return {?}
     */
    DataTableComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        Observable.Observable.fromEvent(this.filter.nativeElement, 'keyup')
            .debounceTime(150)
            .distinctUntilChanged()
            .subscribe(function () {
            if (!_this.dataSource) {
                return;
            }
            _this.dataSource.filter = _this.filter.nativeElement.value;
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    DataTableComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.ngOnInit();
        this.ngAfterViewInit();
    };
    /**
     * @return {?}
     */
    DataTableComponent.prototype.getSearchResultHeader = /**
     * @return {?}
     */
    function () {
        this.header = 'Your search resulted in ' + this.dataSource.filteredData.length;
        var /** @type {?} */ searchName = ' ' + this.searchResultDefinition.type;
        return ((this.dataSource.filteredData.length === 1) ? this.header += searchName : this.header += searchName + 's');
    };
    /**
     * @return {?}
     */
    DataTableComponent.prototype.isNoResult = /**
     * @return {?}
     */
    function () {
        return ((this.dataSource.renderedData.length === 0) ? true : false);
    };
    /**
     * @return {?}
     */
    DataTableComponent.prototype.getNoResultText = /**
     * @return {?}
     */
    function () {
        return 'No ' + this.searchResultDefinition.type + 's found matching filter';
    };
    /**
     * @return {?}
     */
    DataTableComponent.prototype.getDataLength = /**
     * @return {?}
     */
    function () {
        return this.dataSource.filteredData.length;
    };
    /**
     * @return {?}
     */
    DataTableComponent.prototype.getDataTablepageSize = /**
     * @return {?}
     */
    function () {
        return this.searchResultDefinition.pageSize;
    };
    /**
     * @return {?}
     */
    DataTableComponent.prototype.getDataTablepageSizeOptions = /**
     * @return {?}
     */
    function () {
        return this.searchResultDefinition.pageSizeOptions;
    };
    /**
     * @return {?}
     */
    DataTableComponent.prototype.getHeaders = /**
     * @return {?}
     */
    function () {
        return this.searchResultDefinition.columns.map(function (definition) { return definition.header; });
    };
    /**
     * @return {?}
     */
    DataTableComponent.prototype.getColumns = /**
     * @return {?}
     */
    function () {
        return this.searchResultDefinition.columns;
    };
    /**
     * @return {?}
     */
    DataTableComponent.prototype.getDisplayedColumns = /**
     * @return {?}
     */
    function () {
        return this.searchResultDefinition.columns.map(function (definition) { return definition.propertyName; });
    };
    DataTableComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'app-data-table',
                    template: " <div class=\"data-table-header\"> {{getSearchResultHeader()}} <div class=\"filter-result\"> <mat-form-field floatPlaceholder=\"never\" > <input matInput #filter placeholder=\"Filter {{this.searchResultDefinition.type}}\"> </mat-form-field> </div> </div> <div class=\"data-table-container mat-elevation-z8\"> <div class=\"data-table-no-results\" [style.display]=\"isNoResult() ? '' : 'none'\">{{getNoResultText()}} </div> <div class=\"data-table-container mat-elevation-z8\"> <mat-table #table [dataSource]=\"dataSource\" matSort> <div *ngFor=\"let column of getColumns()\"> <ng-container matColumnDef=\"{{column.propertyName}}\"> <mat-header-cell *matHeaderCellDef mat-sort-header> {{column.header}} </mat-header-cell> <mat-cell *matCellDef=\"let row\"> <app-data-table-text-cell [value]=\"row[column.propertyName]\" [type]=\"column.type\" [formatter]=\"column.formatter\"> </app-data-table-text-cell> </mat-cell> </ng-container> </div> <mat-header-row *matHeaderRowDef=\"getDisplayedColumns()\"></mat-header-row> <mat-row *matRowDef=\"let row; columns: getDisplayedColumns();\"> </mat-row> </mat-table> <mat-paginator #paginator [length]=\"getDataLength()\" [pageIndex]=\"0\" [pageSize]=\"getDataTablepageSize()\" [pageSizeOptions]=\"getDataTablepageSizeOptions()\"> </mat-paginator> </div>",
                    styles: ["  /* Structure */ .data-table-container { display: flex; flex-direction: column; min-width: 300px; } .data-table-header { font-size: 18px; min-height: 56px; max-height: 56px; display: flex; align-items: center; padding: 8px 24px 0; font-size: 20px; justify-content: space-between; border-bottom: 1px solid transparent; } .mat-form-field { font-size: 14px; flex-grow: 1; margin-top: 8px; } .data-table-no-results { display: flex; justify-content: center; padding: 24px; font-size: 12px; font-style: italic; } .mat-row:hover { background: #f5f5f5; } .mat-row:active { background: #eaeaea; } .mat-table { overflow: auto; max-height: 500px; } .filter-result{ right: 30px; } "]
                },] },
    ];
    /** @nocollapse */
    DataTableComponent.ctorParameters = function () { return []; };
    DataTableComponent.propDecorators = {
        "searchResultDefinition": [{ type: core.Input },],
        "dataSource": [{ type: core.Input },],
        "paginator": [{ type: core.ViewChild, args: [material.MatPaginator,] },],
        "sort": [{ type: core.ViewChild, args: [material.MatSort,] },],
        "filter": [{ type: core.ViewChild, args: ['filter',] },],
    };
    return DataTableComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {number} */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TextCellComponent = (function () {
    function TextCellComponent() {
    }
    /**
     * Format the input based on Column type and formatter definition.
     */
    /**
     * Format the input based on Column type and formatter definition.
     * @return {?}
     */
    TextCellComponent.prototype.getFormattedInput = /**
     * Format the input based on Column type and formatter definition.
     * @return {?}
     */
    function () {
        if (null != this.formatter && null != this.value) {
            if (this.formatter.pipe instanceof common.DatePipe) {
                return this.formatter.pipe.transform(this.value, this.formatter.format);
            }
            else if (this.formatter.pipe instanceof common.SlicePipe) {
                return this.formatter.pipe.transform(this.value, this.formatter.start, this.formatter.end);
            }
        }
        else {
            return this.value;
        }
    };
    TextCellComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'app-data-table-text-cell',
                    template: "<span> {{getFormattedInput()}} </span>",
                    styles: [""],
                },] },
    ];
    /** @nocollapse */
    TextCellComponent.ctorParameters = function () { return []; };
    TextCellComponent.propDecorators = {
        "value": [{ type: core.Input },],
        "formatter": [{ type: core.Input },],
        "type": [{ type: core.Input },],
    };
    return TextCellComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DataTableModule = (function () {
    function DataTableModule() {
    }
    DataTableModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        material.MatTableModule,
                        material.MatFormFieldModule,
                        router.RouterModule,
                        material.MatInputModule,
                        material.MatSortModule,
                        material.MatPaginatorModule,
                        table.CdkTableModule
                    ],
                    declarations: [
                        DataTableComponent,
                        TextCellComponent
                    ],
                    providers: [common.DatePipe, common.SlicePipe],
                    exports: [
                        DataTableComponent,
                    ]
                },] },
    ];
    /** @nocollapse */
    DataTableModule.ctorParameters = function () { return []; };
    return DataTableModule;
}());

exports.DataTableModule = DataTableModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
