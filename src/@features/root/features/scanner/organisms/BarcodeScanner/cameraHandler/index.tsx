// import React, { lazy, Suspense, useState, useEffect, FC } from 'react'
//
// import dataHandler from '../dataHandler'
// import BarcodeInputField from '../barcodeInputField'
//
// import './cameraHandler.css'
//
// // @ts-ignore
// const Video = lazy(() => import('../Video'))
//
// const CameraHandler: FC = () => {
//
//   const [isCameraSupported, setCameraSupported] = useState(false)
//   const [isCameraEnabled, setCameraEnabled] = useState(dataHandler.isCameraPermissionGranted())
//
//   useEffect(() => {
//     if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//       setCameraSupported(true)
//     }
//   }, [])
//
//   const onCamEnabled = () => {
//     dataHandler.cameraPermissionGranted()
//     setCameraEnabled(true)
//   }
//
//   return (
//     <div style={{ width: '100%', height: '100%' }}>
//       {isCameraSupported && isCameraEnabled ?
//         <Suspense fallback={<div>Loading...</div>}>
//           <Video/>
//         </Suspense>
//         :
//         ''
//       }
//       {isCameraSupported && !isCameraEnabled ?
//         <>
//           <div className="cameraHandler__message">Enable your camera with the button below
//             <br/>
//             <div className="cameraHandler__messageIcon">ArrowDown</div>
//           </div>
//           <button type="button" aria-label="Enable Camera" className="btn__round camera__enable" onClick={onCamEnabled}>
//             Camera
//           </button>
//         </>
//         :
//         ''
//       }
//       {!isCameraSupported ?
//         <div className="cameraHandler__unsopported">
//           <div>
//             <p>Your device does not support camera access or something went wrong <span role="img"
//                                                                                         aria-label="thinking-face">🤔</span>
//             </p>
//             <p>You can enter the barcode below</p>
//             <BarcodeInputField/>
//           </div>
//         </div>
//         :
//         ''
//       }
//     </div>
//   )
// }
//
// export default CameraHandler
