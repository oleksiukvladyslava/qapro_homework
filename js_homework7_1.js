function checkMail(arr)
{ 
    let  mail = "";
    const regex = /\b[A-Za-z0-9]+(?:\.[A-Za-z0-9]+)?@(gmail\.com|yahoo\.com)\b/g;
    var res = [];
    
    for (const value of arr)
    {
        mail = value["email"];
        if (mail.match(regex))
        {
            console.log("matched: ", value["email"]);
            res.push(mail);
        }
        else
        {
            console.log("not matched:", value["email"]); 
        }
    }
    return res;
}

var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com>"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

trusted = checkMail(arr);

for(val of trusted)
{
    console.log(val);
}