import { readFile } from '../util/readFile';

export interface Cordinate {
    X: number, 
    Y: number
}


const solutionPartOne = (lines: any) => {
    // save cordinates of galaxies in a map? <galaxyNum, {XCord, YCord}>
    let galaxyCordinate = new Map<number, Cordinate>();
    for(var line of lines) {
        // check if line contains #
        
    }

    console.log('solutionPartOne: ', )
}

// if empty row/col expand
function expandGalaxyCol() {

}


const solutionPartTwo = (lines: any) => {
    for(var line of lines) {

    }

    console.log('solutionPartTwo: ', )
}



(async () => {
    const linesExample = (await readFile('./inputs/example')).split('\r\n');
    solutionPartOne(linesExample)
    solutionPartTwo(linesExample)
    const lines = (await readFile('./inputs/day11')).split('\r\n');
    solutionPartOne(lines)
    solutionPartTwo(lines)
})();;
