function findYoungestPerson(persons) {
    var minAge, index = 0;
    for (var i in persons) {
        if (i == 0) {
            minAge = persons[0].age;
        }
        else {
            if (persons[i].age < minAge) {
                minAge = persons[i].age;
                index = i;
            }
        }
    }
    console.log('The youngest person is', persons[index].firstname, persons[index].lastname);
}

var persons = [
    { firstname : 'George', lastname: 'Kolev', age: 32},
    { firstname : 'Bay', lastname: 'Ivan', age: 81},
    { firstname : 'Baba', lastname: 'Ginka', age: 40}];
findYoungestPerson(persons);