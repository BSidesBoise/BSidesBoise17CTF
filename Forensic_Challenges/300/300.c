#include <stdio.h>

const char* hashchar = "abcdef0123456789";

unsigned hash_str(const char* s)
{
	unsigned h = 31;
	while (*s) {
		h = (h * 54059) ^ (s[0] * 76963);
		s++;
	}
	
	return h % 86969;
}

void getkey(){
	//bsb17_3693d14b9aaed96070a7295089f43c50
	  
	char* key_test = "bsb17_3693d14b9a741f3070a7295089f43c50"; 
	
	for(int i=0; i < 16; i++)
	{
		for(int j=0; j < 16; j++)
		{
			for(int k=0; k < 16; k++)
			{
				for(int l=0; l < 16; l++)
				{
					for(int m=0; m < 16; m++)
					{
						for(int n=0; n < 16; n++)
						{
							key_test[15] = hashchar[i];
							key_test[16] = hashchar[j];
							key_test[17] = hashchar[k];
							key_test[18] = hashchar[l];
							key_test[19] = hashchar[m];
							key_test[20] = hashchar[n];
							
							if(hash_str(key_test) == 41319)
							{
								printf("If we get to this point, we have our key.\n");
								return;
							}
						}
					}
				}
			}
		}
	}
}



int main () { 
	getkey();
	
	return 0;
}