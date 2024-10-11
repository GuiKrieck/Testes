# Teste
## Resposta para as questões 3, 4 e 5

3) Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA); Ao final do processamento, qual será o valor da variável SOMA?

Resposta a Variável Soma terá o valor 77;

4) Descubra a lógica e complete o próximo elemento:
a) 1, 3, 5, 7, __(9)
b) 2, 4, 8, 16, 32, 64, ___(128)
c) 0, 1, 4, 9, 16, 25, 36, ___(49)
d) 4, 16, 36, 64, ___(100)
e) 1, 1, 2, 3, 5, 8, ___(13)
f) 2,10, 12, 16, 17, 18, 19, ___(200)

Respostas

a - sequencia de numeros impares sucessivos
b - o numero seguinte é o dobro do número anterior
c - números naturais maiores que zero elevados ao quadrado
d - numeros naturais e pares maiores que 0 elevados ao quadrado
e - sequencia de Fibonacci onde o próximo valor é a soma dos dois valores anteriores
f - esses números não parecem ter lógica matemática envolvida, a única caracteristica que eles contém é que todos começam com a letra D


5) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que está,  mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?  

Resposta:
 Primeiro classifico os interruptores como 1, 2 e 3, então ascendo o interruptor 1 e o deixo acesso por alguns minutos então o apago, e acendo o interruptor 2, vou até a primeira sala com a lampada, se a lampada estiver acessa então ela é controlada pelo interruptor 2, caso esteja apagada e quente ela é controlada pelo interruptor 1 e caso esteja apagada e fria, ela é controlada pelo interruptor 3.
 Com o resultado do primeiro teste em mãos, ligo um dos interruptores que não pertecem a lampada da sala 1, vou até a sala 2 se ela estiver ligada aquela lampada pertence aquele interruptor, e caso ela esteja apagada aquela lampada pertence ao outro interruptor que não controla a lampada da sala 1
