const pairNumbers = (min, max) => {
  let all = []

   if (min === max) {
    return ""
   }

  min = typeof min === 'string' ? Number(min) : min;
  max = typeof max === 'string' ? Number(max) : max;

  for ( let i = min; i <= max; i++ ) {
   if ( i % 2  === 0) {
     all.push(i)
   }
  }
  return all.join()

}

export default pairNumbers
