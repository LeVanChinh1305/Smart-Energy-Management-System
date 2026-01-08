// các phòng trong 1 công ty
import mongoose from 'mongoose';
const roomSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim : true },
        truong_phong : { type: String, required: true  },
        dien_tich : { type: Number, required: true  },
        code: { type: String, required: true, uppercase: true },
        companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
    },
    { timestamps: true }
)
export const Room = mongoose.model('Room', roomSchema);