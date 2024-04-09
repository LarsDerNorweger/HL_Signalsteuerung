# API

## Aufgabe
    - Abholen von Zustandsdaten
    - verändenrn des Zustandes
    - aktualiesierung erfplgt durch polling
    -
     polling erfolgt im 5s tackt => geringste auflöung 5s

## Steuerungen 
    Übertragung von signalschaltbildsequenzen

## Protokollaufbau

### Laufzeit
    https://host/apiv1/time => {timeInSec:number}

### aktuellen Zustand erfragen
    https://host/api/v1/state?data={signal:Signal[],on:boolean} => {shown:Signal, signal:Signal[],on:boolean}


