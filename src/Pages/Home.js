import React from 'react';
import { Heading, PageBuilder } from '../Components';
import PAGES from '../constants/pages';

function Home(props) {
    return (
        <div>
            <Heading type="h1">{PAGES.HOME.title}</Heading>
            <PageBuilder rows={PAGES.HOME.rows} />
        </div>
    );
}

export default Home;