Calendario Interattivo "Advent Calendar". Il progetto riguarda la realizzazione di un calendario dell'Avvento dell'anno 2024 in cui al click della casella deve mostrarsi una modale che presenta o un'immagine o un contenuto testuale. 
Ogni casella cliccata deve essere oscurata e il sistema deve essere in grado di tenere traccia delle caselle già cliccate. Un pulsante "Reset" consente all'utente di azzerare le caselle già cliccate. 

Per realizzare il calendario interattivo è stato necessario:
1) creare la struttura di markup statico in HTML e CSS per testare stili e proporzioni dell'header e delle caselle del calendario
2) popolare dinamicamente con JavaScript le icone contenute nel file source.js, che ospita un array ad oggetti: dopo aver individuato il contenitore di riferimento per le caselle, è stato effettuato un ciclo for per ripetere il template necessario
   per generare le varie caselle, usando la sintassi in literale e interpolazione e sfruttando la dot notation per accedere alle proprietà degli oggetti corrispondenti alle icone
3) creare il markup in HTML e CSS statico delle modali per testarne stili e proporzioni partendo da un'immagine e da un testo di esempio e nasconderle all'aeprtura del documento HTML aggiungendo delle classi apposite
5) popolare dinamicamente il contenuto delle modali all'interno dello stesso ciclo for stabilendo delle condizioni basate sul tipo di contenuto
6) creare una funzione per mostrare la modale modificando le proprietà di stile del markup di base e un'altra funzione per chiudere la modale da applicare al pulsante "Chiudi"
7) abilitare su ogni casella la funzione per mostrare la modale e modificarla affinché cambi lo stile della casella ogni volta che viene cliccata dall'utente
8) sfruttare il localStorage per memorizzare le caselle cliccate dall'utente
9) creare un pulsante "Reset" per svuotare lo storage
10) aggiungere la modalità responsive

Tecnologie utilizzate:
HTML
CSS
JavaScript

Il progetto nasce dalla volontà di esercitarsi sulla creazione di un template interattivo e dinamico, consolidare le conoscenze già acquisite e imparare nuove procedure in merito ai linguaggi HTML,CSS e JavaScript. 
