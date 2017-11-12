https://github.com/opsxcq/exploit-CVE-2014-6271
 
Modify index.html to include "Oh you so smart.. This is my shocked face :-0
Touch flag.txt o
create flag.txt copy to /repository directory
Change the Docker build file to include COPY flag.txt /etc/flag.txt
 
docker build -t shellshock . 
 
docker run -d -p 8084:80 shellshock
 
 
 
Flag.txt for shellshock
md5sum index.html on Ubuntu or shasum on Mac OSx
bsb17_a05c328a1a66cea2723191786c30a409c6005520
 
use exploit/multi/http/apache_mod_cgi_bash_env_exec
