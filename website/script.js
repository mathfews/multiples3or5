x = 1
num = 35
const list2 = []
const list = []
while ( (3*x) < num) {
    list.push( (3 +(x-1)*3 ) )
    x += 1
}
console.log(list)
x = 1
console.log("---")
while ( (5*x) < num ) {
    list2.push( (5 + (x-1)*5) )
    x += 1
}
console.log(list2)

const intersection = list.filter(num => list2.includes(num))