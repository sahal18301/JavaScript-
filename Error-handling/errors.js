try {
//     let firstName
//     console.log(firstName.toUpperCase())

    let dbError = new Error("could not connect to the database")
    throw dbError

} catch (error) {
    console.log("You have a error in your code, please fix. I will not crash!")
} finally {
    console.log ("this will run regardless of the error")
}