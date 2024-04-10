#
# HL_Signal_Steuerung BA-Glauchau
#
# Author(s): Colin Böttger
#

class State(object):
    signals:str
    signal:str
    on:bool

    def __init__(self,signal = None,signals = None, on = False):
        self.signals = signals
        self.signal = signal
        self.on = on