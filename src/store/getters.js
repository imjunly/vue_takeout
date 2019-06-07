/*
包含多个基于state的getter计算属性的对象
 */
export default {
  /**
   * array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
   *
   * array.reduce(计算的函数, 初始值)
   * 计算的函数：
   * () => {}
   * function(total,currentValue, index,arr) {
   *   return total + currentValue
   * }

   计算的函数                                 描述
   function(total,currentValue, index,arr)	必需。用于执行每个数组元素的函数。

   函数参数:
   参数	          描述
   total	        必需。初始值, 或者计算结束后的返回值。
   currentValue	  必需。当前元素
   currentIndex	  可选。当前元素的索引
   arr	          可选。当前元素所属的数组对象。
   initialValue	  可选。传递给函数的初始值
   *
   */

  totalCount (state) {
    return state.cartFoods.reduce((preTotal, food) => preTotal + food.count , 0)
  },

  totalPrice (state) {
    return state.cartFoods.reduce((preTotal, food) => preTotal + food.count*food.price , 0)
  },

  positiveSize (state) {
    return state.ratings.reduce((preTotal, rating) => preTotal + (rating.rateType===0?1:0) , 0)
  }
}
