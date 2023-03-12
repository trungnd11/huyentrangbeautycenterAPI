export const ErrorException = {
  getRequired(value) {
    return {
      error: `${value} is not required`,
    };
  }
}