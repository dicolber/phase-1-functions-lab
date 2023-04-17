// Code your solution in this file!
function distanceFromHqInBlocks(value) {
    let location = 42
    return Math.abs(value - location)
}
function distanceFromHqInFeet(value) {
    let location = (distanceFromHqInBlocks(value) * 264)
    return location

}

function distanceTravelledInFeet(start,destination) {
    let distanceFromHqInBlocks = Math.abs(start - destination)
    return distanceFromHqInBlocks * 264
}

function calculatesFarePrice(start, destination) {
    let distanceInFeet = distanceTravelledInFeet(start,destination)
    if (distanceInFeet < 400) {
        return 0
    } else if (distanceInFeet > 400 && distanceInFeet < 2000){
        return(distanceInFeet - 400) * .02
    } else if(distanceInFeet >2000 && distanceInFeet < 2500){
        return 25
    } else
        return 'cannot travel that far'
    

}
