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

const getHero = async (heroId) => {
    const hero = heroes.find((p) => p.heroId === heroId);
    if (hero) {
        return hero;
    } else {
        throw `Not found hero with id of ${heroId}.`;
    }
};

const getSoldierExamList = async (shinraCode) => {
    return exams.filter((f) => f.shinraCode === shinraCode);
};

const getHeroExamScore = async (heroId) => {
    let heroObj = await getHero(heroId);
    let examAry = await getSoldierExamList(heroObj.shinraCode);
    let avg = calcAvg(examAry);
    return `${heroObj.name}'s exam average score: ${avg} points.`;
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
