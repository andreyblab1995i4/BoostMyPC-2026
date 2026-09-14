from dataclasses import dataclass


@dataclass
class Runner:
    mrljz: int = 137
    saauzeu: int = 478
    xzmn: int = 675
    scst: int = 227

    def total(self):
        return self.mrljz + self.saauzeu + self.xzmn + self.scst


if __name__ == "__main__":
    x = Runner()
    print(x.total())
