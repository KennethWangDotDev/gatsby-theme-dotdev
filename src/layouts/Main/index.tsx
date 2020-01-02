import React from 'react';
import PageSetup from './components/PageSetup';
import Header from './components/Header';
import Footer from './components/Footer';
import Background from './components/Background';

const Main: React.FC<Props> = ({ children }: Props) => (
    <>
        <PageSetup />
        <Background>
            <Header />
            {children}
            <Footer />
        </Background>
    </>
);

export default Main;

type Props = {
    children?: React.ReactNode;
};
