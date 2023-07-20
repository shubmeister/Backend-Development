

const multiply=(a,b)=> a*b;

console.log(multiply(2,3));

const student={
    name:"shubham",
    age:29,
    
    greet(){
       return 'Hi, I am '+this.name+' age '+this.age;
    }
};

console.log(student.greet());