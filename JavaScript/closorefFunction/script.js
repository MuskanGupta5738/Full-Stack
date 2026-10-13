function Greetings(name){
    return function(){
        console.log("Welcome to RICR !!!",name);
    };
}
const greetMuskan = Greetings("muskan");
const greetPrince = Greetings("prince");

greetMuskan();
greetPrince();
