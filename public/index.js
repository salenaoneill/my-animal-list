
const cloudinary = require('cloudinary').v2;


// Configuration 
cloudinary.config({
  cloud_name: "dxjmp1tuv",
  api_key: "825679494516999",
  api_secret: "kiR9vvpM4nSsqgCS96KSY9N2SLo"
});


// Upload 


const res = cloudinary.uploader.upload('https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg', {public_id: "olympic_flag"})

res.then((data) => {
  console.log(data);
  console.log(data.secure_url);
}).catch((err) => {
  console.log(err);
});


// Generate 
const url = cloudinary.url("olympic_flag", {
  width: 100,
  height: 150,
  Crop: 'fill'
});



// The output url
console.log(url);
// https://res.cloudinary.com/<cloud_name>/image/upload/h_150,w_100/olympic_flag


function showUploadWidget() {
    cloudinary.openUploadWidget({
       cloudName: "<cloud name>",
       uploadPreset: "<upload preset>",
       sources: [
           "local",
           "url",
           "camera",
           "image_search",
           "google_drive",
           "facebook",
           "dropbox",
           "instagram",
           "shutterstock",
           "getty",
           "istock",
           "unsplash"
       ],
       googleApiKey: "<image_search_google_api_key>",
       showAdvancedOptions: true,
       cropping: true,
       multiple: false,
       defaultSource: "local",
       styles: {
           palette: {
               window: "#FFFFFF",
               windowBorder: "#90A0B3",
               tabIcon: "#0078FF",
               menuIcons: "#5A616A",
               textDark: "#000000",
               textLight: "#FFFFFF",
               link: "#0078FF",
               action: "#FF620C",
               inactiveTabIcon: "#0E2F5A",
               error: "#F44235",
               inProgress: "#0078FF",
               complete: "#20B832",
               sourceBg: "#E4EBF1"
           },
           fonts: {
               default: {
                   active: true
               }
           }
       }
   },
    (err, info) => {
      if (!err) {    
        console.log("Upload Widget event - ", info);
      }
     });
    }