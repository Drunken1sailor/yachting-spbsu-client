import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const CheckServerConnection = async () => {
    try {
      // await Axios.head("http://95.163.234.33:3001/");
      await Axios.head("http://95.163.234.33:3001/");
      console.log("Соединение с сервером установлено");
      // Здесь вы можете выполнять другие действия после успешного подключения
    } catch (error) {
      console.error("Ошибка подключения к серверу:\n", error.message);
      // Здесь можно обработать ошибку подключения
    }
};
export default CheckServerConnection;