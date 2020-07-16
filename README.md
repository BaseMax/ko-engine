# ko-engine

JavaScript template engine in just 50 LOC with supporting **replacing variable**, and **javascript** commands such as: `if` and `else`.

## Using

```html
<script type="text/javascript" src="ko-engine.js"></script>
```

## Example

```
KoEngine("Hello, I'm <?name?> and It's my GitHub profile: <?github?>.", {
    name: "Max",
    github: "<a href='https://github.com/basemax'>@BaseMax</a>"
}, '#app');

// #test1
KoEngine("Hello, It's a plain text!", '#test1');

// #test2
var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        KoEngine(this.responseText, '#test2');
    }
};
request.open("GET", "https://api.ipify.org/", true);
request.send();

// #test3
console.log( KoEngine("Hello, It's a plain text!") );

// #test4
console.log( KoEngine("Hello, I'm <?name?> and It's my GitHub profile: <?github?>.", {
    name: "Max",
    github: "<a href='https://github.com/basemax'>@BaseMax</a>"
}) );

// #test5
KoEngine("<?if(2>5){?> It's a plain text!<?} else{?>Ha ha<?}?>", '#test5');
KoEngine("<?if(5>2){?> It's a plain text!<?}?>", '#test6');
```

---------

# Max Base

My nickname is Max, Programming language developer, Full-stack programmer. I love computer scientists, researchers, and compilers. ([Max Base](https://maxbase.org/))

## Asrez Team

A team includes some programmer, developer, designer, researcher(s) especially Max Base.

[Asrez Team](https://www.asrez.com/)

