import Mongoose from 'mongoose';

const pinSchema = new Mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
            min: 3,
        },
        desc: {
            type: String,
            required: true,
            min: 3,
        },
        rating: {
            type: Number,
            required: true,
            min: 0,
            max: 5,
        },
        lat: {
            type: Number,
            required: true,
        },
        long: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true },
);

const Pin = Mongoose.model('Pin', pinSchema);

export async function getAll() {
    return Pin.find();
}

export async function getAllByUsername(username) {}

export async function create(data) {
    return new Pin(data).save();
}
