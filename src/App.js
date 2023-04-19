import React, { useState } from 'react';
import Header from './Components/Header/Header';
import TopMain from './Components/TopMain/TopMain';
import Benefits from './Components/Benefits/Benefits';
import Catalog from './Components/Catalog/Catalog';
import Principe from './Components/Principe/Principe';
import Assembling from './Components/Assembling/Assembling';
import Catalog2 from './Components/Catalog2/Catalog2';
import Footer from './Components/Footer/Footer';
import { Context } from './Context';

const App = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const sendFormtoTelegram = (data) => {
    const token = `6119196221:AAEXXGVCE4pSwmzm8eMA8KYWxRJGyUi9e3A`
    const chatId = `-1001725855700`
    const text = `${data}`

    fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${text}`)
      .then(response => {

        if (!response.ok) {
          throw new Error('Ошибка отправки сообщения в Telegram');
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  const postForm = () => {
    if (name && phone.length >= 9) {
      sendFormtoTelegram(`Имя:${name}%0AНомер:${phone}`)
    }
  }
  return (
    <Context.Provider value={{ name, setName, phone, setPhone, sendFormtoTelegram, postForm }}>
      <div>
        <Header />
        <main>
          <TopMain />
          <Benefits />
          <Catalog />
          <Principe />
          <Assembling />
          <Catalog2 />
        </main>
        <Footer />

      </div>
    </Context.Provider>
  );
};

export default App;