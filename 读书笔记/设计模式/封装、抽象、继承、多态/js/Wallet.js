
class Wallet {
  // id 表示钱包的唯一编号，
  // createTime 表示钱包创建的时间，
  // balance 表示钱包中的余额，
  // balanceLastModifiedTime 表示上次钱包余额变更的时间。
  constructor() {
    this.id;
    this.createTime = Date.now();
    this.balance = 0;
    this.balanceLastModifiedTime = Date.now();
  }

  // 注意：下面对get方法做了代码折叠，是为了减少代码所占文章的篇幅
  /**
   * @return {string}
   */
  getId() {
    return this.id;
  }

  /**
 * @return {number}
 */
  getCreateTime() {
    return this.createTime;
  }

  /**
 * @return {bigDecimal}
 */
  getBalance() {
    return this.balance;
  }

  /**
 * @return {number}
 */
  getBalanceLastModifiedTime() {
    return this.balanceLastModifiedTime;
  }

  /**
   * @param {BigDecimal} increasedAmount
   * @return {void}
   */
  increaseBalance(increasedAmount) {
    if (this.balance < 0) {
      throw new Error();
    }
    this.balance += money;
    this.balanceLastModifiedTime = Date.now();
  }

  /**
   * @param  {BigDecimal} decreasedAmount 
   * @return {void}
   */
  decreaseBalance(decreasedAmount) {
    if (this.balance < 0) {
      throw new Error();
    }
    this.balance -= money;
    this.balanceLastModifiedTime = Date.now();
  }
}
