const employees = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" }
  ];
  
  // Task 1 - PrintDeveloperbyFilter()
  function printDevelopers() {
    const developers = employees.filter(employee => employee.profession === "developer");
    console.log("Developers:", developers);
  }
  
  // Task 2 - addnewemployee()
  function addNewEmployee() {
    const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
    employees.push(newEmployee);
    console.log("Updated Array with New Employee:", employees);
  }
  
  
  
  // Task 4 - removeAdmin()
  function removeAdmins() {
    const updatedArray = employees.filter(employee => employee.profession !== "admin");
    console.log("Array after removing admins:", updatedArray);
  }
  
  
  // Task 5 - concatArrays()
  function concatArrays() {
    const additionalEmployees = [
      { id: 5, name: "mike", age: "22", profession: "developer" },
      { id: 6, name: "emma", age: "21", profession: "intern" }
    ];
  
    const updatedArray = employees.concat(additionalEmployees);
    console.log("Updated Array after Concatenation:", updatedArray);
  }