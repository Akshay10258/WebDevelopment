#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() {

    /* Enter your code here. Read input from STDIN. Print output to STDOUT */
    int n;
    scanf("%d", &n);
    int nums[n];
    int frequency[1001] = {0};
    int maxFreq = 0;
    int mostFrequentEven = -1;
    
    for(int i=0;i<n;i++){
        scanf("%d",&nums[i]);
    }
    for (int i = 0; i < n; i++) {
        if (nums[i] % 2 == 0) {
            frequency[nums[i]]++;
            if (frequency[nums[i]] > maxFreq) {
                maxFreq = frequency[nums[i]];
                mostFrequentEven = nums[i];
            } else if (frequency[nums[i]] == maxFreq && nums[i] < mostFrequentEven) {
                mostFrequentEven = nums[i];
            }
        }
    }

    printf("%d\n", mostFrequentEven);
    
    return 0;
}