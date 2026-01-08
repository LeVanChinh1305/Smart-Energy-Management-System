// chức vụ các thành viên trong phòng
import mongoose from 'mongoose';
const room_userSchema = new mongoose.Schema(
    {
        roomId: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        roleInRoom: { type: String, enum: ['member', 'manager'], default: 'member' },
    },
    { timestamps: true }
)
export const Room_User = mongoose.model('Room_User', room_userSchema);