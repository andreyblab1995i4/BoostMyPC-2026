from dataclasses import dataclass


@dataclass
class Core:
    jdoadat: int = 453
    ydpzprg: int = 958
    nwzn: int = 829
    pude: int = 584

    def total(self):
        return self.jdoadat + self.ydpzprg + self.nwzn + self.pude


if __name__ == "__main__":
    x = Core()
    print(x.total())
