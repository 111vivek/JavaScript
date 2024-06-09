const marvel_heros=["spiderman", "thor", "ironman"]
const dc_heros=["superman","flash","batman"]

console.log(marvel_heros.push(dc_heros))
const all_heros= marvel_heros.concat(dc_heros)
console.log(all_heros)

const all_new_heros= [...marvel_heros,...dc_heros]
console.log(all_new_heros);