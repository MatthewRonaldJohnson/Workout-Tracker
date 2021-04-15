const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now
        },
        exercises: [
            {
                type: {
                    type: String,
                    required: "You must provide a type",
                },
                name: {
                    type: String,
                    required: "You must provide a name",
                },
                duration: {
                    type: Number,
                    required: "You must provide a duration",
                },
                weight: Number,
                reps: Number,
                sets: Number,
                distance: Number,
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
)

WorkoutSchema.virtual('totalDuration').get(function(){
    return this.exercises.reduce(((total, {duration}) => total + duration),0)
})

const Workout = mongoose.model("Workout", WorkoutSchema)

module.exports = Workout;