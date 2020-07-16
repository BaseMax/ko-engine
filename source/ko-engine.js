/*
 * @Name: ko-engine
 * @Author: Max Base
 * @Repository: https://github.com/basemax/ko-engine
 * @Date: 2020-07-16
 */
 var KoEngine = function(input, options, target) {
    var re = /\{([^\}]+)?\}/g;
    var code = 'var code=[];\n';
    var push = function(line, js) {
        js? (code += 'code.push(' + line + ');\n')
        :
        (code += line != '' ? 'code.push("' + line.replace(/"/g, '\"') + '");\n' : '');
        return push;
    }
    var match;
    var cursor = 0;
    while(match = re.exec(input)) {
        push(input.slice(cursor, match.index))(match[1], true);
        cursor = match.index + match[0].length;
    }
    push(input.substr(cursor, input.length - cursor));
    code += 'return code.join("");';
    code=code.replace(/[\r\t\n]/g, '');
    // Create function and execute javascript code at $code variable...
    var fn, data;
    if(options && typeof(options)==="object") {
        fn=new Function(...Object.keys(options),code);
        data=fn(...Object.values(options));
    }
    else {
        fn=new Function(code);
        data=fn();
        target=options;
    }
    if(target===undefined || !target) {
        return data;
    }
    var elm=document.querySelector(target);
    if(elm) {
        elm.innerHTML=data;
        return true;
    }
    return false;
}
