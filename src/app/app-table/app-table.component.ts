import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-table",
  templateUrl: "./app-table.component.html",
  styleUrls: ["./app-table.component.css"]
})
export class AppTableComponent {
  @Output("onAction") emitter = new EventEmitter();
  @Input("data") dataSource = [];
  @Input("cols") tableCols = [];

  // We will need this getter to exctract keys from tableCols
  get keys() {
    return this.tableCols.map(({ key }) => key);
  }

  // this function will return a value from column configuration
  // depending on the value that element holds
  showBooleanValue(elt, column) {
    return column.config.values[`${elt[column.key]}`];
  }
}
