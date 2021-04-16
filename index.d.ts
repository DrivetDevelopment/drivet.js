declare class DrivetClient {
    constructor();
    fun: {
        eightball():Promise<JSON>;
        fml():Promise<JSON>;
        reverse(object: {text: string}):Promise<JSON>;
        vaporwave(object: {text: string}):Promise<JSON>;
    }
    filters: {
        greyscale(object: {url: string, raw: number}):Promise<JSON>;
        invert(object: {url: string, raw: number}):Promise<JSON>;
        pixelate(object: {url: string, raw: number}):Promise<JSON>;
        sepia(object: {url: string, raw: number}):Promise<JSON>;
    }
    facts: {
        catFact():Promise<JSON>;
        dogFact():Promise<JSON>;
    }
    images: {
        cat():Promise<JSON>;
        dog():Promise<JSON>;
    }
    misc: {
        chat(object: {message: string, uid: string}):Promise<JSON>;
    }
}

export = DrivetClient;