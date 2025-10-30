import mongoose, {Schema} from "mongoose"

const subscriptionSchema = new Schema({
    subscriber:{
        type: Schema.Types.ObjectId,    // Subscriber: Represents the user who subscribes to a channel.
        ref: "User"
    },
    channel:{
        type: Schema.Types.ObjectId,    // Channel: Represents the user who owns the channel (the one being subscribed to).
        ref:"User"
    },
},{timestamps:true})

export const Subscription = mongoose.model("Subscription", subscriptionSchema)