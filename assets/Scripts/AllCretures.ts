const cardCover = ["CardCoverFire", "CardCoverAir", "CardCoverEarth", "CardCoverWater"]
const cardFront = ["CardFrontFire", "CardFrontAir", "CardFrontEarth", "CardFrontWater"]

export default Array.from({ length: 36 }, (_, i) => {
  return {
    creatureBg: `Creature_${i + 1}_Bg`,
    cardCover: cardCover[Math.round(Math.random() * 3)],
    creature: `Creature_${i + 1}`,
    cardFront: cardFront[Math.round(Math.random() * 3)],
    mana: String(Math.round(Math.random() * 10)),
    attack: String(Math.round(Math.random() * 10)),
    hp: String(Math.round(Math.random() * 10)),
    name: `Creature${i + 1}`,
    description: `Creature${i + 1}_description_hehehehe`,
  }
})