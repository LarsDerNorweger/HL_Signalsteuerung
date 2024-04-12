#
# HL_Signal_Steuerung BA-Glauchau
#
# Author(s): Colin Böttger
#

class State(object):
    signals:list = []
    signal:str= None
    on:bool= None
    error:str

    def __init__(self) -> None:
        self.signals = []
        self.signal = None
        self.on = True
        self.error = None
        self.normalize()

    def check_state(self):
        if self.signal not in self.signals:
            self.error = "Signals don't contain signal"
            self.signal = None
            self.signals = []
            self.on = False
            raise Exception(self.error)
        

    def normalize(self):
        print("NORMAL",self.__dict__)
        if self.on is None: 
            self.on = True
        
        if len(self.signals)<=0 and self.signal is not None:
            self.signals = [self.signal]

        if self.signal is None:
            l = len(self.signals)
            if l >0:
                 self.signal = self.signals[l-1]
            else: self.on = False

    def merge(self,state):
        for i in self.__dict__.keys():
            tmp = state.__dict__[i]
            if tmp is not None:
                self.__dict__[i] = tmp
        return self
