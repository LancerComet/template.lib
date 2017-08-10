module.exports = {
  // 强制要求 Class 的名称为帕斯卡命名.
  'class-name': true,

  // 强制要求以下类型必须加入 JSDoc:
  'completed-docs': [
    true,
    'classes', 'functions', 'enums', 'interfaces', 'namespaces'
  ],

  // 强制要求循环 / 逻辑语句使用代码块.
  "curly": true,

  // 强制要求以 /** */ 作为格式的注释使用 JSDoc 格式编写.
  'jsdoc-format': true,

  // 强制 import 声明使用空格.
  'import-spacing': true,

  // 强制要求 interface 名称以 I 开头.
  'interface-name': [true, 'always-prefix'],

  // 强制要求构造函数使用括号.
  'new-parens': true,

  // return 前强制空行.
  'newline-before-return': false,

  // 禁止使用 callee.
  'no-arg': true,

  // 禁止多余空行.
  'no-consecutive-blank-lines': true,

  // 生产环境禁用 debugger.
  'no-debugger': process.env.NODE_ENV === 'production',

  // 禁止 Class 中使用多个 super.
  'no-duplicate-super': true,

  // 禁止快级作用域中重复声明变量.
  'no-duplicate-variable': [true, 'check-parameters'],

  // 禁用空函数块.
  'no-empty': true,

  // 禁用定义空白 interface.
  'no-empty-interface': true,

  // 所有 Promise 必须处理.
  'no-floating-promises': true,

  // 禁止不规则空格.
  'no-irregular-whitespace': true,

  // 禁止结尾空格.
  'no-trailing-whitespace': true,

  // 禁止 undefined 声明.
  'no-unnecessary-initializer': true,

  // 禁止未使用函数.
  'no-unused-expression': false,

  // 禁止未使用变量.
  'no-unused-variable': true,

  // 禁止数字类型使用 . 开头与 0 结尾.
  'number-literal-format': true,

  // 禁止同一表达式中同时声明多个变量.
  'one-variable-per-declaration': [true, 'ignore-for-loop'],

  // 使用单引号.
  'quotemark': [true, 'single', 'avoid-escape'],

  // 禁止不必要分号.
  'semicolon': [true, 'never'],

  // 函数名与括号之间必须加入空格.
  'space-before-function-paren': [true, 'always'],

  // 禁止表达式结尾逗号.
  'trailing-comma': [true, 'never'],

  // 启用严格类型检查.
  'triple-equals': true,

  // 确保 typeof 运算符对比类型正确性.
  'typeof-compare': true,

  // 变量命名检查.
  // 变量仅允许 lowerCamelCased 与 UPPER_CASED 两种方式.
  'variable-name': [
    false,
    'ban-keywords', 'check-format'
  ]
}
