function traffic_light() {
    weatherDebug = weather()
    flowDebug = flow()
    
    console.log(
        weatherDebug,
        flowDebug
    )

}

function weather() {
    weatherArr = ["light_rain", "clear", "strong rain"]

    return weatherArr[Math.floor(Math.random() * weatherArr.length)];
}

function flow() {
    return Math.floor(Math.random() * 10);
}



traffic_light()