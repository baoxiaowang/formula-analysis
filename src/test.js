/*
 * @Author: xuwang.bao
 * @Date: 2020-05-15 09:38:09
 * @LastEditors: xuwang.bao
 * @LastEditTime: 2020-05-15 09:40:25
 * @Description: 
 * @$emit: 
 * @$slot: 
 */ 
import FormulaAnalysis from "./index"

const fml = {
  sum(a,b){
    return a+b
  }
}
var formulaAnalysis = new FormulaAnalysis(fml)

const ao = {
  a:10,
  b:5
}
var res = formulaAnalysis.analysis("sum(a,b)",ao)
console.log(res)