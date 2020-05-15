/*
 * @Author: xuwang.bao
 * @Date: 2020-05-15 08:35:10
 * @LastEditors: xuwang.bao
 * @LastEditTime: 2020-05-15 09:38:26
 * @Description: 函数解析
 * @$emit: 
 * @$slot: 
 */ 

class FormulaAnalysis {
  /**
   * @param {object} formulaMap 
   */
  constructor(formulaMap = {}){
    if(formulaMap === null) return
    if(typeof formulaMap !== 'object')return
    this.formulaMap = formulaMap
  }
  /**
   * @param {object} ao  //执行期上下文
   * @param {string} exp //公式表达式
   */
  analysis(exp, ao = {}){
    try {
      let variables = [];
      // 挂载执行期上下文
      Object.keys(ao).forEach(key=>{
        variables.push('var ' + key + '=AO.' + key)
      })
      // 挂载函数库
      Object.keys(this.formulaMap).forEach(key=>{
        variables.push('var ' + key + '= formulaMap.' + key)
      })
      let variable = variables.join(';\n') + ';'
      // return 结果 ps:[左右空格很重要]
      let returnExp = variable + ' return ' + exp;
      return new Function('AO',"formulaMap", returnExp)(ao,this.formulaMap)
    } catch (error) {
      return undefined
    }
  }
}
export default FormulaAnalysis