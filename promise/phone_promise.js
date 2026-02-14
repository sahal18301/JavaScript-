// function behaviorPromise(isWellBehaved) {
//     return new promise((resolve, reject) => {

//         setTimeout(() => {
//             if (isWellBehaved) {
//                 resolve("you behaved well! here's ur new phone ");
//             } else {
//                 reject("you did not behave well, so no phone for u.");
//             }
//         }, 1000);

//     })
// }  

// let behavedWell = false;

// let mothersPromise = new Promise(function (resolve, reject) {
//   console.log("Mom is watching your behaviour this week...");

//   setTimeout(function () {
//     if (behavedWell) {
//       resolve("You behaved well! Here's your phone 📱");
//     } else {
//       reject("You misbehaved! No phone ❌");
//     }
//   }, 3000); // 3 seconds = 1 week (pretend)
// });

// mothersPromise
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

function refsPromise(handball) {
  return new Promise(function (resolve, reject) {
    console.log("VAR checking for a possible penalty...");

    setTimeout(function () {
      if (handball) {
        resolve("decision, penalty");
      } else {
        reject("decision, no penalty");
      }
    }, 5000);
  });
}

async function checkIfPenalty() {
  try {
    var result = await refsPromise(true);

    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

checkIfPenalty();
