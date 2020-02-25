import App from 'next/app'
import 'isomorphic-unfetch';
import { withApollo } from '../services/apollo';
import 'typeface-roboto';

class MyApp extends App {
}

export default withApollo({ ssr: true })(MyApp);
