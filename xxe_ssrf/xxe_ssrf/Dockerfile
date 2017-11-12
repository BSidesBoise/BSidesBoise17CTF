FROM richarvey/nginx-php-fpm

# set up nginx 
RUN sed -i 's/root \/usr\/share\/nginx\/html/root \/var\/www\/html/g' /etc/nginx/sites-enabled/default.conf 
RUN rm /var/www/html/*

# import web files
COPY web/ /var/www/html

COPY flag /root/flag
RUN echo 'more juice at xxe-nginx' > /root/hosts
RUN chmod -R 777 /root
