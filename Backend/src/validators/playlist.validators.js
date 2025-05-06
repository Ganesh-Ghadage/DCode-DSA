import { body, param } from "express-validator"

export const createPlaylistValidator = () => {
  return [
    body("name")
     .trim()
     .notEmpty().withMessage("Playlist name is required"),
    body("description")
      .trim()
      .isLength({max: 250}).withMessage("Description can not be more that 250 chars")
  ]
}

export const playlistIdPramaValidator = () => {
  return [
    param("playlistId")
      .trim()
      .notEmpty().withMessage("Playlist Id is required")
      .isUUID().withMessage("Invalid Playlist Id")
  ]
}