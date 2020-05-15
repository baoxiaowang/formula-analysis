# 前端公式解析

## 一，引入

``` js
import FormulaAnalysis from "./index"
```

  

## 二，初始化

```  js
const fml = {
  sum(a,b){
    return a+b
  }
}
var formulaAnalysis = new FormulaAnalysis(fml)
```

  

## 三，使用

``` js
const ao = {
  a:10,
  b:5
}
var res = formulaAnalysis.analysis("sum(a,b)",ao)
// res = 15
```

