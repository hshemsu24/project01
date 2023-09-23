import { useState } from 'react'
import arsenalLogo from './assets/arsenalLogo.png'
import totLogo from './assets/totLogo.png'
import brentLogo from './assets/brentLogo.png'
import bournLogo from './assets/bournLogo.png'
import lensLogo from './assets/lensLogo.png'
import cityLogo from './assets/cityLogo.png'
import chelsLogo from './assets/chelsLogo.png'
import sevLogo from './assets/sevLogo.png'
import shefLogo from './assets/shefLogo.png'
import newLogo from './assets/newLogo.png'
import Card from './components/Card'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div>
          <a href="https://www.arsenal.com/">
            <img src={arsenalLogo} className= "logo" />
          </a>
      </div>


      <h1>Upcoming Arsenal Fixtures</h1>
      
      <div className='cards'>
        <Card date= {"9/24/2023"} opponent = {"Tottenham"} oppLogo = {totLogo} location={"Emirates Stadium"} competition = {"Premier League"} link={"https://www.google.com/search?q=arsenal&rlz=1C1GCEB_enUS910US910&oq=ar&aqs=chrome.0.35i39i355i650j46i39i650j69i59l2j69i64j69i60l3.943j1j7&sourceid=chrome&ie=UTF-8#sie=m;/g/11svj14l_v;2;/m/02_tc;dt;fp;1;;;"}/>
        <Card date= {"9/27/2023"} opponent = {"Brentford"} oppLogo = {brentLogo} location={"Gtech Community Stadium"} competition = {"EFL Cup"} link={"https://www.google.com/search?q=arsenal&rlz=1C1GCEB_enUS910US910&oq=ar&aqs=chrome.0.35i39i355i650j46i39i650j69i59l2j69i64j69i60l3.943j1j7&sourceid=chrome&ie=UTF-8#sie=m;/g/11vd61250g;2;/m/012dbw;dt;fp;1;;;"}/>
        <Card date= {"9/30/2023"} opponent = {"Bournemouth"} oppLogo = {bournLogo} location={"Vitality Stadium"} competition = {"Premier League"} link={"https://www.google.com/search?q=arsenal&rlz=1C1GCEB_enUS910US910&oq=arse&aqs=chrome.0.35i39i355i650j46i39i650j69i59l2j69i64j69i60l3.757j1j7&sourceid=chrome&ie=UTF-8#sie=m;/g/11svj16505;2;/m/02_tc;dt;fp;1;;;"}/>
        <Card date= {"10/03/2023"} opponent = {"Lens"} oppLogo = {lensLogo} location={"Stade Bollaert-Delellis"} competition = {"UEFA Champions League"} link={"https://www.google.com/search?q=arsenal&rlz=1C1GCEB_enUS910US910&oq=ar&aqs=chrome.0.35i39i355i650j46i39i650j69i59l2j69i64j69i60l3.763j1j7&sourceid=chrome&ie=UTF-8#sie=m;/g/11vd88kq5q;2;/m/0c1q0;dt;fp;1;;;"}/>
        <Card date= {"10/08/2023"} opponent = {"Manchester City"} oppLogo = {cityLogo} location={"Emirates Stadium"} competition = {"Premier League"} link={"https://www.google.com/search?q=arsenal&rlz=1C1GCEB_enUS910US910&oq=ar&aqs=chrome.0.35i39i355i650j46i39i650j69i59l2j69i64j69i60l3.466j1j7&sourceid=chrome&ie=UTF-8#sie=m;/g/11kq89nbpy;2;/m/02_tc;dt;fp;1;;;"}/>
        <Card date= {"10/21/2023"} opponent = {"Chelsea"} oppLogo = {chelsLogo} location={"Stamford Bridge"} competition = {"Premier League"} link={"https://www.google.com/search?q=arsenal&rlz=1C1GCEB_enUS910US910&oq=ar&aqs=chrome.0.35i39i355i650j46i39i650j69i59l2j69i64j69i60l3.666j1j7&sourceid=chrome&ie=UTF-8#sie=m;/g/11v0thy5nj;2;/m/02_tc;dt;fp;1;;;"}/>
        <Card date= {"10/24/2023"} opponent = {"Sevilla"} oppLogo = {sevLogo} location={"Ramón Sánchez Pizjuán"} competition = {"UEFA Champions League"} link={"https://www.google.com/search?q=arsenal&rlz=1C1GCEB_enUS910US910&oq=ar&aqs=chrome.0.35i39i355i650j46i39i650j69i59l2j69i64j69i60l3.696j1j7&sourceid=chrome&ie=UTF-8#sie=m;/g/11l2262dtr;2;/m/0c1q0;dt;fp;1;;;"}/>
        <Card date= {"10/28/2023"} opponent = {"Sheffield United"} oppLogo = {shefLogo} location={"Emirates Stadium"} competition = {"Premier League"} link={"https://www.google.com/search?q=arsenal&rlz=1C1GCEB_enUS910US910&oq=ar&aqs=chrome.0.35i39i355i650j46i39i650j69i59l2j69i64j69i60l3.530j1j7&sourceid=chrome&ie=UTF-8#sie=m;/g/11kq89mj30;2;/m/02_tc;dt;fp;1;;;"}/>
        <Card date= {"11/04/2023"} opponent = {"Newcastle"} oppLogo = {newLogo} location={"St. James' Park"} competition = {"Premier League"} link={"https://www.google.com/search?q=arsenal&rlz=1C1GCEB_enUS910US910&oq=ar&aqs=chrome.0.35i39i355i650j46i39i650j69i59l2j69i64j69i60l3.636j1j7&sourceid=chrome&ie=UTF-8#sie=m;/g/11v0tj0yzr;2;/m/02_tc;dt;fp;1;;;"}/>
        <Card date= {"11/08/2023"} opponent = {"Sevilla"} oppLogo = {sevLogo} location={"Emirates Stadium"} competition = {"UEFA Champions League"} link={"https://www.google.com/search?q=arsenal&rlz=1C1GCEB_enUS910US910&oq=ar&aqs=chrome.0.35i39i355i650j46i39i650j69i59l2j69i64j69i60l3.547j1j7&sourceid=chrome&ie=UTF-8#sie=m;/g/11vd893x_6;2;/m/0c1q0;dt;fp;1;;;"}/>

      </div>
      


    </>
  )
}

export default App
 