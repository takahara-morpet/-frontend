'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import PageRoutes from '../../constants/page-routes';

import QRModal from '../../components/molecules/qr-modal';

const Footer: React.FC = (): JSX.Element => {

    const [isOpen, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const router = useRouter();

    const clickHome = () => router.push(PageRoutes.EVENTS_URL);
    const clickUsers = () => router.push(PageRoutes.USERS_URL);
    const clickProfile = () => router.push(PageRoutes.PROFILE_URL);

    const styles = {
        footer: {
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
        },
    }

    return (
        <>
            <Paper sx={styles.footer} elevation={4}>
                <BottomNavigation >
                    <BottomNavigationAction icon={<HomeIcon />} onClick={clickHome} />
                    <BottomNavigationAction icon={<PeopleAltIcon />} onClick={clickUsers} />
                    <BottomNavigationAction icon={<QrCode2Icon />} onClick={handleOpen} />
                    <BottomNavigationAction icon={<AccountCircleIcon />} onClick={clickProfile} />
                </BottomNavigation>
            </Paper>
            <QRModal qrSrc="/sample/QR.jpg" handleClose={handleClose} isOpen={isOpen} />
        </>
    )
}

export default Footer;