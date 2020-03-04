import App from 'next/app';
import 'isomorphic-unfetch';
import 'typeface-roboto';
import '../styles/main.scss';
import cookies from 'next-cookies';
import { withMuiApp } from '../hocs/withMui';

class MyApp extends App {
}

export default withMuiApp(MyApp);
