const condition=false;
const speed=1000;
const descending=false;
document.addEventListener("DOMContentLoaded",()=>{
    const container=document.getElementById("container");
    let arr=[2,47,32,12,45];
    
    function createnumbers(){
        container.innerHTML=" ";
        numbers=[];
        for(let i=0;i<5;i++)
        {

            //numbercontainer
            const numbercont=document.createElement("div");
            numbercont.className="numbers";
            const value=arr[i];

            //numvalue container
            const numvalue=document.createElement("div");
            numvalue.className="num-value";

            //value assigned to numvalue and dataset attribute 
            numvalue.textContent=value;
            numvalue.dataset.value=value;
            numbercont.appendChild(numvalue); //numvalue appended to numbercontainer
            
            //index is created
            const index=document.createElement("div");
            index.innerHTML=i;
            index.classList.add("index");

            const wrapper = document.createElement('div');
            wrapper.classList.add('wrapper');
            wrapper.appendChild(numbercont);
            wrapper.appendChild(index);

            numbers.push(wrapper);
           
            container.appendChild(wrapper);
        }   
    }
function sleep(ms)
{
    return new Promise(resolve=>setTimeout(resolve,ms));
}
    async function bubble()
    {
        let n=numbers.length;
        
         for(let i=0;i< n - 1;i++)
         {
            for(let j=0;j< n -i- 1;j++)
            {
                    let currentValue=parseInt(numbers[j].firstChild.firstChild.dataset.value);
                    let nextValue=parseInt(numbers[j+1].firstChild.firstChild.dataset.value);
                    console.log("current value: "+currentValue);
                    console.log("next value: "+nextValue);
                    numbers[j].firstChild.firstChild.style.transform='translateY(-25px)';
                    numbers[j+1].firstChild.firstChild.style.transform='translateY(-25px)';
                    numbers[j].firstChild.firstChild.style.backgroundColor='#e67e22';
                    numbers[j+1].firstChild.firstChild.style.backgroundColor='#e74c3c';
                    await sleep(2000);
                    if((condition && currentValue<nextValue)||(!condition && currentValue>nextValue))
                    {
                        console.log("Swapping",currentValue,nextValue);
                        container.insertBefore(numbers[j+1],numbers[j]);
                        [numbers[j],numbers[j+1]]=[numbers[j+1],numbers[j]];
                        updateIndexes();
                    }
                    else{
                        console.log("not swapped");
                    }
                    numbers[j].firstChild.firstChild.style.transform='translateY(0)';
                    numbers[j+1].firstChild.firstChild.style.transform='translateY(0)';
                    numbers[j].firstChild.firstChild.style.backgroundColor='rgb(57, 121, 123)';
                    numbers[j+1].firstChild.firstChild.style.backgroundColor='rgb(57, 121, 123)';
            }
            }

         
         }


        function updateIndexes()
        {
            numbers.forEach((wrapper,index) => {
                console.log(wrapper);
                console.log(index);
                wrapper.lastChild.innerHTML=index;
            });
        }
    
    document.getElementById("btn1").addEventListener("click",createnumbers);
    document.getElementById("btn1").addEventListener("click",bubble);

});
