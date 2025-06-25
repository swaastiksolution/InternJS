// faster/easier way to access/unpack values from objets

const bob = {
  first: 'bob',
  last: 'sanders',
  city: 'chicago',
  siblings: {
    sister: 'jane',
  },
};
const {
  first: firstName,
  last,
  city,
  zip,
  siblings: { sister: favoriteSibling },
} = bob;

console.log(favoriteSibling, last, city, zip)
function printPerson(person) {
  console.log(person.first);
}

printPerson(bob);
