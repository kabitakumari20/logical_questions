// let obj = {
//     name: "cess",
// };
// obj.name = null;
// console.log(obj.name); // null



// let employee = { id: 101, details: { name: "Amit", salary: 30000 } };
// // 👉 Increase salary by 5000
// employee.details.salary=50000
// console.log('employee----',employee)


// let book = { title: "JavaScript Basics" };
// // 👉 Add authors: ["Kabita", "Manvi"]
// book.authors = ["Kabita", "Manvi"]
// console.log('book===',book)


// let products = [
//   { id: 1, name: "Laptop", price: 50000 },
//   { id: 2, name: "Mobile", price: 20000 }
// ];
// // 👉 Update Mobile price to 22000
//  products[1].price=22000
// console.log('products===',products)



// let todos = [
//   { id: 1, task: "Learn JS", done: false },
//   { id: 2, task: "Practice SQL", done: true }
// ];
// todos[2]={id: 3, task: "Build API", done: false}
// // 👉 Add new task {id: 3, task: "Build API", done: false}

// console.log('products===',todos)

// let company = {
//   name: "TechCorp",
//   employees: [
//     { id: 1, name: "Ravi", skills: ["JS", "Node"] },
//     { id: 2, name: "Priya", skills: ["Python", "Django"] }
//   ]
// };
// // 👉 Add "React" skill for Ravi
// company.employees[0].skills.push('Ravi')
// console.log('products===',company)



let settings = { theme: "light", notifications: true };
// 👉 Toggle theme (if light → dark, if dark → light)
if(settings.theme=='light'){
    settings.theme='dark'
}else{
    settings.theme='light'

}

console.log('settings===',settings);

