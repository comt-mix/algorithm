function solution(S, T) {
  const start = convertToSeconds(S);
  const end = convertToSeconds(T);
  let count = 0;
  for (let i = start; i <= end; i++) {
    if (isInteresting(i)) {
      count++;
    }
  }
  return count;
}

function convertToSeconds(timeString) {
  const [h, m, s] = timeString.split(":").map(Number);
  return h * 3600 + m * 60 + s;
}

function isInteresting(seconds) {
  const digits = new Set(String(seconds).replace(":", ""));
  return digits.size <= 2;
}

solution("15:15:00", "15:15:12");
