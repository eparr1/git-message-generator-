
const randomMessage = arr => {
    const randomGenerator = Math.floor(Math.random()* arr.length);
    const randomElement = arr[randomGenerator]
    return randomElement 
}

const messageGenerator = {
    careerarr: ['Doctor', 'Actor', 'Unemployed', 'Bin man/woman', 'Bricklayer', 'Scientist', 'Office Worker', 'Full stack Developer'],
    kidsarr: ['Slug', 'Noah', 'Emily', 'Hugo', 'Charlotte', 'Dontae', 'Margaret'],
    emotionarr: ['Sad', 'Lonely', 'Happy', 'Smug', 'Jealous', 'Overjoyed', 'Content'],
}
let futureAnswers = []
for (let prop in messageGenerator){
    let generated = randomMessage(messageGenerator[prop])
    switch (prop){
        case 'careerarr':
            futureAnswers.push(`You're future career will be ${generated}`)
        break
        case 'kidsarr':
            futureAnswers.push(`You're future kid's name will be ${generated}`)
        break 
        case 'emotionarr':
            futureAnswers.push(`You're emotions will mainly be ${generated}`)
        break
        default:
            futureAnswers.push('Do you really not want to know?')
        break
    }
}

console.log(futureAnswers)


