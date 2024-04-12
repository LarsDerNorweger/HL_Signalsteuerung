#
# HL_Signal_Steuerung BA-Glauchau
#
# Author(s): Colin Böttger
#

from  function.state  import State

class Logic:
    

    state =State()

    def __init__(self,show,scetule) -> None:
        self.show = show
        self.scetule = scetule
        self.perform_update()

    def perform_update(self):
        if not self.state.on:
            self.show("")
            return
        
        self.scetule(self.perform_update,10)
        l = len(self.state.signals)
        if l <= 1:
            return self.show(self.state.signal)

        i = self.state.signals.index(self.state.signal)
        i+=1
        if i >= l:
            i = 0
        self.state.signal = self.state.signals[i]
        self.show(self.state.signal)


    def set_state(self,state:State):
        state.normalize()
        state.check_state()
        self.state.merge(state)
        self.perform_update()
        pass

    def get_state(self)->State:
        return self.state