// công ty 
import mongoose from 'mongoose';
const companySchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim : true },
        address: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        phone: { type: String, required: true  },
        website: { type: String, required: false  },
    },

    { timestamps: true }
);
export const Company = mongoose.model('Company', companySchema);