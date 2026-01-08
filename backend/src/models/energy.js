// năng lượng điện tiêu thụ của các thiết bị
import mongoose from 'mongoose';
const energySchema = new mongoose.Schema(
    {
        deviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Device', required: true },
        timestamp: { type: Date, required: true },
        voltage: Number,   // V
        current: Number,   // A
        power: Number,     // W
        energy: Number     // kWh (tích lũy)
    },
    { timestamps: true }
)
export const Energy = mongoose.model('Energy', energySchema);