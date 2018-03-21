const heroes = [
    { heroId: 1, shinraCode: 101, name: 'Cloud' }
    , { heroId: 2, shinraCode: 202, name: 'Sephiroth' }
];

const exams = [
    { examId: 1, shinraCode: 101, score: 50 }
    , { examId: 2, shinraCode: 202, score: 97 }
    , { examId: 3, shinraCode: 101, score: 75 }
    , { examId: 4, shinraCode: 202, score: 99 }
];

const getHero = (heroId) => {
    return new Promise((resolve, reject) => {
        const hero = heroes.find((p) => p.heroId === heroId);
        if (hero) {
            resolve(hero);
        } else {
            reject(`Not found hero with id of ${heroId}.`);
        }
    });
};

const getSoldierExamList = (shinraCode) => {
    return new Promise((resolve, reject) => {
        resolve(exams.filter((f) => f.shinraCode === shinraCode));
    });
};

const getHeroExamScore = (heroId) => {
    let heroObj;
    return getHero(heroId)
        .then((hero) => {
            heroObj = hero;
            return getSoldierExamList(heroObj.shinraCode);
        }).then((examAry) => {
            let avg = calcAvg(examAry);
            // Topic: 如果沒有另外設定 function scope 的 heroObj 變數，這裡無法取得hero
            return `${heroObj.name}'s exam average score: ${avg} points.`;
        });
};

const calcAvg = (examAry) => {
    let sum = 0, avg = 0;
    if (examAry.length > 0) {
        sum = examAry.map((f) => f.score).reduce((pre, cur) => pre + cur);
        avg = sum / examAry.length;
    }
    return avg;
}


getHero(2).then((hero) => {
    console.log(hero);
}).catch((e) => {
    console.log(e);
});

getSoldierExamList(101).then((examAry) => {
    console.log(examAry);
}).catch((e) => {
    console.log(e);
});

getHeroExamScore(1).then((msg) => {
    console.log(msg);
}).catch((e) => {
    console.log(e);
});

getHeroExamScore(3).then((msg) => {
    console.log(msg);
}).catch((e) => {
    console.log(e);
});
