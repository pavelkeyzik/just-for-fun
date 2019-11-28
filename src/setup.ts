import * as firebase from 'firebase/app';
import 'firebase/performance';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { firebaseConfig } from './config';

firebase.initializeApp(firebaseConfig);
firebase.performance();
