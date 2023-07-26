import express, {Request, Response, NextFunction} from 'express'
import { CreateVendorInputs } from '../dto'
import { Vendor } from '../models';

export const CreateVendor =async (req:Request, res: Response, next: NextFunction) => {
    const {name, address, pincode, foodType, email, password, ownerName, phone} = <CreateVendorInputs> req.body;

    const existingVendor = Vendor.findOne({email: email});

    if(existingVendor !== null){
        return res.json({message: "A vendor with the provided email already exists"});
    }

    const  createdVendor = await Vendor.create({
        name: name,
        address: address,
        pincode: pincode,
        foodType: foodType,
        email: email,
        password: password,
        salt: "salt",
        ownerName: ownerName,
        phone: phone,
        rating: 0,
        serviceAvailable: false,
        coverImage: []
    })

    res.json(createdVendor)
}