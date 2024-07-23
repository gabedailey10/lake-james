import React from 'react';
import CalendarWidget from '../../components/CalendarWidget';
import Head from 'next/head';
import { Nav } from '../../components/Nav';
import { Footer } from '../../components/Footer';

const CalendarPage: React.FC = () => {
  return (
    <>
    
      <Head>
        <title>Calendar page</title>
      </Head>
      <div className="flex flex-col items-center justify-center h-screen bg-slate-400">
      <Nav/>
        <h1 className="text-4xl mb-6">Event Calendar</h1>
        <CalendarWidget />
      </div>
      <Footer/>
    </>
  );
};

export default CalendarPage;
