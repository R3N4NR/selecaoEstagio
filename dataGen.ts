
var chance = require('chance')
export class comprador {

    private _name : string;
    private _birthday : string;
    private _lastPurchaseDate : string;
    private _countPurchase : number;

    constructor (name: string){
        this._name = chance.name(),
        this._birthday = chance.birthday(),
        this._lastPurchaseDate = chance.date(),
        this._countPurchase = chance.integer()
    }

}

