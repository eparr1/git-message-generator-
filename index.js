const careerarr = ['Doctor', 'Actor', 'Unemployed', 'Bin man/woman', 'Bricklayer', 'Scientist', 'Office Worker']
const kidsarr = ['Slug', 'Noah', 'Emily', 'Hugp', 'Charlotte', 'Dontae', 'Margaret'];
const emotionarr = ['Sad', 'Lonely', 'Happy', 'Smug', 'Jealous', 'Overjoyed', 'Content']


const randomMessage = arr => {
    const randomGenerator = Math.floor(Math.random()* arr.length);
    const randomElement = arr[randomGenerator]
    return randomElement 
}

console.log(randomMessage(careerarr))
