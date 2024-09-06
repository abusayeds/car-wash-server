import { model, Schema } from "mongoose";
import { TReview } from "./review-interface";

const reviewSchema = new Schema <TReview>(
    {
        description : {
            type : String,
            required : true
        },
        name : {
            type :String,
            required : true
        },
        email : {
            type :String,
            required : true
        },
        rating : {
            type : Number,
            required : true
        }
    },
    {
        timestamps : true
    }
)
export const reviewModel = model<TReview>("review", reviewSchema);