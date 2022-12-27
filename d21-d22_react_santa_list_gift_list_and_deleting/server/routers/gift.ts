import { Router } from "express";
import { GiftRecord } from "../records/gift.record";
import { ValidationError } from "../utils/error";
export const giftRouter = Router();
// const { v4 } = require("uuid");

giftRouter
    .get('/', async (req, res) => {
        const giftList = await GiftRecord.listAll();
        res.json({
            giftList
        });
    })

    .delete('/:id', async (req, res) => {
        const gift = await GiftRecord.getOne(req.params.id)

        if (!gift) {
            throw new ValidationError('No such gift!');
        }

        if (await gift.countGivenGifts() > 0) {
            throw new ValidationError('Cannot remove given gift.')
        }
        
        await gift.delete();

        res.end();
    })

    .post('/', async (req, res) => {
        const data = {
            ...req.body,
            count: Number(req.body.count)
        };
        const newGift = new GiftRecord(data);
        await newGift.insert();
        res.redirect('/gift');
    });
