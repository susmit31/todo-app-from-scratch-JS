let addTask = ()=>{
            let btn = document.getElementById('addTask')
            btn.style.border = "2px solid white";
            setInterval(()=>btn.style.border="2px solid black",250);
            
            let todo = document.getElementById("Todo");
            let task = document.getElementById("taskName").value;
            if (task !== ""){
                let newNode = document.createElement("li");
                newNode.appendChild(document.createTextNode(task));
                
                let crossBtn = document.createElement("button");
                crossBtn.classList.add("cross");
                crossBtn.innerText = "X";
                newNode.appendChild(crossBtn);
                
                let numItemsPrev = document.querySelectorAll("li").length;
                newNode.id = `item_${numItemsPrev+1}`;
                let id_n = newNode.id;
                crossBtn.addEventListener("click",function(){
                    document.getElementById(id_n).remove();
                    let items = new Array(document.querySelectorAll('li'));
                    for(let i=0; i<items.length;i++) items[i].id = `item_${i+1}`;
                });

                todo.appendChild(newNode);
                document.getElementById("taskName").value = '';
            }
        };
