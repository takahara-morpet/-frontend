'use client';
import React from 'react';
import Link from 'next/link';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import Routes from '../../constants/routes';

import QRModal from '../../components/molecules/qr-modal';


const Footer: React.FC = ({
}): JSX.Element => {

    const [isOpen, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={4}>
            <BottomNavigation showLabels>
                <Link href={Routes.HOME_URL}>
                    <BottomNavigationAction label="ホーム" icon={<HomeIcon />} />
                </Link>
                <Link href={Routes.PRO_USERS_URL}>
                <BottomNavigationAction label="ユーザー" icon={<PeopleAltIcon />} />
                </Link>
                <BottomNavigationAction label="QR" icon={<QrCode2Icon />} onClick={handleOpen} />
                <Link href={Routes.Profile_URL}>
                    <BottomNavigationAction label="アカウント" icon={<AccountCircleIcon />} />
                </Link>

            </BottomNavigation>
        </Paper>
        <QRModal qrSrc="/sample/QR.jpg" handleClose={handleClose} isOpen={isOpen} />
        </>
    )
}

export default Footer;