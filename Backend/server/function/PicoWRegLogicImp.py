from machine import Pin
import time

# Lookup Tabele for bit sequences
lookup_table = {
    "hrsignal1": "10101010",
    "hrsignal2": "11001100",
    "hrsignal3": "11110000",
    # ...
}

def lookup_signal(signal):
    # check if signal string in lookup table
    if signal in lookup_table:
        return lookup_table[signal]
    else:
        return None

def showSignal(signal:str):
    # Lookup for bitsequence (signal sting in, bit sequence out)
    #bitsequence = lookup_signal(signal)
    bitsequence = signal

    # Pin setup
    dataPIN = 20
    latchPIN = 19
    clockPIN = 18

    dataPIN=Pin(dataPIN, Pin.OUT)
    latchPIN=Pin(latchPIN, Pin.OUT)
    clockPIN=Pin(clockPIN, Pin.OUT)

    # Ensure all pins are low
    dataPIN.value(0)
    latchPIN.value(0)
    clockPIN.value(0)

    # Shift Out bits, !! change range to fit length of bitsequence
    for i in range(15, -1, -1):
        dataPIN.value(int(bitsequence[i]))
        clockPIN.value(1)
        clockPIN.value(0)
        # print("shifted " + str(dataPIN.value()))

    # Shift out to storage register
    latchPIN.value(1)
    latchPIN.value(0)