const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        //name: 'Penguin'
    }
}

const {name: publisherName = "self-publisher"} = book.publisher

console.log(publisherName)



const item = ['Coffee hot', '$2.00', '$2.5', '$2.75']

const [name, , medium] = item
console.log(`A medium ${name} costs ${medium}`)