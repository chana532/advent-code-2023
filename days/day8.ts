import { readFile } from '../util/readFile';

export interface NextStep {
    R: string, 
    L: string
}

const oraganizeInput = (lines: any) => {
    let directions = lines[0].split('')
    let mapSteps = new Map<string, NextStep>();

    for(var i = 2; i < lines.length; i++) {
        let curr = lines[i].split('=')[0].trim()
        let left = lines[i].split('=')[1].split(',')[0].replace('(', '').trim()
        let right = lines[i].split('=')[1].split(',')[1].replace(')', '').trim()

        mapSteps.set(curr, {R: right, L: left})
    }

    return [directions, mapSteps]
}

const solutionPartOne = (lines: any) => {
    let [directions, mapSteps] = oraganizeInput(lines)
    let steps = walk(directions, mapSteps)
    
    console.log('solutionPartOne: ', steps)
}

const walk = (directions: string[], mapSteps: Map<string, NextStep>) => {
    let curr = 'AAA';
    let next = '';
    let steps = 0

    // to lazy to make this nice
    while (curr !== 'ZZZ') {
        for (var dir of directions) {
            if(dir === 'R') {
                next = mapSteps.get(curr)!.R
            } else {
                next = mapSteps.get(curr)!.L
            }
            steps++;
            curr = next;
        }
    }

    return steps;
}

const solutionPartTwo = (lines: any) => {
    let [directions, mapSteps] = oraganizeInput(lines)
    let steps = walkAllPaths(directions, mapSteps)

    // https://www.geeksforgeeks.org/lcm-of-given-array-elements/ - no thoughts head empty
    function gcd(a: number, b: number) { 
        if (b == 0) 
            return a; 
        return gcd(b, a % b); 
    } 
 
    function findlcm(arr: any[], n: number) { 
        let ans = arr[0]; 
    
        for (let i = 1; i < n; i++) 
            ans = (((arr[i] * ans)) / 
                    (gcd(arr[i], ans))); 
    
        return ans; 
    }

    console.log('solutionPartTwo: ', findlcm(steps, steps.length))
}

const walkAllPaths = (directions: string[], mapSteps: Map<string, NextStep>) => {
    // curr needs to be list - find all things that end with a
    let currList = getKeysEndingWithA(mapSteps)
    let steps: number[] = []

    for(let i = 0; i < currList.length; i++) {
        let curr = currList[i]
        let next = '';
        let currSteps = 0
        while (!curr.endsWith('Z')) {
            for (var dir of directions) {
                if(dir === 'R') {
                    next = mapSteps.get(curr)!.R
                } else {
                    next = mapSteps.get(curr)!.L
                }
                currSteps++;
                curr = next;
            }
        }
        steps[i] = currSteps
    }

    return steps;
}

function getKeysEndingWithA(inputMap: Map<string, any>): string[] {
    return Array.from(inputMap.keys()).filter(key => key.endsWith('A'));
}

(async () => {
    const linesExample = (await readFile('./inputs/example')).split('\r\n');
    const lines = (await readFile('./inputs/day8')).split('\r\n');

    // solutionPartOne(linesExample)
    // solutionPartOne(lines)
    solutionPartTwo(linesExample)
    solutionPartTwo(lines)
})();;
