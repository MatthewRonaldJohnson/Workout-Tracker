const router = require('express').Router();
const db = require('../../models')

//get all workouts and return them
router.get('/workouts', async (req, res) => {
    const request = await db.Workout.find({});
    res.json(request);
});

//find workout by id, add exercise in req.body to exercises array
router.put('/workouts/:id', async (req, res) => {
    const request = await db.Workout.findByIdAndUpdate
        (
            req.params.id,
            { $push: { exercises: req.body } },
            { ew: true }
        );
    res.json(request);
});

//add a workout to the db
router.post('/workouts', async (req, res) => {
    const request = await db.Workout.create(req.body);
    res.json(request);
});

//get all workouts for last 7 days and return them
router.get('/workouts/range', async (req, res) => {
    const request = await db.Workout.find({}).limit(7);
    res.json(request);
})

module.exports = router;