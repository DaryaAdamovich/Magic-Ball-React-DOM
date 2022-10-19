window.onload = init;

const predictions = [
    { prediction: "Big cash prize awaits you" },
    { prediction: "If you pay attention, you will see love very close to you" },
    { prediction: "You will be able to avoid losses in an important matter" },
    { prediction: "You can see opportunities for growth if you look at the situation from a different angle" },
    { prediction: "Intuition will not let you down in this race. Use it" },
    { prediction: "I am not a product of my circumstances. I am a product of my decisions." },
    { prediction: "Listen to yourself and the answer to the question will be found" },
    { prediction: "A chance to win will appear when the target is accurately defined", },
    { prediction: "The words you're waiting for will be spoken", },
    { prediction: "A good book will help you learn a lot" },
    { prediction: "Hints of fate will help to avoid mistakes" },
    { prediction: "It's time to honestly answer some questions for yourself" },
    { prediction: "You will meet a person who definitely has something to thank for" },
];

function init() {
    generatePrediction();
}

function generatePrediction() {
    let predictionSize = predictions.length;
    let randomIndex = Math.floor(Math.random() * predictionSize);
    let randomPredictionData = predictions[randomIndex];
    document.getElementById("text").innerText = randomPredictionData.prediction;
} 