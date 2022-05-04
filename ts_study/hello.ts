export const greet = (person:string, date:Date) => {
  console.log(`Hello ${person}, ${date.toDateString()}`)
}

greet("YS", new Date())