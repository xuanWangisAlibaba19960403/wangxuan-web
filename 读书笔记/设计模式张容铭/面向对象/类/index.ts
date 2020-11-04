class Book {
    public id: number;
    public bookname: string;
    public price: number;
    public constructor(id: number, bookname: string, price: number) {
        this.id = id;
        this.bookname = bookname;
        this.price = price;
    }

    display() {
        console.log('display');
    }
}

class ChildBook extends Book {
    public constructor(id: number, bookname: string, price: number) {
        super(id, bookname, price);
    }
}