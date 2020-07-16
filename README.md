# ko-engine

JavaScript template engine in just 50 LOC with supporting **replacing variable**, and **javascript** commands such as: `if` and `else`.

— Richard Feynman: What I cannot create, I do not understand. 

## Using

From GitHub pages server:

```html
<script type="text/javascript" src="https://basemax.github.io/ko-engine/source/ko-engine.js"></script>
```

Or from local files: (You will need download `ko-engine.js` file)

```html
<script type="text/javascript" src="ko-engine.js"></script>
```

## Structure of KoEngine

```js
var KoEngine = function(input, options, target) { ... }
```

## Example

Demo at: https://basemax.github.io/ko-engine/example.html

```
// #app
KoEngine("Hello, I'm <?name?> and It's my GitHub profile: <?github?>.", {
    name: "Max",
    github: "<a href='https://github.com/basemax'>@BaseMax</a>"
}, '#app');
```

```
// #test1
KoEngine("Hello, It's a plain text!", '#test1');
```

```
// #test2
var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        KoEngine(this.responseText, '#test2');
    }
};
request.open("GET", "https://api.ipify.org/", true);
request.send();
```

```
// test3
console.log( KoEngine("Hello, It's a plain text!") );
```

```
// test4
console.log( KoEngine("Hello, I'm <?name?> and It's my GitHub profile: <?github?>.", {
    name: "Max",
    github: "<a href='https://github.com/basemax'>@BaseMax</a>"
}) );
```

```
// #test5
KoEngine("<?if(2>5){?> It's a plain text!<?} else{?>Ha ha<?}?>", '#test5');
```

```
// #test6
KoEngine("<?if(5>2){?> It's a plain text!<?}?>", '#test6');
```

---------

# Max Base

My nickname is Max, Programming language developer, Full-stack programmer. I love computer scientists, researchers, and compilers. ([Max Base](https://maxbase.org/))

## Asrez Team

A team includes some programmer, developer, designer, researcher(s) especially Max Base.

[Asrez Team](https://www.asrez.com/)

