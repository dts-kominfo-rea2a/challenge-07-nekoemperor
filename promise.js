const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
function getEmotion(theater) {
  return theater.hasil;
}

const promiseOutput = async (param) => {
  try {
    let resultIXX = await promiseTheaterIXX();
    let resultVGC = await promiseTheaterVGC();
    const arrTheaters = [resultIXX, resultVGC];
    const arrEmotions = [];

    for (let counter = 0; counter < arrTheaters.length; counter++) {
      for (
        let counter1 = 0;
        counter1 < arrTheaters[counter].length;
        counter1++
      ) {
        arrEmotions.push(arrTheaters[counter][counter1].hasil);
      }
    }

    if (param === "marah") {
      let emotMarah = arrEmotions.filter(
        (emotion) => emotion.toLowerCase() === "marah"
      );
      return emotMarah.length;
    } else if (param === "tidak marah") {
      let emotTidakMarah = arrEmotions.filter(
        (emotion) => emotion.toLowerCase() === "tidak marah"
      );
      return emotTidakMarah.length;
    }
  } catch (err) {
    console.log(err);
  }
};

promiseOutput("marah");

module.exports = {
  promiseOutput,
};
