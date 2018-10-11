var html = `<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>ThirtiethQuestion</title>
  </head>
  <body>
    <script src="script.js" charset="utf-8"></script>
  </body>
</html>`;

// console.log(html.replace(/<body>.*<\/body>/mg, ""));

var regExp = /<([_a-z][a-zá-úñ0-9]*)( [a-z="'\/]+)*>.*<\/\1>/img;
var match = regExp.exec(html);
var tag = `Etiquetas encontradas: `;
var str = `Etiquetas y contenido: \n`;

while (match) {
  tag+= `${match[1]}, `;
  str+= `${match[0]}\n`;
  match = regExp.exec(html);
}

console.log(`${str}\n\n${tag}`);
