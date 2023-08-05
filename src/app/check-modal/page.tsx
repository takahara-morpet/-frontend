"use client";
import React from 'react'
import Image from 'next/image'
import QRModal from '../molecules/qr-modal'
import Button from '@mui/material/Button';

export default function Home() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <main className="flex min-h-screen flex-col justify-between p-3 md:p-24">
      {/* for develop */}
      <Button variant="contained" onClick={handleOpen}>Open QR</Button>
      <QRModal qrSrc="/sample/QR.jpg" handleOpen={handleOpen} handleClose={handleClose} isOpen={open} />
    </main>
  )
}