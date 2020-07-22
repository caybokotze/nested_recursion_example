const me = {
    name: 'Caybo',
    friends: [
        {
            name: 'Matthew',
            friends: [
                {
                    name: 'John',
                    friends: [
                        {
                            name: 'Summer'
                        },
                        {
                            name: 'Jenna'
                        }
                    ]
                },
                {
                    name: 'Jordan'
                }
            ]
        },
        {
            name: 'Michael'
        }
    ]
}

function getFriendNames(person) {
    const collectedNames = [];

    if(!person.friends) {
        return [];
    }

    for (const friend of person.friends){
        collectedNames.push(friend.name);
        collectedNames.push(...getFriendNames(friend));
    }
    return collectedNames;
}

let list = document.getElementById("display");

console.log(list);

function appendList(item){
    let li = document.createElement('li');
    li.innerHTML = item;
    list.appendChild(li);
    console.log(li);
}

for (const item of getFriendNames(me)){
    appendList(item);
}

console.log(getFriendNames(me));