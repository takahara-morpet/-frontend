import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface FooterProps {
    
    
}

const Footer: React.FC<FooterProps> = ({
    
}): JSX.Element => {
    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={4}>
            <BottomNavigation
                showLabels
            >
                <BottomNavigationAction label="ホーム" icon={<HomeIcon />} />
                <BottomNavigationAction label="ユーザー" icon={<PeopleAltIcon />} />
                <BottomNavigationAction label="QR" icon={<QrCode2Icon />} />
                <BottomNavigationAction label="アカウント" icon={<AccountCircleIcon />} />
            </BottomNavigation>
        </Paper>
    )
}

export default Footer;