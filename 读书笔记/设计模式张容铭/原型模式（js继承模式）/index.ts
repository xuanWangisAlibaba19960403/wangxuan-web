abstract class LoopImages {
    public imagesArray: any;
    public container: any;
    constructor(imgArr, container) {
        this.imagesArray = imgArr;
        this.container = container;
    }

    public abstract createImage();

    public abstract changeImage();
}

class SlideLoopImg extends LoopImages {
    constructor(imgArr, container) {
        super(imgArr, container)
    }

    public createImage() {
    }

    public changeImage() {
        console.log('SlideLoopImg');
    }
}

class FadeLoopImg extends LoopImages {
    public arrow;
    constructor(imgArr, container, arrow) {
        super(imgArr, container);
        this.arrow = arrow;
    }
    
    public createImage() {
    }

    public changeImage() {
        console.log('FadeLoopImg');
    }
}
