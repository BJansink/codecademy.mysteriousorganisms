// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

function pAequorFactory(num, arr) {
  return {
    specimenNum: num,
    dna: arr,
    mutate() {
    let selectedString = Math.floor(Math.random() * 15)
    console.log(selectedString)
    let newDNA = this.dna; 
    console.log(newDNA)
    do {
    newDNA[selectedString] = returnRandBase() }
    while (newDNA[selectedString] === returnRandBase());
    return newDNA },
    compareDNA(obj) {
      let DNA1 = obj
      let position = 0
      console.log(DNA1)
      let DNA2 = this.dna
      console.log(DNA2)
      let similarities = 0
      for (const [index, string1] of DNA1.entries()) {
        console.log(index, string1,DNA2[index])
          if (string1 === DNA2[index]) {
            similarities++
            console.log(similarities)
          }
        }let inCommon = (similarities / 15)*100
      console.log(`Specimen #1 and specimen #2 have ${inCommon}% DNA in common.`)
      },
      willLikelySurvive() {
        let DNA = this.dna
        let countOfCandG = 0
        for (const strand of DNA) {
          if (strand === 'C' || strand === 'G') {
            countOfCandG++
      }
      } return ((countOfCandG / 15) >= 0.6)
}}}

const healthyDNA = num => {
  let healthies = []
  let i = 0
  do {
    let plant = pAequorFactory(i,mockUpStrand())
    //console.log(plant, plant.willLikelySurvive());
    if (plant.willLikelySurvive() === true) {
      healthies.push(plant)
      i++
    }
  } while (healthies.length <= num)
  return healthies
}

const otherDNA = [ 'C', 'C', 'T', 'C', 'T', 'G', 'G', 'T', 'C', 'C', 'T', 'A', 'A', 'C', 'T' ]
//console.log(mockUpStrand())
//console.log(pAequorFactory(5, mockUpStrand()).mutate())
//console.log(pAequorFactory(6,mockUpStrand()).willLikelySurvive())
console.log(healthyDNA(30))
