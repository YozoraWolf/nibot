class StringUtils {}

String.prototype.insertTagAt = function (tag, caretPosition) {
  const word = this.getWordBeforeSpace(caretPosition);
  const startIndex = caretPosition - word.length;
  const endIndex = caretPosition;
  const replacedValue = this.substring(0, startIndex) + tag + this.substring(endIndex);
  return replacedValue.trimEnd();
};

String.prototype.getWordBeforeSpace = function (caretPosition) {
  let endIndex = caretPosition - 1;
  while (endIndex >= 0 && this[endIndex] !== ' ') {
    endIndex--;
  }
  const substring = this.substring(endIndex + 1, caretPosition);
  return substring;
};

Number.prototype.formatPostCount = function () {
  const postCount = this;
  
  if (postCount < 1000) {
    return postCount.toString();
  } else if (postCount < 1000000) {
    const thousands = (postCount / 1000).toFixed(1);
    return `${thousands}K`;
  } else {
    const millions = (postCount / 1000000).toFixed(1);
    return `${millions}M`;
  }
};

export default StringUtils;