/**
 * 延迟执行
 * @param time
 */
exports.sleep = function (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
};

/**
 * 生成Token
 */
exports.createToken = function (key) {
  return `token_${Math.random().toString().slice(-6)}_${Date.now()}_${key}`;
};
