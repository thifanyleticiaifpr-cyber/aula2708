var n1,n2, result

n1=parseInt(promt("Digite um numero: "))
n2=parseInt(promt("Digite um numero: "))

result=n1+n2

if(result>20){
    result=result+8
    alert("O resultado, somando com 8 é: "+result)
}

else{
    result=result-5
    alert("O resultado subtraindo 5 : "+result)
}