declare class DrivetClient {
    constructor();
    fun: {
        eightball():Promise<JSON>;
        fml():Promise<JSON>;
        reverse(object: {text: string}):Promise<JSON>;
        vaporwave(object: {text: string}):Promise<JSON>;
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
        isitup(object: {url: string}):Promise<JSON>;
    }
}

export = DrivetClient;