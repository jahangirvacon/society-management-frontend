import { deleteReq, get, post, put, putFile } from "./fetch"
import { BOOKING, GURDWARA, GURDWARA_HALLS, HALL_EVENTS, EVENT_TYPE, HALL, BOOKING_DETAILS } from "./endpoints"

export const addBooking = (body) => {
  return post({ url: BOOKING, shouldAuthenticate: true, body, contentType: "application/json" })
}

export const addGurdwara = (body) => {
  return post({ url: GURDWARA, shouldAuthenticate: true, body, contentType: "application/json" })
}

export const addEventType = (body) => {
  return post({ url: EVENT_TYPE, shouldAuthenticate: true, body, contentType: "application/json" })
}

export const addHall = (body) => {
  return post({ url: HALL, shouldAuthenticate: true, body, contentType: "application/json" })
}

export const getBookingList = (search) => {
  return get({ url: `${BOOKING}?search=${search}`, shouldAuthenticate: true })
}

export const getBookingDetails = (bookingId) => {
  return get({ url: BOOKING_DETAILS(bookingId), shouldAuthenticate: true })
}

export const getEventList = () => {
  return get({ url: EVENT_TYPE, shouldAuthenticate: true })
}
export const getHallList = () => {
  return get({ url: HALL, shouldAuthenticate: true })
}

export const getGurdwaraList = async () => {
  return get({ url: GURDWARA, shouldAuthenticate: true })
}

export const getGurdwaraHalls = async (gurdwaraId) => {
  return get({ url: GURDWARA_HALLS(gurdwaraId), shouldAuthenticate: true })
}

export const getHallEvents = async (hallId) => {
  return get({ url: HALL_EVENTS(hallId), shouldAuthenticate: true })
}


export const deleteGurdwara = async (gurdwaraId) => {
  return deleteReq({ url: `${GURDWARA}/${gurdwaraId}`, shouldAuthenticate: true})
}
export const deleteHall = async (hallId) => {
  return deleteReq({ url: `${HALL}/${hallId}`, shouldAuthenticate: true})
}
export const deleteEventType = async (eventTypeId) => {
  return deleteReq({ url: `${EVENT_TYPE}/${eventTypeId}`, shouldAuthenticate: true})
}
export const deleteBooking = async (bookingId) => {
  return deleteReq({ url: `${BOOKING}/${bookingId}`, shouldAuthenticate: true})
}