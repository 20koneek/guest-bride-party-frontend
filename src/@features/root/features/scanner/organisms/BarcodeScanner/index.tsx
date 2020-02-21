import React, { useState, useEffect, FC } from 'react'
//@ts-ignore
import Quagga from 'quagga'
import styles from './styles.css'
import { Props } from './types'

export const BarcodeScanner: FC<Props> = ({ onFindCode }) => {
  const [videoInit, setVideoInit] = useState(false)
  const [videoError, setVideoError] = useState(false)

  const onInitSuccess = () => {
    Quagga.start()
    setVideoInit(true)
  }

  const onDetected = (result: { codeResult: { code: string } }) => {
    try {
      onFindCode(result.codeResult.code)
      Quagga.offDetected(onDetected)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      Quagga.init({
        inputStream: {
          name: 'Live',
          type: 'LiveStream',
          target: document.querySelector('#video'),
        },
        numOfWorkers: 1,
        locate: true,
        decoder: {
          readers: ['ean_reader'],
        },
      }, (err: string) => {
        if (err) {
          console.log(err)
          setVideoError(true)
          return
        }
        onInitSuccess()
      })
      Quagga.onDetected(onDetected)
    }
  }, [])

  return (
    <div className={styles.video__container}>
      {videoError ? (
        <div className={styles.skeleton__unsopported}>
          <p>You can enter the barcode below</p>
        </div>
      ) : (
        <div>
          <div className={styles.video} id="video"/>
          {videoInit ? '' : 'VideoSkeleton'}
        </div>
      )}
    </div>
  )
}
