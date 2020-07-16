/*
 * @Name: ko-engine
 * @Author: Max Base
 * @Repository: https://github.com/basemax/ko-engine
 * @Date: 2020-07-16
 */
var KoEngine = function(input, options, target) {
    var re = /<\?(.+?)\?>/g; // /\<\?([^\?\>]+)?\?\>/g;
    var commands = /(^( )?(if|else|switch|case|default|break|for|{|}))(.*)?/g;
    var code = 'var code=[];\n';
    var push = function(line, isJS) {
        if(isJS) {
            if(line.match(commands)) { //is javascript command...
                code+=line + '\n'; // TODO: automatic append `(`,`)` and `{`,`}` for `if`` and other commands!
            }
            else {
                code+='code.push(' + line + ');\n';
            }
        }
        else {
            if(line != '') {
                code+='code.push("' + line.replace(/"/g, '\"') + '");\n'
            }
        }
        return push;
    }
    var match;
    var index = 0;
    while(match = re.exec(input)) {
        push(input.slice(index, match.index))(match[1], true);
        index = match.index + match[0].length;
    }
    push(input.substr(index, input.length - index));
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
