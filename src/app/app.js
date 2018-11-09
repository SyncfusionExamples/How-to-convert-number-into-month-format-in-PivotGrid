define(["require", "exports", "@syncfusion/ej2-pivotview"], function (require, exports, ej2_pivotview_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var pivotGridObj = new ej2_pivotview_1.PivotView({
        dataSource: {
            enableSorting: true,
            columns: [{ name: 'Year' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            data: getPivotData(),
            rows: [{ name: 'Month' }],
            formatSettings: [{ name: 'Month', format: 'MMM', type: 'date' }],
            expandAll: false,
            filters: []
        },
        load: function () {
            for (var i = 0; i < pivotGridObj.dataSource.data.length; i++) {
                var date = new Date();
                date.setMonth(pivotGridObj.dataSource.data[i]["Month"]);
                pivotGridObj.dataSource.data[i]["Month"] = date;
            }
        },
        width: '100%',
        height: 300,
        gridSettings: { columnWidth: 140 }
    });
    pivotGridObj.appendTo('#PivotView1');
    function getPivotData() {
        var pivotData = [
            { 'Month': 1, 'Sold': 31, 'Amount': 52824, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q1' },
            { 'Month': 2, 'Sold': 51, 'Amount': 86904, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q2' },
            { 'Month': 3, 'Sold': 90, 'Amount': 153360, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q3' },
            { 'Month': 4, 'Sold': 25, 'Amount': 42600, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q4' },
            { 'Month': 5, 'Sold': 27, 'Amount': 46008, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2016', 'Quarter': 'Q1' },
            { 'Month': 6, 'Sold': 49, 'Amount': 83496, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2016', 'Quarter': 'Q2' },
            { 'Month': 7, 'Sold': 95, 'Amount': 161880, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2016', 'Quarter': 'Q3' },
            { 'Month': 8, 'Sold': 67, 'Amount': 114168, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2016', 'Quarter': 'Q4' },
            { 'Month': 9, 'Sold': 75, 'Amount': 127800, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2017', 'Quarter': 'Q1' }
        ];
        return pivotData;
    }
});
