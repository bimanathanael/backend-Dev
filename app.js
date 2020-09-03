function nGenerator(n){
  let result = []
  for (let i = n ; i > 0 ; i --){
    let tempArr = []
    if (i === n ) result.push([i])
    else {
      tempArr.push(i)
      let count = i
      let temp = i
      while(temp > 0){
        if( temp <= i && count + temp <= n ) {
          tempArr.push(temp)
          count += temp
        } else {
          temp --
        }
      }
      result.push(tempArr)
      if(tempArr[tempArr.length-1] != 1){
        tempArr = []
        tempArr.push(i)
        let count = i
        let temp = i
        while(temp > 0){
          if( temp <= i-1 && count + temp <= n ) {
            tempArr.push(temp)
            count += temp
          } else {
            temp --
          }
        }
        result.push(tempArr)
      }
    }
  }
  return result
} 

console.log(nGenerator(4))

// 4
// 3,1
// 2,2
// 2,1,1
// 1,1,1,1