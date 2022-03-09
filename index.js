console.log("hello")

function myEach(collection, callback) {
    let collectionArray = []
    debugger
    if (typeof(collection) === "object") {
        debugger
        collectionArray = Object.values(collection)
    } else {
        collectionArray = collection
    }
 
    for (let i = 0; i < collectionArray.length; i++) {
        callback(collectionArray[i])
    }

    return collection
}

function myMap(collection, callback) {
    let collectionArray = []
    if (typeof(collection) === "object") {
        collectionArray = Object.values(collection)
    } else {
        collectionArray = [...collection]
    }

    for (let i = 0; i < collectionArray.length; i++) {
        collectionArray[i] = callback(collectionArray[i])
    } 

    return collectionArray 
}

function myReduce(collection, callback, acc) {
    let collectionArray = []

    if (typeof(collection) === "object") {
        collectionArray = Object.values(collection)
    } else {
        collectionArray = [...collection]
    }

    if (typeof acc !== 'undefined') {
        for (let i = 0; i < collectionArray.length; i++) {
            acc = callback(acc, collectionArray[i], collectionArray)
        } 
        return acc
    } else {
        debugger
        let start = 0
        for (let i = 0; i < collectionArray.length; i++) {
            start = callback(start, collectionArray[i], collectionArray)
        } 
        return start 
    }

}

function myFind(collection, predicate) {
    let collectionArray = []

    if (typeof(collection) === "object") {
        collectionArray = Object.values(collection)
    } else {
        collectionArray = [...collection]
    }

    for (let i = 0; i < collectionArray.length; i++) {
        if (predicate(collection[i])) {
            return collection[i]
        }
    }
}

function myFilter(collection, predicate) {
    let collectionArray = []

    if (typeof(collection) === "object") {
        collectionArray = Object.values(collection)
    } else {
        collectionArray = [...collection]
    }

    let answer = []

    for (let i = 0; i < collectionArray.length; i++) {
        if (predicate(collection[i])) {
            answer.push(collection[i])
        }
    }
    return answer
}

function mySize(collection) {
    let collectionArray = []

    if (typeof(collection) === "object") {
        collectionArray = Object.values(collection)
    } else {
        collectionArray = [...collection]
    }

    return collectionArray.length
}

function myFirst(array, n) {
    if (typeof n !== 'undefined') {
        let answer = []
        for (let i = 0; i < n; i++) {
        answer.push(array[i])
        } 
        return answer
    } else {
        return array[0]
    }
}

function myLast(array, n) {
    let length = array.length 
    if (typeof n !== 'undefined') {
        let answer = []
        debugger
        for (let i = length - n; i < length ; i++) {
        answer.push(array[i])
        } 
        return answer
    } else {
        return array[length-1]
    }
}

function myKeys(object) {
    return Object.keys(object)
}

function myValues(object) {
    return Object.values(object)
}