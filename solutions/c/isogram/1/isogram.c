#include "isogram.h"

bool is_isogram(const char phrase[]) {
    //check if string is null
    if(phrase == NULL)
        return false;
    
    int n = strlen(phrase);
    char s[n];
    //convert to lower case
    for (int i = 0; i < n; i++) {
        s[i] = tolower(phrase[i]);
    }
    
    for (int i = 0; i < n; i++)
        for (int j = i+1; j < n; j++){
          if (s[i] == s[j] && s[i] != ' ' && s[i] != '-')
            return false;
    }
    return true;
}