import prisma from "@/client/prisma";

import { EditProduct, PostProduct } from "./types";

const DEFAULT_RETURN_OBJECT = {
  uid: true,
  amount: true,
  name: true,
  plate_number: true,
};

export default class RFIDService {
  getRFIDById = async (uid: string) => {
    return await prisma.rFID.findFirst({
      where: { uid },
      select: DEFAULT_RETURN_OBJECT,
    });
  };

  getAllRFID = async () => {
    return await prisma.rFID.findMany({
      select: DEFAULT_RETURN_OBJECT,
    });
  };

  postRFID = async (payload: PostProduct) => {
    return await prisma.rFID.create({
      data: payload,
      select: DEFAULT_RETURN_OBJECT,
    });
  };

  editRFID = async (identifier: string, payload: EditProduct) => {
    return await prisma.rFID.update({
      data: payload,
      where: { plate_number: identifier },
      select: DEFAULT_RETURN_OBJECT,
    });
  };

  deleteRFID = async (identifier: string) => {
    return await prisma.rFID.deleteMany({
      where: {
        OR: [{ uid: identifier }, { plate_number: identifier }],
      },
    });
  };
}
