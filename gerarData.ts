var chance = require('chance')
export class birthdayGen {
    public static birthday (): number{
        
        let dataIni = chance.date({year:1910});
        let dataFim = chance.date({year:2006})

    }
}