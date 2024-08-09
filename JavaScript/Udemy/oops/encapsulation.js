/**
 * Encapsulation refers to bundling the data (properties) and the methods (functions) that operate on the data into a single unit,
 *  known as an object. This helps in restricting direct access to some of the object's components, which can protect the object's
 *  internal state from unintended modification.
 */

class car{

    #_carBrand;
    #_carModel;
    color;
    constructor(brand,model,color){
        this._carBrand=brand;
        this._carModel=model;
        this.color;
    }

     // Getter method for brand
     getBrand() {
        return this._carBrand;
    }

    // Setter method for brand
    setBrand(brand) {
        this._brand = brand;
    }

    
}


class FourWheeler extends car{
    
}
const honda = new car("honda","2210","red");
const hyndei = new car("hundei","2210");
console.log(honda._carModel);
carname=honda.getBrand();



console.log(honda._carModel);


