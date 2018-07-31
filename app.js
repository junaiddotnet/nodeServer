const express = require('express');
const app  = express();

const port = 3000;

class person
{
    constructor(name,surname,age)
    {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    getFullName ()
    {
        return this.name + ' '+this.surname;
    }
    static older (person1,person2)
    {
        if (person1.age>person2.age)
        {
            return person1;
        }
        else
        {
            return person2;
        }
    }
}
class personwithMiddleName extends person
{
    constructor(name,surname,midlename,age)
    {
        super(name,surname,age);
        this.midlename=midlename;
    }
    getFullName()
    {
        return this.name+' '+this.midlename+' '+this.surname;
    }
}


var p = new person('junaid','mahmood',37);
var p1 = new person('mahmood','ahmad',72);
console.log('Older name is : ',person.older(p,p1).getFullName());
console.log(p.getFullName());

var mperson  = new personwithMiddleName('ammar','mahmood','malik',35);

console.log(mperson.getFullName());

const url = require('url');
var parseurl= url.parse("http://wwww.yahoo.com");
console.log(parseurl.protocol);
console.log(parseurl.host);
console.log(parseurl.query);
app.get('/',function(req,res,next){
    console.log(req.ip);
    next;
});
app.listen(port,function(){
    console.log('Listening on por ..'+port);
});