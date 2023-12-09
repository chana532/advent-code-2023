import { readFile } from '../util/readFile';

export interface Hand {
    ogHand: string,
    bet: number, 
    type: number
}

const cardOrder: Record<string, number> = {
    '2': 1, '3': 2, '4': 3, '5': 4, '6': 5, '7': 6, '8': 7, '9': 8, 'T': 9, 'J': 10, 'Q': 11, 'K': 12, 'A': 13,
};

const solutionPartOne = (lines: any) => {
    let allHands = new Map<string, Hand>();

    // determine type of hand while interating through
    for(var line of lines) {
        let hand = line.split(' ')[0]
        let bet = line.split(' ')[1]

        allHands.set(hand, {
            ogHand: hand,
            bet: bet,
            type: getType(hand)
        })
    }

    let totalWinnings = scoreHands(allHands, lines.length)

    console.log('solutionPartOne: ', totalWinnings)
}

function compareHands(handA: Hand, handB: Hand): number {
    for (let i = 0; i < Math.min(handA.ogHand.length, handB.ogHand.length); i++) {
      const cardComparison =  cardOrder[handB.ogHand[i]] - cardOrder[handA.ogHand[i]];
      if (cardComparison !== 0) {
        return cardComparison;
      }
    }
    return handA.ogHand.length - handB.ogHand.length; // if all cards are equal, shorter hands come first
}

function countCharacters(inputString: string): Map<string, number> {
    return Array.from(inputString).reduce((charCounts, char) => {
      charCounts.set(char, (charCounts.get(char) || 0) + 1);
      return charCounts;
    }, new Map<string, number>());
}

function sortArray(inputArray: number[]): number[] {
    return inputArray.slice().sort((a, b) => b - a);
}

const getType = (sortedHand: string) => {
    let matches = countCharacters(sortedHand)
    let matchvalues: number[] = sortArray(Array.from(matches.values()))

    // Types:
    // 6 = 5 of a kind
    // 5 = 4 of a kind
    // 4 = 3 of kind + 2 of a kind 
    // 3 = 3 of a kind
    // 2 = 2 pairs
    // 1 = 1 pair
    // 0 = high card

    if (matchvalues[0] === 5) {
        return 6
    } else if (matchvalues[0] === 4) {
        return 5
    } else if (matchvalues[0] === 3 && matchvalues[1] === 2) {
        return 4
    } else if (matchvalues[0] === 3) {
        return 3
    } else if (matchvalues[0] === 2 && matchvalues[1] === 2) {
        return 2
    } else if (matchvalues[0] === 2) {
        return 1
    } else {
        return 0
    }
}

function scoreHands(allHands: Map<string, Hand>, totalHands: any) {
    // 6 types - grab each type and determine its rank start at 6 - max score = totalHands
    let sum = 0;
    for (let i = 6; i >= 0; i--) {
        let scoreHands = getHandsByRank(allHands, i)
        
        //sort hands from strongest to weakests
        let sortedHands: Hand[] = scoreHands.slice().sort(compareHands);
        // console.log("scoreHands: ", i, sortedHands)

        for(var hand of sortedHands) {
            let handScore = totalHands * hand.bet;
            // console.log("score: ", totalHands, hand.bet, handScore)

            sum += handScore;
            totalHands--;

        }
    }
    
    return sum;
}

function getHandsByRank(inputMap: Map<string, Hand>, rank: number) : Hand[] {
    const valuesArray = Array.from(inputMap.values());
    const itemsWithRankOne = valuesArray.filter(item => item.type === rank);
    return itemsWithRankOne;
  }

const solutionPartTwo = (lines: any) => {
    for(var line of lines) {

    }

    console.log('solutionPartTwo: ')
}

(async () => {
    const linesExample = (await readFile('./inputs/example')).split('\r\n');
    solutionPartOne(linesExample)
    solutionPartTwo(linesExample)
    const lines = (await readFile('./inputs/day7')).split('\r\n');
    solutionPartOne(lines)
    solutionPartTwo(lines)
})();;
