function isPalindrome(mot, start = 0, end = mot.length - 1) {
    if (start >= end) {
      return true;
    } else {
      if (mot[start] === mot[end]) {
        return isPalindrome(mot, start + 1, end - 1);
      }
      return false;
    }
  }

    console.log(isPalindrome("racecar"));