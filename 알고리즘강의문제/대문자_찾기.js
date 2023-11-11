/*
	한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램을 작성하세요 

	조건 
	첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다. 
	첫 줄에 대문자의 개수를 출력합니다. 
*/

const solution = (s) => {
  let count = 0
  for (let x of s) {
    /*
			대문자 : 65 - 90
			소문자 : 97 - 122
		*/
    if (x === x.toUpperCase()) count++
  }

  return count
}

let str = "KoreaTimeGood"
console.log(solution(str))
