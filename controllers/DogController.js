const data = [
    {
        type: 'dog',
        id: 1,
        name: "Lucy",
        breed: 'Lab',
        age: 13,
        color: 'black',
        location: 
        {
            city: 'San Antonio',
            State: 'TX',
        }
    },
    {
        type: 'dog',
        id: 2,
        name: "Tinker",
        breed: 'Chihuahua',
        age: 1,
        color: 'brown',
        location: 
        {
            city: 'Ammansville',
            State: 'TX',
        }
    },
    {
        type: 'dog',
        id: 3,
        name: "Douglas Fir",
        breed: 'Anatolian',
        age: 18,
        color: 'White',
        location: 
        {
            city: 'San Francisco',
            State: 'CA',
        }
    },
    {
        type: 'cat',
        id: 4,
        name: "Big Cat",
        breed: 'DSH',
        age: 2,
        color: 'tabby',
        location: 
        {
            city: 'Austin',
            State: 'TX',
        }
    },
    {
        type: 'cat',
        id: 5,
        name: "Small Cat",
        breed: 'DLH',
        age: 1,
        color: 'orange',
        location: 
        {
            city: 'Santa Cruz',
            State: 'CA',
        }
    },
    {
        type: 'cat',
        id: 6,
        name: "Binks",
        breed: 'DSH',
        age: 18,
        color: 'black',
        location: 
        {
            city: 'Minneapolis',
            State: 'MN',
        }
    },
]
let pets=[];
const getPets = (request, response) => {
    data.map((datum)=>{
        if (datum.type === 'dog')
        pets.push(datum)
    })
    response.send(pets)
    pets=[];
}
let ages= [];
const getAge = (request, response) => {
    data.map((datum)=>{
        if (datum.type === 'dog')
        ages.push(datum.name, datum.age)
    })
    response.send(ages)
    ages=[];
}

const getWhatever = (response, request) => {
    data.map((datum))
}

module.exports = {
    getPets,
    getAge,
}