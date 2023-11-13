# VITE YU GI OH

## Descrizione:
- Create un nuovo progetto utilizzando Vite e Vue 3 e definite i componenti necessari per strutturare il layout come da screenshot allegato. <br>

- Al caricamento della pagina, effettuate una chiamata ajax all'API di Yu Gi Oh: https://db.ygoprodeck.com/api/v7/cardinfo.php <br>
Con i dati restituiti, stampate una card per ogni carta. <br>

**ATTENZIONE** <br>
l’api restituisce tutti i risultati in un colpo solo.<br>
Per evitare attese e/o rallentamenti nelle richieste, potete diminuire il numero di risultati sfruttando i parametri *num* e *offset*: <br>
https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0

**Bonus:** <br>
Creare un componente loader da visualizzare fintantoché i risultati non sono pronti.<br>