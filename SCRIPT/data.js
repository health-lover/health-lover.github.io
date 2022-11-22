var defaultThreads = [
    {
        id: 1,
        title: "Dúvidas",
        author: "Ana",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "O que é bulimia?"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "Transtorno alimentar grave marcado por compulsão, seguido de métodos para evitar o ganho de peso."
            }
        ]
    },
    {
        id: 2,
        title: "Sugestões",
        author: "Ana",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Júlia",
                date: Date.now(),
                content: "Vcs deveriam colocar mais tópicos."
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "Vamos dar uma olhada"
            }
        ]
    },
    {
        id: 3,
        title: "Opiniões",
        author: "Ana",
        date: Date.now(),
        content: "Thread content 3",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "Ainda tem gente que pensa que isso é besteira"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "Verdade"
            }
        ]
    },
    {
        id: 4,
        title: "Geral",
        author: "Ana",
        date: Date.now(),
        content: "Thread content 4",
        comments: [
            {
                author: "Luisa",
                date: Date.now(),
                content: "Eai galera!"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "Eai! blz?"
            }
        ]
    }
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}
