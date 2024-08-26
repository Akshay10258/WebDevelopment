#include<stdio.h>
#include<conio.h>

int romanToInt(char* s)
{
    int num=0;
    for(int i=0;s[i]!='/0';i++)
    {
        char roman=s[i];

        switch(roman)
        {
            case 'I':
                num+=1;
                break;
            case 'V':
                num+=5;
                break;
            case 'X':
                num+=10;
                break;
            case 'L':
                num+=50;
                break;
            case 'C':
                num+=100;
                break;
            case 'D':
                num+=500;
                break;

            case 'M':
                num+=1000;
                break;

        }
    }
}

int main()
{
    char romanInp[100];

    scanf("%s",&romanInp);

    romanToInt(romanInp);
}