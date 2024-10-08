import mongoose from "mongoose";
const Schema = mongoose.Schema;

const coachSchema = new Schema(
    {
        regNo: String,
        playerName: String,
        fatherName: String,
        motherName: String,
        academyName: String,
        dob: String,
        gender: String,
        district: String,
        mob: String,
        email: String,
        adharNumber: String,
        address: String,
        pin: String,
        panNumber: String,
        photo: String,
        blackBeltCertificate: String,
        birthCertificate: String,
        residentCertificate: String,
        adharFrontPhoto: String,
        adharBackPhoto: String,
        status: {
            enum: ["pending", "approved", "rejected"],
            type: String,
            default: "pending",
        },
        payment: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Coach", coachSchema);
