import {Tables} from './constants';

const config = {
  apiKey: "AIzaSyCAeQiQNLDxlmHPnryypmzKg58tAPqQ808",
  authDomain: "apsfac-3211f.firebaseapp.com",
  databaseURL: "https://apsfac-3211f.firebaseio.com",
  storageBucket: "apsfac-3211f.appspot.com",
};

firebase.initializeApp(config);

let dataService = firebase.database();
let provider = new firebase.auth.GoogleAuthProvider();

export const addItem = (item) => {
  dataService.ref(Tables.PEOPLE).push(item);
}

export const deleteItem = (item) => {
  dataService.ref(Tables.PEOPLE).child(item.id).remove()
    .catch(err => {
      console.log('Error deleting item: ' + err);
    });
};

export const getData = () => {
  return dataService.ref(Tables.PEOPLE).once('value');
};

export const subscribeToUpdates = (cb) => dataService.ref(Tables.PEOPLE).on('value', cb);

export const unsubscribeFromUpdates = () => dataService.ref(Tables.PEOPLE).off();

export const authPromise = () => firebase.auth().signInWithPopup(provider);

export const loggedUser = (cb) => {
  firebase.auth().onAuthStateChanged(user => {
    cb(user)
  });
};

export const logout = () => {
  return firebase.auth().signOut();
}

export const addMeal = (item, type) => {
  var uid = firebase.auth().currentUser.uid;
  var date = new Date();
  var today = date.toJSON().slice(0, 10);

  let dbData;
  dataService.ref(Tables.DAILY_INTAKE + '/' + uid + '/' + today).once('value')
    .then(snapshot => {
      dbData = snapshot.val();
      if (dbData === null || dbData === undefined) {
        dbData = {
          uid: uid,
          id: Date.now(),
          date: Date.now(),
          notes: '',
          water: 0,
          meals: {
            breakfast: [],
            lunch: [],
            dinner: [],
            snack: []
          }
        };
        dbData.meals[type].push(item);
      } else {
        if (dbData.meals[type] === undefined) {
          dbData.meals[type] = [];
        }
        dbData.meals[type].push(item);
      }
      dataService.ref(Tables.DAILY_INTAKE + '/' + uid + '/' + today).set(dbData);
    });
};
