export const getCroppedImg = async (
  imageSrc: string,
  crop: { x: number; y: number; width: number; height: number }
): Promise<Blob | null> => {
  const image = new Image()
  image.src = imageSrc
  await new Promise((resolve) => (image.onload = resolve))

  const canvas = document.createElement("canvas")
  const ctx = canvas.getContext("2d")
  if (!ctx) return null

  canvas.width = crop.width
  canvas.height = crop.height
  ctx.beginPath()
  ctx.arc(
    crop.width / 2,
    crop.height / 2,
    crop.width / 2,
    0,
    2 * Math.PI
  )
  ctx.clip()

  ctx.drawImage(
    image,
    crop.x,
    crop.y,
    crop.width,
    crop.height,
    0,
    0,
    crop.width,
    crop.height
  )

  return new Promise((resolve) => {
    canvas.toBlob((blob) => resolve(blob), "image/jpeg")
  })
}
