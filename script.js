/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    
     arr.map((element) =>{
        if(element.profession === "developer"){
        console.log(element.id, element.name, element.age, element.profession);
    }
     })
    //Write your code here , just console.log
  }
  

  function PrintDeveloperbyForEach() {
    
    arr.forEach((element)=>{
        if(element.profession === "developer"){
        let id = element.id;
        let name = element.name;
        let age = element.age;
        let profession = element.profession;
        console.log(id +" "+ name +" "+ age + " " + profession);
    }

    })
    //Write your code here , just console.log
  }
  
  function addData() {
    let obj = {id:4,name:"susan",age:"20",profession:"intern"};
    arr.push(obj);
    console.log(arr);
    //Write your code here, just console.log
  }
  
  function removeAdmin() {
    arr.map((element , index) =>{
        if(element.profession === "admin"){
        arr.splice(index,1)
         console.log(arr);  
        }
    })
    //Write your code here, just console.log
  }
  
  function concatenateArray() {
    let anotherArr = [
        { id: 1, name: "johnny", age: "56", profession: "developer" },
        { id: 2, name: "jackky", age: "27", profession: "developer" },
        { id: 3, name: "karenny", age: "39", profession: "admin" },
      ];
      let newArr = arr.concat(anotherArr);
      console.log(newArr);
      
    //Write your code here, just console.log
  }