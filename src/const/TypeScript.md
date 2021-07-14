###### CSS样式补充：

- 去除拖动图片时，出现黑色的方框

    ```
    img {
      -webkit-user-drag: none;
    }
    ```

- 字体抗锯齿渲染

    ```
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    ```

- 解决因多次点击，字体或者图片背景变色的问题

    ```
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    ```

    1、hasOwnProperty()方法：
    
    ​		该方法用来检测一个属性是否是对象的自有属性，而不是从原型链继承的。如果该属性是自有属性，那么返回 true，否则返回 false。换句话说，hasOwnProperty() 方法不会检测对象的原型链，只会检测当前对象本身，只有当前对象本身存在该属性时才返回 true。
    
    ​		语法格式如下：object.hasOwnProperty(propertyName);

###### TypeScript的系统类型

- 静态类型

    - TypeScript 是静态类型，指：在编译阶段进行类型检查，就能确定每个变量的类型，代码在编译阶段就会报错。
    - JavaScript是一门解释型语言，没有编译阶段，所以它是动态类型，代码在运行时才会报错。

- 弱类型

    - 类型系统按照 “是否允许隐式类型转换” 来分类，可以分为强类型和弱类型。

        ```
        例子：console.log(1 + '1'); // 打印出字符串 '11'
        不管是在 JavaScript 中还是在 TypeScript 中都是可以正常运行的，运行时数字 1 会被隐式类型转换为字符串 '1'，加号 + 被识别为字符串拼接
        ```

    - TypeScript 是完全兼容 JavaScript 的，它不会修改 JavaScript 运行时的特性，所以弱类型语言。

###### TypeScript入门

- TypeScript只会在编译时对类型进行静态检查，如果发现有错误，编译的时候就会报错，而在运行时与普通的JavaScript文件一样，不会对类型进行检查。如果我们需要保证运行时的参数类型，还是得手动对类型进行判断。
- 在TypeScript中，使用 : 指定变量的类型， : 前后有没有空格都可以，例如：person : string

###### 数据类型在TypeScript中的使用

- 对象类型数据
- 原始数据类型数据：
    - Boolean：
    - Number
    - String
    - null
    - undefined
    - Symbol (ES6)
    - BigInt (ES10)

