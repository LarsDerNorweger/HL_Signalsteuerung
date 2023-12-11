

from machine import Timer


class Clock:
    slaves = []
    freq: int = 1
    phase: bool = False
    timer: Timer | None = None

    def __init__(self, frequencyHz: int):
        self.freq = frequencyHz
        pass

    def start(self):
        if self.timer:
            return
        self.timer = Timer()
        self.timer.init(mode=Timer.PERIODIC, freq=self.freq,
                        callback=lambda t: self.execute())

    def stop(self):
        if not self.timer:
            return
        self.timer.deinit()
        self.timer = None

    def __addSlave(self, slave):
        self.slaves.append(slave)

    def execute(self):
        for i in self.slaves:
            i.__executeTick(self.phase)
        self.phase = not self.phase


class ClockSlave():
    def __init__(self, parent: Clock):
        parent.__addSlave(self)

    def __executeTick(self, phase: bool):
        pass
