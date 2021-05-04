import React from 'react';
import ProfilePage from '../ProfilePage';

import {
    Container,
    Header,
    BackIcon,
    ProfileInfo,
    BottomMenu,
    HomeIcon,
    SearchIcon,
    BellIcon,
    EmailIcon
} from './styles';

function Main() {
    return (
        <Container>
            <Header>
                <button>
                    <BackIcon />
                </button>

                <ProfileInfo>
                    <strong>Guilherme Rodz</strong>
                    <span>613 Tweets</span>
                </ProfileInfo>
            </Header>
            <ProfilePage />

            <BottomMenu>
                <HomeIcon />
                <SearchIcon />
                <BellIcon />
                <EmailIcon />
            </BottomMenu>
        </Container>
    );
}

export default Main;