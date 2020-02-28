import App from 'next/app';
import 'isomorphic-unfetch';
import 'typeface-roboto';
import '../styles/main.scss';
import cookies from 'next-cookies';

type InitProps = {
  token?: string;
};

class MyApp extends App {
}

export default MyApp;
