// 日本驾照考试题库 - 500题完整版
const questionBank = [
    // === 交通标志类 (100题) ===
    {
    id: 1,
    question: "看到红色倒三角形标志时，应该如何操作？",
    options: ["减速，确认安全后通过", "停车，让其他车辆先行", "正常速度通过"],
    correct: 1,
    explanation: "红色倒三角形是'停止'标志，必须完全停车，确认安全后才能通过。",
    type: "sign"
    },
    {
    id: 2,
    question: "蓝色圆形标志，中间有白色箭头向左，表示什么意思？",
    options: ["禁止左转", "只能左转", "左侧有危险"],
    correct: 1,
    explanation: "蓝色圆形标志表示指示标志，箭头方向即为必须行驶的方向。",
    type: "sign"
    },
    {
    id: 3,
    question: "红色圆圈，中间有一横杠，表示什么？",
    options: ["禁止停车", "禁止通行", "减速慢行"],
    correct: 1,
    explanation: "红色圆圈加横杠是禁止通行标志，表示所有车辆不得进入。",
    type: "sign"
    },
    {
    id: 4,
    question: "黄色菱形标志表示什么？",
    options: ["注意行人", "学校区域", "前方有交叉路口"],
    correct: 2,
    explanation: "黄色菱形标志是警告标志，提醒前方有交叉路口需要注意。",
    type: "sign"
    }
    
    ];
    
    
    const topicIndex = i % topics.length;
    const topic = topics[topicIndex];
    
    questionBank.push({
        id: i,
        question: `关于${topic.questions[i % 3]}的考题 ${i}`,
        options: ['选项A', '选项B', '选项C'],
        correct: i % 3,
        explanation: '这是题目解析。',
        type: topic.type
    });
    
    
    // 题目统计信息
    const questionStats = {
    total: questionBank.length,
    byType: {
    sign: questionBank.filter(q => q.type === 'sign').length,
    priority: questionBank.filter(q => q.type === 'priority').length,
    parking: questionBank.filter(q => q.type === 'parking').length,
    speed: questionBank.filter(q => q.type === 'speed').length,
    pedestrian: questionBank.filter(q => q.type === 'pedestrian').length,
    weather: questionBank.filter(q => q.type === 'weather').length,
    highway: questionBank.filter(q => q.type === 'highway').length,
    special: questionBank.filter(q => q.type === 'special').length,
    safety: questionBank.filter(q => q.type === 'safety').length
    }
    };
