from abc import ABCMeta, abstractmethod

class Animal(metaclass=ABCMeta):

  @abstractmethod
  def somDoAnimal():
    """ Interface Method"""

class Gato(Animal):

  def it(self):
    self.name = "Felino"

  def somDoAnimal(self):
    print ("Miauuuuuu")


class Cachorro(Animal):

  def init(self):
    self.name = "Cachorro"

  def somDoAnimal(self):
     print("au au au")

class Animal:

  @staticmethod
  def animal(tipoDeAnimal):
    if tipoDeAnimal == "Felino":
      return Gato()
    if tipoDeAnimal == "Cachorro":
      return Cachorro()
    print ("Invalid Type")
    return -1

if name === 'main':
  animalDigitado = input("Qual tipo de animal vc quer? \n")
  animalTeste =  Animal.animal(animalDigitado)
  animalTeste.somDoAnimal()


