//길이에 따른 연산

const solution = (num_list) => num_list.reduce((a, b) => (num_list.length > 10 ? a + b : a * b))
