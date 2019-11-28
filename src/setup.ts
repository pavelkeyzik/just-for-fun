import { initializeApp, performance } from 'firebase/app';
import 'firebase/performance';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { firebaseConfig } from './config';

initializeApp(firebaseConfig);
performance();
