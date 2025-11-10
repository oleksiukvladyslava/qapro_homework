function price(data)
{ 
    let  sum = 0;
    
    for (const key in data)
    {
        sum = sum + parseInt(data[key]);
    }
    console.log("сума:", sum);

}

function minPrice(data)
{ 
    let  minP = Number.MAX_VALUE;
    
    for (const key in data)
    {
        let curPrice = parseInt(data[key]);
        if (curPrice < minP ) 
        {
            minP=curPrice;
        }   
    }
    console.log("мінімальна ціна:", minP);

}

function maxPrice(data)
{ 
    let  maxP = 0;
    
    for (const key in data)
    {
        let curPrice = parseInt(data[key]);
        if (curPrice > maxP ) 
        {
            maxP=curPrice;
        }   
    }
    console.log("максимальна ціна:", maxP);

}

var services = 
{
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
};

services['Розбити скло'] = "200 грн";

price(services); 
minPrice(services); 
maxPrice(services); 