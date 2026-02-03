const questions = [
    {
        question: "日本の道路で、青い円の中に白い矢印の標識は、何を意味しますか？",
        options: ["直進のみ", "右折禁止", "駐車禁止"],
        answer: 0,
        explanation: "これは進行方向を指定する標識で、直進のみを許可します。中国語話者は似た標識と混同しやすいです。"
    },
    {
        question: "交差点で優先道路を示す標識がない場合、幅の広い道路が優先されますか？",
        options: ["正しい", "誤り"],
        answer: 0,
        explanation: "優先道路の標識がない場合、道路の幅で優先を判断します。広い道路が優先です。"
    },
    {
        question: "駐車と停車の違いは何ですか？",
        options: ["駐車は5分以上、停車は5分未満", "駐車は乗員が離れる場合、停車は乗員がいる場合", "駐車はエンジンを止める、停車はエンジンをかける"],
        answer: 1,
        explanation: "駐車は運転手が車両から離れるか荷物の積み下ろしが終わってもすぐに発進しない場合で、停車はそれ以外です。"
    },
    {
        question: "一般道路の法定最高速度は時速何キロですか？",
        options: ["40km/h", "50km/h", "60km/h"],
        answer: 2,
        explanation: "標識がない一般道路では時速60km/hが上限ですが、住宅街では低くなることがあります。"
    },
    {
        question: "歩行者が横断歩道を渡ろうとしている時、車は止まらなければなりませんか？",
        options: ["正しい", "誤り"],
        answer: 0,
        explanation: "歩行者の優先が厳格で、横断歩道では必ず一時停止して安全を確認します。"
    },
    {
        question: "霧の時にヘッドライトを使うのは正しいですか？",
        options: ["正しい", "誤り"],
        answer: 0,
        explanation: "視界不良時は前照灯を点灯し、速度を落として運転します。中国のルールと似ていますが、日本はより慎重です。"
    },
    {
        question: "高速道路で最低速度制限があるのはどれですか？",
        options: ["時速30km/h", "時速50km/h", "時速80km/h"],
        answer: 1,
        explanation: "高速道路では最低時速50km/hを守り、遅い車は左車線を使います。"
    },
    {
        question: "踏切で一時停止しなければならないのは本当ですか？",
        options: ["正しい", "誤り"],
        answer: 0,
        explanation: "踏切では必ず一時停止し、安全を確認してから渡ります。警報機がなくてもです。"
    },
    {
        question: "トンネル内で追い越しは禁止されますか？",
        options: ["正しい", "誤り"],
        answer: 0,
        explanation: "トンネル内は視界が悪く危険なので、追い越しは禁止されています。"
    },
    {
        question: "狭い道路で対向車が来た時、どちらが優先ですか？",
        options: ["左側通行の車", "右側通行の車", "大きい車"],
        answer: 0,
        explanation: "日本は左側通行なので、狭い道では状況に応じて譲り合いますが、基本は安全第一です。"
    },
    {
        question: "自転車は歩道を走行できますか？",
        options: ["常に可能", "子供や高齢者のみ", "車道が危険な場合のみ"],
        answer: 2,
        explanation: "自転車は車道が原則ですが、危険時は歩道可。ただし歩行者優先です。"
    },
    {
        question: "雨の日に速度を落とすのはなぜですか？",
        options: ["滑りやすいから", "視界が良いから", "制限速度が変わるから"],
        answer: 0,
        explanation: "悪天候時は路面が滑りやすく、制動距離が長くなるので速度を落とします。"
    },
    {
        question: "交差点で黄色の点滅信号は止まる必要がありますか？",
        options: ["止まる", "注意して進む", "無視して進む"],
        answer: 1,
        explanation: "黄色点滅は注意信号で、周囲を確認して安全に進みます。"
    },
    {
        question: "高速道路の入口で加速車線を使う目的は？",
        options: ["本線に合流するため", "休憩するため", "Uターンするため"],
        answer: 0,
        explanation: "加速車線で速度を上げ、本線の流れにスムーズに合流します。"
    },
    {
        question: "標識の赤い斜線は禁止を意味しますか？",
        options: ["正しい", "誤り"],
        answer: 0,
        explanation: "赤い斜線が入った標識は、その行為の禁止を示します。例えば進入禁止。"
    }
];

let currentQuestions = [];
let currentIndex = 0;
let score = 0;

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const feedbackEl = document.getElementById('feedback');
const resultEl = document.getElementById('result');
const correctAnswerEl = document.getElementById('correct-answer');
const explanationEl = document.getElementById('explanation');
const scoreEl = document.getElementById('score');
const percentageEl = document.getElementById('percentage');

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startQuiz() {
    currentQuestions = shuffle([...questions]);
    currentIndex = 0;
    score = 0;
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    feedbackEl.classList.add('hidden');
    const q = currentQuestions[currentIndex];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = '';
    q.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.textContent = option;
        btn.classList.add('option-btn');
        btn.onclick = () => selectAnswer(index);
        optionsEl.appendChild(btn);
    });
}

function selectAnswer(selected) {
    const q = currentQuestions[currentIndex];
    const isCorrect = selected === q.answer;
    if (isCorrect) {
        score++;
        resultEl.textContent = '正解！';
        resultEl.classList.add('correct');
    } else {
        resultEl.textContent = '不正解';
        resultEl.classList.add('incorrect');
    }
    correctAnswerEl.textContent = `正しい答え: ${q.options[q.answer]}`;
    explanationEl.textContent = q.explanation;
    feedbackEl.classList.remove('hidden');
    const optionBtns = optionsEl.querySelectorAll('button');
    optionBtns.forEach(btn => btn.disabled = true);
}

function nextQuestion() {
    currentIndex++;
    if (currentIndex < currentQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    scoreEl.textContent = `正解数: ${score} / ${questions.length}`;
    const percent = Math.round((score / questions.length) * 100);
    percentageEl.textContent = `正答率: ${percent}%`;
}

function restartQuiz() {
    resultScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
}

startBtn.onclick = startQuiz;
nextBtn.onclick = nextQuestion;
restartBtn.onclick = restartQuiz;
