import prisma from "@/client/prisma";

import { EditSlot, PostSlot } from "./type";

const DEFAULT_RETURN_OBJECT = {
  id: true,
  slot: true,
  name: true,
  is_occupied: true,
};

export default class Reservation {
  getReservationBySlot = async (slot: number) => {
    return await prisma.reservation.findFirst({
      where: { slot },
      select: DEFAULT_RETURN_OBJECT,
    });
  };

  getReservations = async () => {
    return await prisma.reservation.findMany({
      select: DEFAULT_RETURN_OBJECT,
    });
  };

  postReservation = async (payload: PostSlot) => {
    return await prisma.reservation.create({
      data: payload,
      select: DEFAULT_RETURN_OBJECT,
    });
  };

  editReservation = async (slot: number, payload: EditSlot) => {
    return await prisma.reservation.update({
      data: payload,
      where: { slot },
      select: DEFAULT_RETURN_OBJECT,
    });
  };

  deleteReservation = async (slot: number) => {
    return await prisma.reservation.delete({
      where: { slot },
      select: DEFAULT_RETURN_OBJECT,
    });
  };
}
