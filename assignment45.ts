function storecarInfo (manufacturer:string,modelName:string,...extraOption:{[key :string]:any}[] ): 
    object {
        const carInfo ={
        manufacturer,
        modelName,
        ...Object.assign({}, ...extraOption)
        }
        return carInfo;
    };

let answare = storecarInfo('honda','civic',{color:'black'},{features:['navigation','power window']})

console.log(answare);






