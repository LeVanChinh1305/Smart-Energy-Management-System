// các thiết bị đo giá trị khác biệt (nhiệt độ, độ ẩm, ánh sáng, ...)
import mongoose from 'mongoose';
const differentValueSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim : true },
        value: { type: Number, required: true  },
        timestamp: { type: Date, default: Date.now },
        roomId: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
        status: { type: String, enum: [ 'on', 'off',], default: 'off'},
    },
    { timestamps: true }
)
export const Different_Value = mongoose.model('Different_Value', differentValueSchema);
