"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_service_1 = require("./product.service");
var ProductListComponent = (function () {
    function ProductListComponent(_productService) {
        this._productService = _productService;
        this.pageTitle = "Product List";
        this.imageWidth = 50;
        this.showImage = false;
    }
    ProductListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._productService.getProducts()
            .subscribe(function (products) { return _this.products = products; }, function (error) { return _this.errorMessage = error; });
    };
    ProductListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = "Product List::" + message;
    };
    ProductListComponent = __decorate([
        core_1.Component({
            selector: 'pm-products',
            templateUrl: 'app/products/product-list.component.html',
            //styles: ['h3 {color:red;\}']
            styleUrls: ['app/products/product-list.component.css']
        })
    ], ProductListComponent);
    return ProductListComponent;
}());
<<<<<<< HEAD
=======
ProductListComponent = __decorate([
    core_1.Component({
        selector: 'pm-products',
        templateUrl: 'app/products/product-list.component.html',
        //styles: ['h3 {color:red;\}']
        styleUrls: ['app/products/product-list.component.css']
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductListComponent);
>>>>>>> 06f995cf1c1347ee76f6130637d456a0983d0e18
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map