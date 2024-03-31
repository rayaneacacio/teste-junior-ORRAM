Teste prático para Frontend Javascript Developer

Analisador de variações entre moedas
<br>
deploy: https://testeorram.netlify.app

Como rodar o projeto:
```bash
# Clone esse repositório
$ git clone https://github.com/rayaneacacio/teste-junior-ORRAM.git

# Execute o seguinte comando:
$ npm run dev
```

---
<p>
  1.Descreva a diferença entre um cookie, sessionStorage e localStorage.
  <br>
  São formas de armazenar informações. O sessionStorage é o armazenamento durante a sessão, entao as informações são armazenadas 
  apenas enquanto o site estiver aberto e o localStorage é o armazenamento local do navegador, então os dados irão persistir, serão 
  mantidos mesmo se o usuário sair e entrar na página novamente. Os cookies funcionam como o localStorage, mas tem menor capacidade 
  de armazenamento e neles é possível definir tempo de expiracão.
</p>

<p>
  2.Como você otimizaria os ativos/recursos de um site?
  <br>
</p>

<p>
  3.Qual é a diferença entre canvas e svg?
  <br>
  as imagens svg podem ser responsivas.
</p>

<p>
  4.O que * { box-sizing: border-box; } faz? Quais são suas vantagens?
  <br>
  o box-sizing: border-box respeita o tamanho de uma div. Se uma div estiver com box-sizing: content-box, width:150px e padding-left: 50px,
  a width final será 200px, mas se mudar para box-sizing: border-box, a width continuará com 150px. É importante para não ter alterações 
  indesejadas no site. E * { box-sizing: border-box; } adiciona o border-box em todos os elementos.
</p>

<p>
  5.Qual é a diferença entre inline e inline-block?
  <br>
  inline-blcok permite aplicar propriedades de elemento de bloco em um elemento de linha.
</p>

<p>
  6.O que é uma interface no TypeScript?
  <br>
  um recurso para tipar todas as propriedades de um objeto.
</p>

<p>
  7.Você pode descrever a principal diferença entre o loop Array.forEach() e os métodos Array.map() e por que você escolheria um em vez do outro?
  <br>
  o método map() retorna um novo array e o forEach não retorna nada. Eu escolheria o forEach para fazer uma ação em cada elemento de um array 
  e o map para quando ser necessário percorrer um array para criar outro.
  <br>
  array.forEach((a) => function);
  <br>
  const newArray = array.map(a => { return a.b });
</p>

<p>
  8.Explique Function.prototype.bind.
  <br>
</p>

<p>
  9.Qual é a diferença entre == e ===?
  <br>
  == compara o valor e === compara tipo e valor.
  <br>
  1 == "1" true;
  <br>
  1 === "1" false;
</p>

<p>  
  10.Quais são as diferenças entre as variáveis criadas usando let, var ou const?
  <br>
  const cria uma variável constante, entao o seu valor nao pode ser alterado. Let e var criam uma variável que pode ser alterada posteriormente, 
  mas let tem escopo de bloco e var tem escopo global.
</p>
