import * as pinRepository from '../data/pin.js';

export async function getPins(req, res) {
    const username = req.query.username;
    const data = await (username
        ? pinRepository.getAllByUsername(username)
        : pinRepository.getAll());
    res.status(200).json(data);
}

export async function createPin(req, res) {
    const pin = await pinRepository.create(req.body);
    res.status(201).json(pin);
}
