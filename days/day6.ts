import { readFile } from '../util/readFile';

const solutionPartOne = (lines: any) => {
    let time = lines[0].split(':')[1].trim().split(/\s+/)
    let distance = lines[1].split(':')[1].trim().split(/\s+/)
    let choices = 1; 

    for(let i = 0; i < time.length; i++ ) {
        choices = choices * getRange(time[i], distance[i])
    }

    console.log('solutionPartOne: ', choices)
}

const getRange = (time: any, distance: any) => {
    let count = 0;
    for(let press = 1; press < time; press++) {
        let moveTime = time - press;
        let myDistance = moveTime * press
        if(myDistance > distance) {
            count++;
        }
    }

    return count
}

const solutionPartTwo = (lines: any) => {
    let time = lines[0].split(':')[1].trim().split(/\s+/).join('')
    let distance = lines[1].split(':')[1].trim().split(/\s+/).join('')

    console.log('solutionPartTwo: ', getRange(time, distance))
}




(async () => {
    const linesExample = (await readFile('./inputs/example')).split('\r\n');
    solutionPartOne(linesExample)
    solutionPartTwo(linesExample)
    const lines = (await readFile('./inputs/day6')).split('\r\n');
    solutionPartOne(lines)
    solutionPartTwo(lines)
})();;
