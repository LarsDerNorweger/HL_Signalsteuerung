from clock import ClockSlave, Clock
from machine import Pin


class ShiftRegister(ClockSlave):
    data: Pin
    store: Pin
    shift: Pin
    enableOutput: Pin
    resetPin: Pin
    size: int

    queue = []

    def __init__(self, size: int, clock: Clock, data: int, storageClock: int, shiftClock: int, outputEnable: int, reset: int):
        super().__init__(clock)
        self.size = size
        self.data = Pin(data, Pin.OUT, Pin.PULL_DOWN)
        self.store = Pin(storageClock, Pin.OUT, Pin.PULL_DOWN)
        self.shift = Pin(shiftClock, Pin.OUT, Pin.PULL_DOWN)
        self.enableOutput = Pin(outputEnable, Pin.OUT, Pin.PULL_DOWN)
        self.resetPin = Pin(reset, Pin.OUT, Pin.PULL_DOWN)
        pass

    def reset(self):
        pass

    def setData(self, data):
        print("set datat", data)
        for i, e in enumerate(data):
            i += 1
            self.queue.append(
                [[self.shift, 1], [self.data, e]])  # type: ignore
            if(i % self.size == 0):
                self.queue.append([[self.store, 1]])  # type: ignore
        print("set datat", self.queue)

    def __executeTick(self, phase: bool):
        super().__executeTick(phase)
        self.store.value(0)
        self.data.value(0)
        self.shift.value(0)
        if(len(self.queue) > 0 and phase):
            li = self.queue.pop(0)
            print('---')
            for pin, val in li:
                print("pin value:", pin, val)
                pin.value(val)
        pass
