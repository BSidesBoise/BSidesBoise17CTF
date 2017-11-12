PHPMailer < 5.2.18 Remote Code Execution 
 
git clone 
https://github.com/opsxcq/exploit-CVE-2016-10033
Touch flag.txt put bsb17_70726658dc2d7d181514e5a27d69dff500af4fcd
Change Docker file to copy flag.txt to /etc/flag.txt
Change Docker file to EXPOSE 80
Docker build -t phpmail .
docker run -d -p 8080:80 phpmail:latest
 
docker run --rm -it -p 8080:80 phpmail:latest
 
bsb17_70726658dc2d7d181514e5a27d69dff500af4fcd
 
Shown in metasploit
exploit/multi/http/phpmailer_arg_injection