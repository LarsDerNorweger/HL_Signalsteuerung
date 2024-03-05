# API

## Aufgabe
    - Abholen von Zustandsdaten
    - verändenrn des Zustandes
    - aktualiesierung erfplgt durch polling
    -
     polling erfolgt im 10s tackt => geringste auflöung 10s

## Steuerungen 
    Übertragung von signalschaltbildsequenzen

## Protokollaufbau

### Zustand setzten
    https://host/apiv1/setSequence?time=1&seq="HB1"

### möglich Zustände erfragen
    https://host/apiv1/getSequence => get List with all available Signs 

    => Client zeigt nur die an, welche er kennt und welche von Server unterstützt werden

### aktuellen Zustand erfragen
    https://host/apiv1/getState=> gibt zustand


