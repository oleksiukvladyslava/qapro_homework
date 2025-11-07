function checkProbabilityTheory(count)
{ 
    max=1000;
    min=100;
    even=0;
    noteven=0;
    for (let i = 0; i < count; i++)
    {
        res= Math.floor(Math.random() * (max - min + 1)) + min;
        console.log (res);
        if (res % 2 === 0) 
        {
            even=even+1;
        }   
        else 
        {
            noteven=noteven+1;
        }
    }
    const evenperc = (even / count) * 100;
    const notevenperc = (noteven / count) * 100;
    console.log("кількість згенерованих чисел", count);
    console.log("кількість парних чисел", even);
    console.log("кількість непарних чисел", noteven);
    console.log("відсоток парних чисел", evenperc);
    console.log("відсоток непарних чисел", notevenperc);

    if (evenperc === notevenperc)
    {
        console.log("співвідношення 50%50");
    }
    else
    {
        console.log("співвідношення не 50%50");
    }
}

checkProbabilityTheory(6); 
