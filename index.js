// Problem [#1 RadianToDegree].
const radianToDegree = (radian) => {
    const degree = 57.2958;
    const convertToDegree = radian * degree;
    const convertResult = parseFloat(convertToDegree.toFixed(2));

    if (typeof radian !== 'number') {
        return "Please provide a valid number."
    } else {
        return convertResult
    }
}
const output = radianToDegree(1)
console.log(output)



// Problem [#2 isJavascript].
const isJavaScriptFile = (fileName) => {
    const isString = fileName.endsWith(".js");
    return isString;

}

const outputString = isJavaScriptFile("app.ts");
console.log(outputString);


// Problem [#3 Calculate Oil price].
const dieselPrice = 114;
const patrolPrice = 130;
const octeanPrice = 135;
const oilPrice = (dieselQuantity, patrolQuantity, octeanQuantity) => {
    const dieselQp = dieselPrice * dieselQuantity;
    const patrolQp = patrolPrice * patrolQuantity;
    const octeanQp = octeanPrice * octeanQuantity;
    const total = dieselQp + patrolQp + octeanQp;
    return total
}
const outputOil = oilPrice(30, 20, 10);
console.log(outputOil)


// Problem [#4 Travellr.].
const busSit = 50;
const microSit = 11;
const personBusTicket = 250;

const publicBusFare = (peoples) => {
    const busQuantity = parseInt(peoples % busSit);
    const carQuantity = busQuantity % microSit;
    const person = carQuantity * personBusTicket;
    return person;
}
const totalperson = publicBusFare(67);
console.log(totalperson);


// Problem [#5 isBestFriend.].
const best = { name: "sujon", friend: "sheikh" }
const bondu = { name: "sheikh", friend: "sujon" }
const isBestFriend = (dost, dostoo) => {
    if (dost == best.name || dost == best.friend && dostoo == bondu.name || dostoo == bondu.friend) {
        return true;
    } else {
        return false
    }
}
const myBestfriend = isBestFriend("sujonx", "sheikh");
console.log(myBestfriend);
