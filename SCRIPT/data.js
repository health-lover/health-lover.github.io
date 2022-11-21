var defaultThreads = [
    {
        id: 1,
        title: "Thread 1",
        author: "Ana",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "Oi"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "Oie"
            }
        ]
    },
    {
        id: 2,
        title: "Thread 2",
        author: "Ana",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "Tudo bem?"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "Eai! Tudo e vc?"
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