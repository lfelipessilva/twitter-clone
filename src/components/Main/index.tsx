import React from 'react';
import ProfilePage from '../ProfilePage';
import Feed from '../Feed';
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
                    <strong>Luis Felipe</strong>
                    <span>613 Tweets</span>
                </ProfileInfo>
            </Header>
            <ProfilePage />

            <Feed />

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