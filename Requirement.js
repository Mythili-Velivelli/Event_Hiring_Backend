import mongoose from "mongoose"
const requirementSchema = mongoose.Schema(
    {
        eventName: String,
        eventType: String,
        date: String,
        location: String,

        hireType: {
            type: String,
            enum: ["Planner", "Performer", "Crew"],
            required: true
        },

        guestCount: String,
        plannerType: String,
        plannerHelp: String,
        plannerPay: Number,

        performerType: String,
        performanceDuration: Number,
        performerPay: Number,

        crewServiceType: String,
        serviceDuration: Number,
        crewPay: Number
    },
    { timestamps: true }
)
export default mongoose.model("Requirement", requirementSchema)