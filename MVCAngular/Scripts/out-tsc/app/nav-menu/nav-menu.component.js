import { __decorate } from "tslib";
import { Component } from '@angular/core';
var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent() {
        this.isExpanded = false;
    }
    NavMenuComponent.prototype.collapse = function () {
        this.isExpanded = false;
    };
    NavMenuComponent.prototype.toggle = function () {
        this.isExpanded = !this.isExpanded;
    };
    NavMenuComponent = __decorate([
        Component({
            selector: 'app-nav-menu',
            templateUrl: './nav-menu.component.html',
            styleUrls: ['./nav-menu.component.css']
        })
    ], NavMenuComponent);
    return NavMenuComponent;
}());
export { NavMenuComponent };
//# sourceMappingURL=nav-menu.component.js.map