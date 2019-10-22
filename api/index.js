import express from 'express';
import data from '../src/data/testData';

const router = express.Router();
const contests = data.contests.reduce((obj, contest) => {
    obj[contest.id] = contest;
    return obj;
}, {});

router.get('/contests', (req, res) => {
    res.send({
      contests: contests
    });
});

router.get('/contests/:contestId', (req, res) => {
    let contest = contests[req.params.contestId];
    contest.description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eum doloribus voluptates alias aspernatur, et voluptate nesciunt quis excepturi, aut rem atque. Nesciunt est, voluptate facilis molestias iste consequuntur consequatur?'

    res.send({ contest });
});

export default router;