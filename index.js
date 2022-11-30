const counters = document.querySelectorAll('.counter'); 
counters.forEach((counter) =>{
    counter.innerHTML = '0'

    const updateCounter = () => {
        const targetCount = +counter.getAttribute('data-target');
        // console.log(targetCount);
        const startingNum = Number(counter.innerHTML);

        const incr = targetCount / 100 ;
        if( startingNum < targetCount ){
            counter.innerHTML = `${Math.round(startingNum + incr)}`;
            setTimeout( updateCounter , 10);
        }else{
            counter.innerHTML = targetCount;
        }
    }
    updateCounter();

}) 
