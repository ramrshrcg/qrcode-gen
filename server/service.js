//code for qr
//qr code
//service.js

const Qrcode= require('qrcode')
const formatData=(Data)=>
{
    const qrCodeText=`product id: ${Data.id}, price: $${Data.price}`
    return qrCodeText;
}

const generateQRCode=async (qrCodeText) =>{
    const options={
        errorCorrectionLevel:'M',
        type:'Image.png',
        margin :1,

    }
    const qrCodeBuffer=await Qrcode.toBuffer(qrCodeText,options)
    return qrCodeBuffer
}



module.exports={formatData,generateQRCode}