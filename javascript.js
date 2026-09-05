const moradores = [
    
    //* Código moradores ifood Bloco A *//

    {
        nome: "Leandro",
        apartamento: "011",
        bloco: "A",
        codigo: "3562"
    },
    {
        nome: "Marcelo",
        apartamento: "011",
        bloco: "A",
        codigo: "6532"
    },
    {
        nome: "Manoela",
        apartamento: "21",
        bloco: "A",
        codigo: "0045"
    },
    {
        nome: "larissa",
        apartamento: "61",
        bloco: "A",
        codigo: "9228"
    },
	    {
        nome: "Inês Isoldi",
        apartamento: "71",
        bloco: "A",
        codigo: "1852"
    },
	    {
        nome: "Margarida",
        apartamento: "71",
        bloco: "A",
        codigo: "2213"
    },
    {
        nome: "Cristiano Cecatto",
        apartamento: "81",
        bloco: "A",
        codigo: "2009"
    },
    {
        nome: "Luiz Eduardo",
        apartamento: "81",
        bloco: "A",
        codigo: "0603"
    },
    {
        nome: "Lais",
        apartamento: "81",
        bloco: "A",
        codigo: "5418"
    },
    {
        nome: "José",
        apartamento: "101",
        bloco: "A",
        codigo: "8491"
    },
    {
        nome: "Pedro Padilha",
        apartamento: "111",
        bloco: "A",
        codigo: "8390"
    },
    {
        nome: "Stephanie Padilha",
        apartamento: "111",
        bloco: "A",
        codigo: "8577"
    },
        {
        nome: "Maricy Padilha",
        apartamento: "111",
        bloco: "A",
        codigo: "5333"
    },
	    {
        nome: "Vitor",
        apartamento: "111",
        bloco: "A",
        codigo: "8627"
    },
	    {
        nome: "Jenifer",
        apartamento: "111",
        bloco: "A",
        codigo: "7369"
    },

    //* Código Moradores ifood bloco B *//
	    {
        nome: "Maria Li",
        apartamento: "02",
        bloco: "B",
        codigo: "9772" 
            
        
        },
	    {
        nome: "Erica Li",
        apartamento: "02",
        bloco: "B",
        codigo: "2615"
        },
		{
        nome: "Paulo Pastorelo",
        apartamento: "02",
        bloco: "B",
        codigo: ""
        },
	    {
        nome: "Oliver",
        apartamento: "12B",
        bloco: "B",
        codigo: "6364"
        },

		{
        nome: "Simone Poli",
        apartamento: "12B",
        bloco: "B",
        codigo: "1316"
        },
	    {
        nome: "Rodrigo Gil",
        apartamento: "12B",
        bloco: "B",
        codigo: "6284 // 1960 // 0892 //9961"
        },
	    {
        nome: "Leticia",
        apartamento: "12B",
        bloco: "B",
        codigo: "7510"
        },
        		    {
        nome: "João Marcelo",
        apartamento: "23",
        bloco: "B",
        codigo: "9391"
        },
				    {
        nome: "Melina",
        apartamento: "23",
        bloco: "B",
        codigo: "8889"
        },
					    {
        nome: "João Marcelo",
        apartamento: "23",
        bloco: "B",
        codigo: "Rappi 101"
        },
	
	
		{
        nome: "Gabriel Padilha",
        apartamento: "32",
        bloco: "B",
        codigo: "7097"
        },
					    {
        nome: "Felipe Padilha",
        apartamento: "32",
        bloco: "B",
        codigo: "8740"
        },
					    {
        nome: "Lucas Padilha",
        apartamento: "32",
        bloco: "B",
        codigo: "9033"
        },
					    {
        nome: "Monica",
        apartamento: "32",
        bloco: "B",
        codigo: "7455"
        },
	    {
        nome: "Marcelo Scaff",
        apartamento: "32",
        bloco: "B",
        codigo: "2423"
        },
			    {
        nome: "Leticia Rogik",
        apartamento: "32",
        bloco: "B",
        codigo: "7589"
        },
			    {
        nome: "Natalia",
        apartamento: "32",
        bloco: "B",
        codigo: "6653"
        },
			    {
        nome: "Kezia",
        apartamento: "53",
        bloco: "B",
        codigo: "6558"
        },
			    {
        nome: "Michela",
        apartamento: "53",
        bloco: "B",
        codigo: "8331 // 8150"
        },
			    {
        nome: "Ayako",
        apartamento: "63",
        bloco: "B",
        codigo: "2761"
        },
			    {
        nome: "Yokio",
        apartamento: "63",
        bloco: "B",
        codigo: "0667"
        },
			    {
        nome: "Ferando Costa",
        apartamento: "73",
        bloco: "B",
        codigo: "2360"
        },
			    {
        nome: "Paulo",
        apartamento: "73",
        bloco: "B",
        codigo: "1454"
        },
			    {
        nome: "Pedro Matsusaki",
        apartamento: "82",
        bloco: "B",
        codigo: "5261"
        },
			    {
        nome: "Adriana Gragnani",
        apartamento: "92",
        bloco: "B",
        codigo: "9317/1135/2273"
        },
			    {
        nome: "Fernanda damato",
        apartamento: "93",
        bloco: "B",
        codigo: "7604"
        },
			    {
        nome: "Luiza Ambrogi",
        apartamento: "93",
        bloco: "B",
        codigo: "5830"
        },
			    {
        nome: "Ingrid Ambrogi",
        apartamento: "93",
        bloco: "B",
        codigo: "8668"
        },

]

const campoBusca = document.getElementById("campoBusca");
const botaoBuscar = document.getElementById("botaoBuscar");
const botaoLimpar = document.getElementById("botaoLimpar");
const resultado = document.getElementById("resultado");
const mensagem = document.getElementById("mensagem");

function normalizarTexto(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
}

function buscarMoradores() {
    const textoBusca = normalizarTexto(campoBusca.value);

    resultado.innerHTML = "";
    mensagem.textContent = "";
    mensagem.className = "mensagem";

    if (textoBusca === "") {
        mensagem.textContent = "Digite um nome ou número de apartamento.";
        mensagem.classList.add("erro");
        return;
    }

    const moradoresEncontrados = moradores.filter((morador) => {
        const nome = normalizarTexto(morador.nome);
        const apartamento = normalizarTexto(morador.apartamento);
        const bloco = normalizarTexto(morador.bloco);

        return (
            nome.includes(textoBusca) ||
            apartamento.includes(textoBusca) ||
            bloco.includes(textoBusca)
        );
    });

    if (moradoresEncontrados.length === 0) {
        mensagem.textContent = "Nenhum morador encontrado.";
        mensagem.classList.add("erro");
        return;
    }

    mensagem.textContent = `${moradoresEncontrados.length} resultado(s) encontrado(s).`;
    mensagem.classList.add("info");

    moradoresEncontrados.forEach((morador) => {
        const card = document.createElement("div");
        card.className = "card-morador";

        card.innerHTML = `
            <h2>${morador.nome}</h2>

            <p class="informacao">
                <strong>Apartamento:</strong> ${morador.apartamento}
            </p>

            <p class="informacao">
                <strong>Bloco:</strong> ${morador.bloco}
            </p>

            <div class="codigo">
                <span>${morador.codigo}</span>
                <button class="botao-copiar">
                    Copiar código
                </button>
            </div>
        `;

        const botaoCopiar = card.querySelector(".botao-copiar");

        botaoCopiar.addEventListener("click", () => {
            copiarCodigo(morador.codigo, botaoCopiar);
        });

        resultado.appendChild(card);
    });
}

function copiarCodigo(codigo, botao) {
    navigator.clipboard.writeText(codigo)
        .then(() => {
            const textoOriginal = botao.textContent;

            botao.textContent = "Copiado!";
            botao.style.background = "#15803d";

            setTimeout(() => {
                botao.textContent = textoOriginal;
                botao.style.background = "";
            }, 1500);
        })
        .catch(() => {
            alert("Não foi possível copiar o código.");
        });
}

function limparBusca() {
    campoBusca.value = "";
    resultado.innerHTML = "";
    mensagem.textContent = "";
    mensagem.className = "mensagem";
    campoBusca.focus();
}

botaoBuscar.addEventListener("click", buscarMoradores);
botaoLimpar.addEventListener("click", limparBusca);

campoBusca.addEventListener("keydown", (evento) => {
    if (evento.key === "Enter") {
        buscarMoradores();
    }
});
