/*
	7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성 
	
	조건 : 첫 번째 줄에 가장 작은 값을 출력한다 
 */

const solution = (arr) => {
  let min = Math.min(...arr)
  let max = Math.max(...arr)

  console.log(min, max)
}

// let arr = [5, 7, 1, 3, 2, 9, 11]
let arr = [5, 3, 7, 11, 2, 15, 17]
console.log(solution(arr))
