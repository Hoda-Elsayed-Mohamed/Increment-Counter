const counters = document.querySelectorAll('.count')

counters.forEach(counter=>{
    counter.innerText = 0
    
    const updateCounter =()=>{
        
        const target = +counter.getAttribute('data-target')
        const increment = Math.ceil(target/200)
        let c = +counter.innerText
        
        if(c< target){
            counter.innerText = `${c + increment}`
            setTimeout(updateCounter, 10)
        }else{
            counter.innerText = target
        }
        
    }
    updateCounter()
})