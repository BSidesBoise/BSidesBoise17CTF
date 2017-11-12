#include <stdio.h>
#include <string.h>

int main () {
   char command[50];

   strcpy( command, "cat /root/flag" );
   system(command);

   return(0);
} 