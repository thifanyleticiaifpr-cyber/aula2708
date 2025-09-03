var n1, n2, n3, n4, media, frequencia

n1=parseFloat(prompt("Digite a primeira nota: "))
n2=parseFloat(prompt("Digite a segunda nota: "))
n3=parseFloat(prompt("Digite a terceira nota: "))
n4=parseFloat(prompt("Digite a quarta nota: "))

frequencia=parseFloat(prompt("Qual a porcentagem da sua frequencia:"))

media=((n1+n2+n3+n4)/4)

if(media>=7 && frequencia>=75 ){   
     alert("Aprovado")   
}
else{
    alert("Reprovado")
}

