const checkbox = document.querySelector("#price-toggle");
const monthlyPrice = document.querySelectorAll('.monthly');
const annualPrice = document.querySelectorAll('.annually');


checkbox.addEventListener("click", (e)=>{
    monthlyPrice.forEach(i => {
        i.classList.toggle('hidden');
    })
    annualPrice.forEach(i => {
        i.classList.toggle('hidden');
    })
})
