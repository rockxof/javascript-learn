// const coding = ["js", "python", "java", "cpp", "c", "golang" , 10] 

// const newVar = coding.forEach( (item) => {
//     return item
// } )
// console.log(newVar);
// output will be undefined, forEach loop don't return anything ****IMP

const arr = [ 1, 2, 3, 4, 5, 6, 7, 8]

// let newArr = arr.filter( ( item ) => ( item > 5 ))
// console.log(newArr);

// let newArr = []
// arr.forEach( ( item ) => {
//     if ( item > 5 ) {
//         newArr.push(item);
//     }
// })
// console.log(newArr);

const book = [
    {
        title : 'Book One', genre : "fiction", publish : 1999, edition : 2004
    },
    {
        title : 'Book Two', genre : "Non-fiction", publish : 1981, edition : 2009
    },
    {
        title : 'Book Three', genre : "Maths", publish : 1990, edition : 2000
    },
    {
        title : 'Book Four', genre : "Non-fiction", publish : 2001, edition : 2008
    },
    {
        title : 'Book Five', genre : "Maths", publish : 1995, edition : 2000
    },
    {
        title : 'Book Six', genre : "Science", publish : 2005, edition : 2010
    },
    {
        title : 'Book Seven', genre : "fiction", publish : 2002, edition : 2011
    },
    {
        title : 'Book Eight', genre : "History", publish : 1986, edition : 2003
    },
    {
        title : 'Book One', genre : "History", publish : 1980, edition : 1997
    },
]

// let myBook = book.filter( ( item ) => item.genre === "Science")
let myBook = book.filter( ( item ) => {
    return item.genre === "fiction" && item.publish >= 2000 })
console.log(myBook);
//  practice more in this using filter
