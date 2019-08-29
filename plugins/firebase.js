import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyC72HtCCnzzJ762plzzPdSS8h3bKTlRHE0",
    authDomain: "tourist-project-4ad9a.firebaseapp.com",
    databaseURL: "https://tourist-project-4ad9a.firebaseio.com",
    projectId: "tourist-project-4ad9a",
    storageBucket: "tourist-project-4ad9a.appspot.com",
    messagingSenderId: "AAAApGaxFBI:APA91bFa6i-cPgTlakYXmZVZOIDLHPI-VJZfsIXK9U2MBgEdq95fkfMUVMnq3KeLhPgkPHA72ULOLMns0fag9NGZPF2T5qOfIkJmI-FXCVkae1jgCZQ7Rrynhr2KmsDXbsA0pOulNo7A"
  })
}

export default firebase
