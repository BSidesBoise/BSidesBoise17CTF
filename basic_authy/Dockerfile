FROM nginx

COPY html /usr/share/nginx/html

# Remove the default Nginx configuration file
RUN rm -v /etc/nginx/nginx.conf

# Copy a configuration & auth file from the current directory
ADD nginx.conf /etc/nginx/
ADD auth.htpasswd /etc/nginx/

# Expose ports
EXPOSE 80

# Set the default command to execute when creating a new container
CMD service nginx start
