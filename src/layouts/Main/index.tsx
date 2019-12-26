import React from 'react';
import PageSetup from '../components/PageSetup';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Main: React.FC<Props> = ({ children }: Props) => (
    <>
        <PageSetup />
        <Header />
        {children}
        <Footer />
    </>
);

export default Main;

type Props = {
    children?: React.ReactNode;
};
