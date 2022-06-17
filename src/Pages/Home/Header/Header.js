import { Container } from '@mui/system';
import React from 'react';
import head from '../../../Image/head1.jpg';
const Header = () => {
    return (
        <div>
            <Container sx={{mt: '10px'}} >
                <img  style={{width: '20%'}} src={head} alt= ''/>
            </Container>
        </div>
    );
};

export default Header;