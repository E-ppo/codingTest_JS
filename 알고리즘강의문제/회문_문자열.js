/*
	앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다. 
	문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 회문 문자열이 아니면 "NO"를 출력하는 프로그램을 작성하세요 
	단, 회문을 검사할 때 대소문자를 구분하지 않습니다. 

	조건 
	첫 줄에 정수 길이 100을 넘지 찮는 공백이 없는 문자열이 주어집니다. 
	첫번째 줄에 회문 문자열인지의 결과를 YES 또는 NO 로 출력합니다. 
*/

function solution(s) {
  // const lowerString = s.toLowerCase()
  // return [...lowerString].reverse().join("") === lowerString ? "YES" : "NO"

  const lowerString = s.toLowerCase().split("")

  // const length = lowerString.length - 1

  // let answer = true

  // for (i = 0; i <= length; i++) {
  //   if (lowerString[i] !== lowerString[length - i]) {
  //     answer = false
  //     break
  //   }
  // }

  const length = lowerString.length

  let answer = "YES"

  for (i = 0; i <= Math.floor(length / 2); i++) {
    if (lowerString[i] !== lowerString[length - i - 1]) {
      return "NO"
    }
  }

  return answer
}

let str = "goooG"
console.log(solution(str))
