import * as babel from "@babel/core";

const fn = () => 2;
// es5
const str1 = `eval("console.log(123)")`;
setTimeout(()=>{
    eval(str1)
}, 1000 * 1);

// es6 -> es5
const str2 = `(()=> console.log(456))()`;
setTimeout(()=>{
    babel.transform(str2,
    {
        presets: [require("@babel/preset-env")],
        plugins: [require('@babel/plugin-transform-runtime')]
    }, function(err, result) {
        console.log(result.code.toString());
        eval(result.code);
    });

}, 1000 * 1.5);