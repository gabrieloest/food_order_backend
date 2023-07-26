import express, {Request, Response, NextFunction} from 'express'
import { CreateVendorInputs } from '../dto'

export const CreateVendor =async (req:Request, res: Response, next: NextFunction) => {
    const {name, address, pincode, foodType, email, password, ownerName, phone} = <CreateVendorInputs> req.body;

    res.json({name: name})
}