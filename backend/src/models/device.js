// các thiết bị sử dụng điện trong 1 phòng (đèn, quạt, điều hòa, tivi, ...)
import mongoose from "mongoose";
const deviceSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        type: { type: String, required: true, trim: true },
        roomId: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
        status: { type: String, enum: [ 'on', 'off'], default: 'off' },
    },
    { timestamps: true }
);
export const Device = mongoose.model('Device', deviceSchema);
