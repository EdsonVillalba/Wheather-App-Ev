'use client'
import classes from './Page.module.css'
import Page from '@/components/Page/Page';
import Section from '@/components/Section/Section';
import { ForecastStorePro } from '@/components/Forecast/Forecast';

export default function Home() {
  return (
    <ForecastStorePro>
    <div className={classes.container}>
      <Page />
      <Section />
    </div>
  </ForecastStorePro>
  )
}
