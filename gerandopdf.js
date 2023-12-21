function gerar(){

    const nomes = document.querySelector("#nomes")
    const pedidos = document.querySelector("#pedidos")

    const janela = window.open('', '', 'height = 1200, width=1200')

    janela.document.write(`
    <html>
    <head>
        <title>Minha Nova Janela</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f0f0f0;
                margin: 20px;
            }
            h1 {
                color: blue;
            }
        </style>
    </head>
    <body>
        <h1>Conteúdo da Nova Janela</h1>
        <p>Este é um parágrafo na nova janela.</p>
    </body>
    </html>
`)

janela.document.write(`
`)

    janela.print()
}