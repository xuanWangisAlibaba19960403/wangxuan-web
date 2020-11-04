var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Book = /** @class */ (function () {
    function Book(id, bookname, price) {
        this.id = id;
        this.bookname = bookname;
        this.price = price;
    }
    Book.prototype.display = function () {
        console.log('display');
    };
    return Book;
}());
var ChildBook = /** @class */ (function (_super) {
    __extends(ChildBook, _super);
    function ChildBook(id, bookname, price) {
        return _super.call(this, id, bookname, price) || this;
    }
    return ChildBook;
}(Book));
