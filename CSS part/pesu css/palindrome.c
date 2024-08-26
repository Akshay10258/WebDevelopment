#include <stdio.h>
#include <conio.h>
void palindrome(int x)
{
    int rev=0;

    while(x>0)
    {
        int digit=x%10;

        rev=rev*10+digit;
        x=x/10;
    }
    printf("%d",rev);
}

int main(){
    int num;
    scanf("%d",&num);

    palindrome(num);
}