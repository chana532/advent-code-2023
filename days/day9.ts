import { readFile } from '../util/readFile';

const solutionPartOne = (lines: any) => {
    let sum = 0
    for(var line of lines) {
        let numArray: number[] = line.split(' ')
        let lastNum: number = +numArray[numArray.length - 1] // why it dont become int automatically idk
        let prediction: number = predictFuture(numArray);
        sum = sum + prediction + lastNum;
    }

    console.log('solutionPartOne: ', sum)
}

function predictFuture(numArray: number[]): number {
    let difference: number[] = []

    for(let i = 0; i < numArray.length - 1; i++) {
        difference[i] = numArray[i+1] - numArray[i];
    }

    if(areAllValuesSame(difference)) {
        return difference[0]
    } else {
        return difference[difference.length - 1] + predictFuture(difference)
    }
}

function areAllValuesSame<T>(arr: T[]): boolean {
    return arr.every((value, index, array) => value === array[0]);
}

const solutionPartTwo = (lines: any) => {
    let sum = 0
    for(var line of lines) {
        let numArray: number[] = line.split(' ')
        let firstNum: number = +numArray[0] // why it dont become int automatically idk
        let prediction: number = predictHistory(numArray);
        sum = sum + (firstNum - prediction);
    }

    console.log('solutionPartTwo: ', sum)
}

function predictHistory(numArray: number[]): number {
    let difference: number[] = []

    for(let i = 0; i < numArray.length - 1; i++) {
        difference[i] = numArray[i+1] - numArray[i];
    }

    if(areAllValuesSame(difference)) {
        return difference[0]
    } else {
        return difference[0] - predictHistory(difference) 
    }
}

(async () => {
    const linesExample = (await readFile('./inputs/example')).split('\r\n');
    solutionPartOne(linesExample)
    solutionPartTwo(linesExample)
    const lines = (await readFile('./inputs/day9')).split('\r\n');
    solutionPartOne(lines)
    solutionPartTwo(lines)
})();;
