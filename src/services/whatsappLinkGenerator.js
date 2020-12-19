export const generateWhatsappMessage = (phoneNumber, message) => {
  return `https://api.whatsapp.com/send?phone=55${phoneNumber}&text=${encodeURI(
    message
  )}`
}
