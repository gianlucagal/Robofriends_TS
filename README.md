# Robofriends_TS

Il progetto RoboFriends, scritto utilizzando Typescript in React, si basa sull'utilizzo dell'API JSON Placeholder ed é una SPA. 
La chiamata all'API genera una sequenza di utenti inventati completi di tutti i dati anagrafici. L'applicazione crea un array di oggetti a cui assegna i dati recuperati dall'API. L'array viene poi mappato per creare una sequenza di "card" comprensive di nome utente, immagine e email. Le card vengono poi mostrate all'utente che non ha tuttavia azioni possibili da effettuare direttamente su di esse. 
L'utente puó, utilizzando il campo apposito presente nella parte alta del sito, filtrare la sequenza di utenti presenti andando a ricercare quello cercato. L'applicazione reagisce all'inserimento di caratteri nella barra di ricerca e va a creare una nuova sequenza di Card comprensive solamente delle specifiche richieste, in questo caso il nome utente, e mostra in tempo real il nuovo elenco di utenti.
La pagina si adatta dinamicamente alle dimensioni della finestra del browser ed é compatibile con dispositivi mobili e desktop.

