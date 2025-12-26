function multiples(num) {
    if (num < 0) {
        return 0
    }
    else {
        x = 1
        sum = 0
        const multiples3 = []
        const multiples5 = []
        while ( (3*x) < num) {
            multiples3.push( (3 +(x-1)*3 ) )
            x += 1
        }
        x = 1
        while ( (5*x) < num ) {
            multiples5.push( (5 + (x-1)*5 ) )
            x += 1
        }
        const multiples = multiples3.filter(num => !multiples5.includes(num)).concat(multiples5)
        x = 0
        while (x < multiples.length) {
            sum += multiples[x]
            x += 1
        }
        return sum
    }
}
const myButton = document.getElementById("number")
const theme = document.getElementById("theme")
const body = document.body
//

body.style.backgroundColor = "white"
theme.addEventListener("click", event => {
    // TODO: replace this button with an icon in the future
    if (body.style.backgroundColor == "white") {
        // dark mode
        event.target.style.backgroundColor = "#fff8f8ff"
        event.target.style.color = "black"
        body.style.color = "white"
        body.style.backgroundColor = "#121212"
    }
    else {
        // light mode
        event.target.style.backgroundColor = "#1d1d1dff"
        event.target.style.color = "white"
        body.style.backgroundColor = "white"
        body.style.color = "black"
    }
})
